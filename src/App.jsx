import React, { Component } from 'react';

import './App.css';
import logo from './logo.svg';
import Modal from './components/Modal';

export default class App extends Component {
    state = {
        isModalOpen: false
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    };
    render() {
        return (
            <div className="app">
                <header>
                    <img src={logo} alt="React logo" />
                    <h1>React 16</h1>
                </header>
                <button onClick={this.toggleModal}>Открыть</button>
                {this.state.isModalOpen && 
                    // modal will open itself in the portal
                    <main>
                        <Modal toggleModal={this.toggleModal} />
                    </main>
                }
            </div>
        );
    }
}