import Marquee from "react-fast-marquee";
import Button from "./Button";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex gap-5 p-4 bg-gray-200 font-medium">
      <Button text="Latest" primary={true} />
      <Marquee pauseOnHover={true} speed={50}>
        <Link className="mr-40">
          I can be a React component, multiple React components, or just some
          text....
        </Link>
        <Link className="mr-40">
          I can be a React component, multiple React components, or just some
          text....
        </Link>
        <Link className="mr-40">
          I can be a React component, multiple React components, or just some
          text....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
