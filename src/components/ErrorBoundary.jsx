import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        errorMessage: ''
    };
    static getDerivedStateFromError(error) {
        console.log(error);
        return {errorMessage: error.toString()}
    }
    componentDidCatch(error, info) {
        console.log(error);
    }
    render() {
        if (this.state.errorMessage) {
            return (
                <p>
                    {this.state.errorMessage}
                </p>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;
