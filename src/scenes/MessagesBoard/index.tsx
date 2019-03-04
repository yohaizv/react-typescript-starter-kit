import React from "react";
import { connect } from "react-redux";
import MessageForm from "./components/MessageForm";
import { addMessage } from "../../actions";
interface MessagesBoardProps {
  messages: Array<{ id: number; title: string }>;
  addMessage: (message: string) => void;
  forbiddenWordFound: boolean;
}
const MessagesBoard = ({
  messages,
  addMessage,
  forbiddenWordFound
}: MessagesBoardProps) => (
  <div>
    <MessageForm onSend={addMessage} />
    {forbiddenWordFound && (
      <h3 style={{ color: "red" }}>Forbidden Word Found</h3>
    )}
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

const mapStateToProps = (state: any) => ({
  messages: state.messages,
  forbiddenWordFound: state.forbiddenWordFound
});
const mapDispatchToProps = (dispatch: any) => ({
  addMessage: (message: string) => dispatch(addMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesBoard);
