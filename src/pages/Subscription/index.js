import React from "react";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";

function Subscription() {
  return (
    <Container>
      <PageHeader title="Subscription" />

      <div className="flex flex-col items-center gap-4 justify-center h-full mt-10">
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_xRmNN8.json"
          background="transparent"
          speed="1"
          style={{ width: 150, height: 150 }}
          loop
          autoplay
        ></lottie-player>
        <div>
          <h3>Feature available soon.</h3>
          <p className="text-xs text-center opacity-80">-System Admin</p>
        </div>
      </div>
    </Container>
  );
}

export default Subscription;
