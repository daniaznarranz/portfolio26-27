import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback-container">
          <div className="error-fallback-card glass-card">
            <h2 className="error-title">
              <span className="text-highlight">¡Ups!</span> Algo salió mal
            </h2>
            <p className="error-desc">
              Ha ocurrido un error inesperado al cargar esta sección. Pero no te preocupes, puedes volver a intentarlo o regresar al inicio de forma segura.
            </p>
            <div className="error-actions-row">
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  if (this.props.onReset) this.props.onReset();
                }}
              >
                Volver al Inicio
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => {
                  window.location.reload();
                }}
              >
                Recargar Página
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
