import React from "react";
import Container from "../../components/Container";
import MessageItem from "../../components/messages/MessageItem";
import PageHeader from "../../components/PageHeader";

function Messages() {
  return (
    <Container>
      <PageHeader title="Messages" />

      <div>
        <MessageItem
          date="03-14-2022"
          name="System Admin"
          message="Lorem ipsum dolor sit amet."
        />
        <MessageItem
          date="03-08-2022"
          name="System Admin"
          message="Dolor sit amet, consectetur elit."
        />
      </div>
    </Container>
  );
}

export default Messages;
