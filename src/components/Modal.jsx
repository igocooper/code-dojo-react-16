import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

export default class Modal extends React.Component {

    componentWillMount() {
        // create container entrypoint and add it to the dom
        this.portal = document.createElement('div');
        document.body.appendChild(this.portal);
    }

    componentWillUnmount() {
        // remove entrypoint when conponent is no more in use
        document.body.removeChild(this.portal)
    }
  
    render() {
        return ReactDOM.createPortal(
                (<div className="modal">
                    <button className="modal__close-button" onClick={this.props.toggleModal}>Закрыть</button>
                    {this.props.children}
                </div>),
                this.portal
            )
            
    }
}