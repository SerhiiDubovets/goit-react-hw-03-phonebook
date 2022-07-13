import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { BlokModal, Modals } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleModal);
  }

  hendleModal = e => {
    if (e.code === 'Escape') {
      console.log(e.code);
      this.props.onClose();
    }
  };

  handleBackdrop = event => {
    console.log(event.target);
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <BlokModal onClick={this.handleBackdrop}>
        <Modals>{this.props.children}</Modals>
      </BlokModal>,
      modalRoot
    );
  }
}

export default Modal;
