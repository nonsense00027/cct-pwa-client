import React from "react";
import Container from "../../components/Container";
import NotificationItem from "../../components/notifications/NotificationItem";
import PageHeader from "../../components/PageHeader";

function Notifications() {
  return (
    <Container>
      <PageHeader title="Notifications" />

      <div>
        <NotificationItem
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis dolore nesciunt aliquam fugiat exercitationem!"
          date="03-10-2022"
          seen={false}
        />
        <NotificationItem
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis dolore nesciunt."
          date="02-17-2022"
          seen={true}
        />
        <NotificationItem
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis dolore nesciunt."
          date="02-13-2022"
          seen={true}
        />
        <NotificationItem
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis dolore nesciunt."
          date="02-13-2022"
          seen={false}
        />
      </div>
    </Container>
  );
}

export default Notifications;
