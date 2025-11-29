import React, { Component } from "react";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    showModal: false,
  };

  openModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  render() {
    return (
      <div style={{ padding: "30px" }}>
        <h1>Modal Example</h1>

        <button onClick={this.openModal}>Open modal</button>

        <Modal isOpen={this.state.showModal} onClose={this.closeModal}>
          <h2>Hello from Modal</h2>
          <p>You can close this modal by pressing Escape or clicking outside.</p>
        </Modal>
      </div>
    );
  }
}

export default App;
