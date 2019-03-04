import React from "react";

interface MessageFormProps {
  onSend: (message: string) => void;
}
interface MessageFormState {
  message: string;
}

export default class MessageForm extends React.Component<
  MessageFormProps,
  MessageFormState
> {
  constructor(props: MessageFormProps) {
    super(props);
    this.state = {
      message: ""
    };

    this.setMessage = this.setMessage.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  setMessage(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      message: event.target.value
    });
  }
  onSend() {
    if (this.state.message) this.props.onSend(this.state.message);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.message}
          onChange={this.setMessage}
        />
        <button onClick={this.onSend}>Send</button>
      </div>
    );
  }
}
