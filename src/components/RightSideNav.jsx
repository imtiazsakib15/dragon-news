import {
  AiOutlineGithub,
  AiOutlineGoogle,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import qZone1 from "./../assets/qZone1.png";
import qZone2 from "./../assets/qZone2.png";
import qZone3 from "./../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <>
      <div>
        <h3 className="text-3xl font-semibold">Login With</h3>
        <div className="mt-6 space-y-2">
          <button className="flex items-center justify-center gap-1 font-medium hover:text-blue-700 border border-black hover:border-blue-700 p-2 w-full rounded">
            <AiOutlineGoogle />
            Login With Google
          </button>
          <button className="flex items-center justify-center gap-1 font-medium hover:text-blue-700 border border-black hover:border-blue-700 p-2 w-full rounded">
            <AiOutlineGithub />
            Login With Github
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-3xl font-semibold">Find Us On</h3>
        <div className="mt-6 divide-y border font-medium rounded-md">
          <Link className="flex items-center gap-2 p-4">
            <FaFacebookF className="text-blue-700 bg-gray-300 w-8 h-8 p-2 rounded-full" />
            Facebook
          </Link>
          <Link className="flex items-center gap-2 p-4">
            <FaTwitter className="text-blue-500 bg-gray-300 w-8 h-8 p-2 rounded-full" />
            Twitter
          </Link>
          <Link className="flex items-center gap-2 p-4">
            <AiOutlineInstagram className="bg-gray-300 w-8 h-8 p-2 rounded-full" />
            Instagram
          </Link>
        </div>
      </div>
      <div className="mt-10 p-4 bg-gray-200">
        <h3 className="text-3xl font-semibold">Q-ZONE</h3>
        <div className="mt-6 space-y-5">
          <img className="mx-auto" src={qZone1} alt="" />
          <img className="mx-auto" src={qZone2} alt="" />
          <img className="mx-auto" src={qZone3} alt="" />
        </div>
      </div>
    </>
  );
};

export default RightSideNav;
