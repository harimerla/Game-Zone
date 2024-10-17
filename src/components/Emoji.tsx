import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../asserts/bulls-eye.webp";
import meh from "../asserts/meh.webp";
import thumbsUp from "../asserts/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const attr: { [key: string]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...attr[rating]} marginTop={1} />;
};

export default Emoji;
