import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-lg mx-auto mb-16">
      <h2 className="text-4xl text-center font-bold my-8">Log In!</h2>
      <form className="space-y-6">
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
        <Link className="text-blue-700 font-semibold block underline">
          Forget Password?
        </Link>
        <input
          className="bg-violet-700 text-white font-medium py-3 w-full rounded"
          type="submit"
          value="Login"
        />
      </form>
      <div className="mt-4">
        Do not have an account?
        <Link
          to="/register"
          className="text-blue-700 font-semibold underline ml-2"
        >
          Please Register!
        </Link>
      </div>
    </div>
  );
};

export default Login;
