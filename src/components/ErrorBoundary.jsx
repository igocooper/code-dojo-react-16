import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        isError: false
    }

    componentDidCatch() {
        this.setState({isError: true });
    }

    render() {
        if (this.state.isError) {
            return (
                <div>
                    <p> 🚧👷🚧</p>
                    <p>Упс. Произошла ошибка❗️</p>
                    <button onClick={()=> console.log('Сообщить об ошибке')}>Сообщить об ошибке 💬</button>
                </div>
            );
        }

        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default ErrorBoundary;