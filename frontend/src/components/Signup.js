import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaPhone } from "react-icons/fa6";
const Signup = () => {
  return (
    <div>
      <div className="mx-auto my-20 w-[400px] text-center">
        <div className="mb-5">
          <span className="text-[1.6rem] font-bold">
            Welcome! Let's get you started
          </span>
          <br />
          <span className=" mt-2 text-[0.9rem] text-gray-600">
            Unlock exclusive benefits today.
          </span>
        </div>
        <form className="pt-5">
          {/* <div className="my-5">
            <span className="text-left font-bold text-[1.6rem]">
              Create an account
            </span>
          </div> */}
          <div className="flex justify-between gap-x-3 my-2">
            <div>
              <input
                className="w-full py-2 border-black duration:75 border-solid border-[1px] bg-gray-50 text-[1rem] rounded-lg pl-3 pr-3 focus:bg-white focus:border-black focus:outline-none focus:border-solid focus:border-[1.5px]"
                type="text"
                placeholder="First name"
                name="fname"
                id="fname"
              />
            </div>
            <div>
              <input
                className="w-full py-2 border-black duration:75 border-solid border-[1px] bg-gray-50 text-[1rem] rounded-lg pl-3 pr-3 focus:bg-white focus:border-black focus:outline-none focus:border-solid focus:border-[1.5px]"
                type="text"
                placeholder="Last name"
                name="lname"
                id="lname"
              />
            </div>
          </div>
          <div className="my-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-2 border-black duration:75 border-solid border-[1px] bg-gray-50 text-[1rem] rounded-lg pl-3 pr-3 focus:bg-white focus:border-black focus:outline-none focus:border-solid focus:border-[1.5px]"
            />
          </div>
          <div className="my-4">
            <div className="flex justify-between gap-x-2">
              <div className="w-full">
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  className="w-full py-2 border-black duration:75 border-solid border-[1px] bg-gray-50 text-[1rem] rounded-lg pl-3 pr-3 focus:bg-white focus:border-black focus:outline-none focus:border-solid focus:border-[1.5px]"
                />
              </div>
            </div>
          </div>
          <div className="my-4">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full py-2 border-black duration:75 border-solid border-[1px] bg-gray-50 text-[1rem] rounded-lg pl-3 pr-3 focus:bg-white focus:border-black focus:outline-none focus:border-solid focus:border-[1.5px]"
            />
            <span className="hidden flex justify-start mt-1 text-red-500 text-[0.9rem]">
              Password must be at least 8 characters long.
            </span>
          </div>
          <div className="my-4">
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full py-2 border-black duration:75 border-solid border-[1px] bg-gray-50 text-[1rem] rounded-lg pl-3 pr-3 focus:bg-white focus:border-black focus:outline-none focus:border-solid focus:border-[1.5px]"
            />
            <span className="hidden mt-1 flex justify-start text-red-500 text-[0.9rem]">
              Password did not match.
            </span>
          </div>
          <div>
            <button className="my-2 text-center w-full py-2 bg-blue-500 text-white font-bold text-[1.2rem] rounded-full mt-4 hover:bg-blue-600 duration-100">
              Register
            </button>
          </div>
        </form>
        <div>
          <span className="mt-5 text-[0.9rem] text-gray-600">
            Already have an account?{" "}
            <span className="text-blue-500 cursor-pointer hover:text-blue-600 duration-100">
              Sign in
            </span>
          </span>
        </div>
        <div>
          <div className="mt-4">
            <span className="text-center relative before:absolute before:w-[150px] before:h-[1px] before:top-1/2 before:-left-[100px] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-400 before:content-[''] after:absolute after:w-[150px] after:h-[1px] after:top-1/2 after:left-[110px] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-gray-400 after:content-['']">
              Or
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-x-2">
          <div className="w-full">
            <button className="text-center w-full py-2 border-gray-300 text-gray-700 border-solid border-[1px] rounded-full mt-4 hover:bg-gray-100 duration-75">
              <div className="px-4 flex justify-between items-center">
                <span className="mr-1">
                  <FcGoogle className="text-[1.7rem]" />
                </span>
                <div className="text-[1rem] font-bold">Google</div>
                <div></div>
              </div>
            </button>
          </div>
          <div className="w-full">
            <button className="text-center w-full py-2 border-gray-300 text-gray-700 border-solid border-[1px] rounded-full mt-4 hover:bg-gray-100 duration-75">
              <div className="px-4 flex justify-between items-center">
                <span className="mr-1">
                  <FaFacebook className="text-[1.7rem] text-blue-500" />
                </span>
                <div className="text-[1rem] font-bold">Facebook</div>
                <div></div>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-8">
          <span className="mt-4 text-[0.9rem] text-gray-600">
            By signing up, you agree to our Terms & Conditions and Privacy
            Policy.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Signup;
