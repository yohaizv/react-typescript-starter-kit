import React from "react";
import { connect } from "react-redux";
import MessageForm from "./components/MessageForm";
import { addMessage } from "../../actions";
interface MessagesBoardProps {
  messages: Array<{ id: number; title: string }>;
  addMessage: (message: string) => void;
}
const MessagesBoard = ({ messages, addMessage }: MessagesBoardProps) => (
  <div>
    <MessageForm onSend={addMessage} />
    <ul>
      {messages.map(m => (
        <li key={m.id}>
          <p>id: {m.id}</p>
          <p>title: {m.title}</p>
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state: any) => ({ messages: state.messages });
const mapDispatchToProps = (dispatch: any) => ({
  addMessage: (message: string) => dispatch(addMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesBoard);
