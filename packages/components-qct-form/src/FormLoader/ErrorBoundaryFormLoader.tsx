import { Component, PropsWithChildren } from 'react';

export class ErrorBoundaryFormLoader extends Component<
  PropsWithChildren<unknown>
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
