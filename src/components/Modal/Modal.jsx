import React, { Component } from "react";
import styled from "styled-components";
import "./Modal.css";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalBox = styled.div`
  background: white;
  padding: 24px;
  width: 380px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  animation: modalFadeIn 0.25s ease;
`;

const CloseBtn = styled.button`
  margin-top: 20px;
  padding: 10px 14px;
  background: #e53935;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: #c62828;
  }
`;

class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      console.log("Opened");
    }
    if (prevProps.isOpen && !this.props.isOpen) {
      console.log("Closed");
    }
  }

  handleKeyPress = (e) => {
    if (e.key === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, children } = this.props;

    if (!isOpen) return null;

    return (
      <Backdrop onClick={this.handleBackdrop}>
        <ModalBox>
          {children}
          <CloseBtn onClick={this.props.onClose}>Close</CloseBtn>
        </ModalBox>
      </Backdrop>
    );
  }
}

export default Modal;
