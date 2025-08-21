import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Micro frontend crashed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>⚠️ Remote service failed to load ⚠️</h2>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
