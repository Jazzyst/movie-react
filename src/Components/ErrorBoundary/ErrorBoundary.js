import React from 'react';

export class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render () {
    if (this.state.hasError) {
      return <h1 style={{color: '#ffffff', textAlign: 'center'}}>Something went wrong...</h1>
    }
    return  this.props.children;
  }
}