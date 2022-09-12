import { styled, useStyletron } from "baseui";
import { IMAGE_URL } from "../const";

export const BackGroundBlurImage = ({ image }: { image: string }) => {
  const [css] = useStyletron();

  const BlurBackgroundImage = styled("div", {
    position: "fixed",
    width: "100%",
    height: "500px",
    zIndex: "-100",
    top: 0,
    left: 0,
    backgroundImage: `url("${IMAGE_URL}/${image}")`,
    filter: "blur(25px)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  });

  return <BlurBackgroundImage />;
};
