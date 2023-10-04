import logo from "./../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <>
      <div className="text-center mt-12 mb-8">
        <img className="mx-auto" src={logo} alt="" />
        <p className="mt-5">Journalism Without Fear or Favour</p>
        <p className="text-lg mt-3">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
    </>
  );
};

export default Header;
