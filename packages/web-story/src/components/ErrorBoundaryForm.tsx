import { type PageModelInterface } from '@qctoken/register';
import { Component, type ReactNode } from 'react';
import { RenderWithForm } from './RenderWithForm';

type Props = {
  pageStore: PageModelInterface;
  children: ReactNode;
};

export class ErrorBoundaryForm extends Component<Props> {
  state = { errorType: '' };

  static getDerivedStateFromError(error: any) {
    if (error.message === 'You should pass context for use fields') {
      return { errorType: 'form' };
    }

    return { errorType: 'fail' };
  }

  render() {
    switch (this.state.errorType) {
      case 'form':
        return (
          <RenderWithForm pageStore={this.props.pageStore}>
            {this.props.children}
          </RenderWithForm>
        );
      case 'fail':
        return <h1>Sorry, we found error while rendering components</h1>;
      default:
        return this.props.children;
    }
  }
}
