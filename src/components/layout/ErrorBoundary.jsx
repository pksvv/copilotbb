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
    console.error('Financial App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#151518] text-white flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-red-400 mb-4">
              Financial System Error
            </h1>
            <p className="text-gray-400 mb-6">
              A critical error occurred in the financial dashboard.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#FF8000] text-white rounded hover:bg-[#FF8000]/80"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;