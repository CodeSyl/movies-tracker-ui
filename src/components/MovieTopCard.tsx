import * as React from "react";
import {
  MessageCard,
  IMAGE_LAYOUT,
  BACKGROUND_COLOR_TYPE,
} from "baseui/message-card";
import { IMAGE_URL } from "../const";

export default function MovieTopCard({ poster }: { poster: string }) {
  console.log(
    "🚀 ~ file: MovieTopCard.tsx ~ line 10 ~ MovieTopCard ~ poster",
    poster
  );
  return (
    <MessageCard
      heading="Your favorites, fast"
      paragraph="Quisque sodales tempor metus."
      buttonLabel="Order"
      onClick={() => console.log("Clicked 🙂")}
      image={{
        src: `/t/p/original/${poster}`,
        backgroundPosition: "50% 65%",
        ariaLabel: "A deconstructed hamburger being literally thrown together",
      }}
      backgroundColor="#101010"
      // backgroundColorType={BACKGROUND_COLOR_TYPE.dark}
      overrides={{
        ContentContainer: {
          style: {
            height: "60px",
          },
        },
        Root: {
          style: { width: "95%", margin: "auto" },
        },
      }}
    />
  );
}
