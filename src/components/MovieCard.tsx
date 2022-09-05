import * as React from "react";
import { Card, StyledBody } from "baseui/card";

export default function MovieCard() {
  return (
    <Card
      overrides={{ Root: { style: { width: "220px" } } }}
      headerImage={"https://source.unsplash.com/user/erondu/700x400"}
    >
      <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
        faucibus ex, non facilisis nisl.
      </StyledBody>
    </Card>
  );
}
