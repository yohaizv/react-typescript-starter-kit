import React from "react";
import { connect } from "react-redux";
import { getData } from "../../../../actions";

interface ClientMessagesProps {
  messages: Array<{ id: number; title: string }>;
  getData: Function;
}

class ClientMessages extends React.Component<ClientMessagesProps> {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div>
        <h3>Client Messages</h3>
        <ul>
          {this.props.messages.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state: any) {
  return {
    messages: state.remoteMessages.slice(0, 10)
  };
}
export default connect(
  mapStateToProps,
  { getData }
)(ClientMessages);
