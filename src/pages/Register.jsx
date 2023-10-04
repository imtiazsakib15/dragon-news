import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-lg mx-auto mb-16">
      <h2 className="text-4xl text-center font-bold my-8">Register Now!</h2>
      <form className="space-y-6">
        <input
          className="border w-full px-4 py-2"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="border w-full px-4 py-2"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className="border w-full px-4 py-2"
          type="password"
          name="password"
          placeholder="Your Password"
        />
        <div className="flex items-center gap-2">
          <input type="checkbox" name="tos" />
          <span>
            Accept{" "}
            <Link className="text-blue-700 font-semibold underline">
              Terms and Conditions
            </Link>
          </span>
        </div>
        <input
          className="bg-violet-700 text-white font-medium py-3 w-full rounded"
          type="submit"
          value="Register"
        />
      </form>
      <div className="mt-4">
        Already have an account?
        <Link
          to="/login"
          className="text-blue-700 font-semibold underline ml-2"
        >
          Login Now!
        </Link>
      </div>
    </div>
  );
};

export default Register;
