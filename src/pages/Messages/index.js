import React from "react";
import Container from "../../components/Container";
import MessageItem from "../../components/messages/MessageItem";
import PageHeader from "../../components/PageHeader";
import { useMessageContext } from "../../contexts/MessageContext";
import moment from "moment";

function Messages() {
  const { messages } = useMessageContext();
  return (
    <Container>
      <PageHeader title="Messages" />

      <div>
        {messages.map((message) => (
          <MessageItem
            key={message.id}
            date={moment(new Date(message.latest_message.created_at))
              .add(0, "days")
              .calendar()}
            name={`${message.chat_users[0].user.profile.first_name} ${message.chat_users[0].user.profile.last_name}`}
            message={message.latest_message.message}
          />
        ))}
      </div>
    </Container>
  );
}

export default Messages;
