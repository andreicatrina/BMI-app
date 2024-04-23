import React from "react";
import { Container, Content } from "./components";

export const PageLayout = (props) => {
  return (
    <Container>
      <Content>{props.children}</Content>
    </Container>
  );
};
