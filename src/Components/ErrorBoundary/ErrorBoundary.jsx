import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render () {
    if (this.state.hasError) {
      return <h1 style={{color: 'lightsalmon', textAlign: 'center'}}>Something went wrong...</h1>
    }
    return  this.props.children;
  }
}