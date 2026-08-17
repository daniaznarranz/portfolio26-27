import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

import './TextLoop.css';

const buildPath = (shape, curviness, ribbonWidth, width, height) => {
  const c = Math.max(0, curviness);
  const cx = width / 2;
  const cy = height / 2;
  const edgePad = 6;
  const room = Math.max(20, cy - Math.max(0, ribbonWidth) / 2 - edgePad);

  switch (shape) {
    case 'circle': {
      const r = Math.min(90 + c * 0.95, room);
      return `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy} Z`;
    }
    case 'infinity': {
      const r = 150 + c * 1.4;
      const h = Math.min(60 + c * 0.95, room);
      return [
        `M ${cx} ${cy}`,
        `C ${cx + r * 0.55} ${cy - h} ${cx + r} ${cy - h} ${cx + r} ${cy}`,
        `C ${cx + r} ${cy + h} ${cx + r * 0.55} ${cy + h} ${cx} ${cy}`,
        `C ${cx - r * 0.55} ${cy - h} ${cx - r} ${cy - h} ${cx - r} ${cy}`,
        `C ${cx - r} ${cy + h} ${cx - r * 0.55} ${cy + h} ${cx} ${cy}`,
        'Z'
      ].join(' ');
    }
    case 'arch': {
      const rise = Math.min(120 + c * 1.1, room * 2);
      return `M 120 ${cy + rise / 2} Q ${cx} ${cy - rise * 1.5} ${width - 120} ${cy + rise / 2}`;
    }
    case 'line':
      return `M -600 ${cy} L ${width + 600} ${cy}`;
    case 'wave':
    default: {
      const a = Math.min(c * 2.2, room * 2);
      return `M -600 ${cy} Q -300 ${cy - a} 0 ${cy} T 300 ${cy} T 600 ${cy} T 900 ${cy} T 1200 ${cy} T ${width + 600} ${cy}`;
    }
  }
};

const TextLoop = ({
  text = 'React ✦ Bits',
  shape = 'wave',
  path,
  speed = 90,
  direction = 'forward',
  separator = '✦',
  curviness = 90,
  fontSize = 46,
  fontWeight = 800,
  letterSpacing = 2,
  uppercase = true,
  color = '#ffffff',
  ribbon = true,
  ribbonColor = '#FFA21F',
  ribbonWidth = 86,
  pauseOnHover = true,
  className = '',
  style = {}
}) => {
  const rootRef = useRef(null);
  const pathRef = useRef(null);
  const measureRef = useRef(null);
  const headRef = useRef(null);
  const tailRef = useRef(null);

  const [metrics, setMetrics] = useState({ length: 0, reps: 2 });
  const [containerSize, setContainerSize] = useState({ width: 1200, height: 64 });

  const rawId = useId();
  const pathId = `text-loop-${rawId.replace(/:/g, '')}`;

  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  // Track parent element dimensions dynamically
  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerSize({
        width: entry.contentRect.width || 1200,
        height: entry.contentRect.height || 64
      });
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, []);

  const isClosed = shape === 'circle' || shape === 'infinity';
  const d = useMemo(() => path || buildPath(shape, curviness, ribbonWidth, containerSize.width, containerSize.height), [path, shape, curviness, ribbonWidth, containerSize]);

  const unit = useMemo(() => {
    const base = uppercase ? String(text).toUpperCase() : String(text);
    const gap = separator ? `\u00A0${separator}\u00A0` : '\u00A0\u00A0\u00A0';
    return `${base}${gap}`;
  }, [text, separator, uppercase]);

  const textStyle = useMemo(
    () => ({ fontSize: `${fontSize}px`, fontWeight, letterSpacing: `${letterSpacing}px` }),
    [fontSize, fontWeight, letterSpacing]
  );

  // Measure text length and repetition metrics dynamically
  useIsomorphicLayoutEffect(() => {
    const pathEl = pathRef.current;
    const measureEl = measureRef.current;
    if (!pathEl || !measureEl) return undefined;

    let cancelled = false;

    const measure = () => {
      if (cancelled) return;
      let length = 0;
      let unitWidth = 0;
      try {
        length = pathEl.getTotalLength();
        unitWidth = measureEl.getComputedTextLength();
      } catch {
        return;
      }
      if (!length || !unitWidth) return;

      const reps = isClosed
        ? Math.max(1, Math.round(length / unitWidth))
        : Math.max(2, Math.ceil(length / unitWidth) + 1);

      setMetrics(prev => (prev.length === length && prev.reps === reps ? prev : { length, reps }));
    };

    measure();
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => { });
    }

    return () => {
      cancelled = true;
    };
  }, [d, unit, fontSize, fontWeight, letterSpacing, isClosed]);

  // Animate startOffset of the textPath
  useEffect(() => {
    const { length } = metrics;
    const head = headRef.current;
    if (!head || !length) return undefined;

    const measureEl = measureRef.current;
    let unitWidth = 0;
    try {
      unitWidth = measureEl.getComputedTextLength();
    } catch {}
    if (!unitWidth) return undefined;

    const apply = offset => {
      if (isClosed) {
        const partner = offset >= 0 ? offset - length : offset + length;
        head.setAttribute('startOffset', String(offset));
        if (tailRef.current) tailRef.current.setAttribute('startOffset', String(partner));
      } else {
        head.setAttribute('startOffset', String(offset));
      }
    };

    const startVal = isClosed ? 0 : 600;
    apply(startVal);

    const prefersReduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || speed <= 0) return undefined;

    const state = { offset: startVal };
    const targetVal = isClosed
      ? (direction === 'reverse' ? -length : length)
      : (direction === 'reverse' ? 600 + unitWidth : 600 - unitWidth);
    
    const distance = Math.abs(targetVal - startVal);

    const tween = gsap.to(state, {
      offset: targetVal,
      duration: distance / speed,
      ease: 'none',
      repeat: -1,
      onUpdate: () => apply(state.offset)
    });

    const root = rootRef.current;
    const pause = () => tween.pause();
    const resume = () => tween.resume();

    if (pauseOnHover && root) {
      root.addEventListener('pointerenter', pause);
      root.addEventListener('pointerleave', resume);
    }

    return () => {
      tween.kill();
      if (pauseOnHover && root) {
        root.removeEventListener('pointerenter', pause);
        root.removeEventListener('pointerleave', resume);
      }
    };
  }, [metrics, speed, direction, pauseOnHover, isClosed]);

  const loopText = unit.repeat(metrics.reps);
  const fitLength = isClosed ? metrics.length : undefined;

  return (
    <div ref={rootRef} className={`text-loop ${className}`.trim()} style={style}>
      <svg
        className="text-loop-svg"
        viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label={text}
      >
        <path
          ref={pathRef}
          id={pathId}
          d={d}
          fill="none"
          stroke={ribbon ? ribbonColor : 'none'}
          strokeWidth={ribbon ? ribbonWidth : 0}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <text ref={measureRef} className="text-loop-measure" style={textStyle} aria-hidden="true">
          {unit}
        </text>

        <text className="text-loop-text" style={textStyle} fill={color} dominantBaseline="central" aria-hidden="true">
          <textPath ref={headRef} href={`#${pathId}`} startOffset={isClosed ? 0 : 600} textLength={fitLength} lengthAdjust="spacing">
            {loopText}
          </textPath>
        </text>

        {isClosed && (
          <text className="text-loop-text" style={textStyle} fill={color} dominantBaseline="central" aria-hidden="true">
            <textPath ref={tailRef} href={`#${pathId}`} startOffset={0} textLength={fitLength} lengthAdjust="spacing">
              {loopText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default TextLoop;
