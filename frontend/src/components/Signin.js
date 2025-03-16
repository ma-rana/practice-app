// import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaPhone } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";

const Signin = () => {
  return (
    <div>
      <span className="absolute top-[20px] left-[40px] text-gray-500 font-bold cursor-pointer hover:text-gray-900">
        Cancel
      </span>
      <span className="absolute top-[20px] right-[40px] text-gray-500 hover:text-gray-900 font-bold cursor-pointer">
        Need Support{" "}
        <MdContactSupport className=" text-black inline text-[1.5rem]" />
      </span>
      <form>
        <div className="mx-auto my-20 w-[400px] text-center ">
          <span className="font-bold text-[1.6rem]">
            Signin in to your account
          </span>
          <p className="mt-1 text-[0.9rem] font-bold text-gray-600">
            New to website? <span className="underline">Create account</span>
          </p>
          <div className="mt-10 mb-2">
            <div className="mt-4 overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-2 border-black duration:75 border-solid border-[1px] bg-gray-50 text-[1rem] rounded-lg pl-3 pr-3 focus:bg-white focus:border-black focus:outline-none focus:border-solid focus:border-[1.5px]"
              />
            </div>
            <div className="mt-5 overflow-hidden">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full py-2 border-black duration:75 border-solid border-[1px] bg-gray-50 text-[1rem] rounded-lg pl-3 pr-3 focus:bg-white focus:border-black focus:outline-none focus:border-solid focus:border-[1.5px]"
              />
              <div className="flex justify-between mt-2">
                <div className="">
                  <span className="hidden text-red-500 text-[0.9rem]">
                    Password must be at least 8 characters long.
                  </span>
                </div>
                <div>
                  <span className="cursor-pointer hover:text-blue-600 duration:100 text-right text-blue-500 text-[0.9rem]">
                    Forgot password?
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="my-2 text-center w-full py-2 bg-blue-500 text-white font-bold text-[1.2rem] rounded-full mt-4 hover:bg-blue-600 duration-100">
              Continue
            </button>
            <div className="my-4">
              <span className="text-center relative before:absolute before:w-[150px] before:h-[1px] before:top-1/2 before:-left-[100px] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-400 before:content-[''] after:absolute after:w-[150px] after:h-[1px] after:top-1/2 after:left-[110px] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-gray-400 after:content-['']">
                Or
              </span>
            </div>
            <div>
              <button className="text-center w-full py-2 border-gray-300 text-gray-700 border-solid border-[1px] rounded-full mt-4 hover:bg-gray-100 duration-75">
                <div className="px-7 flex justify-between items-center">
                  <span className="mr-2">
                    <FcGoogle className="text-[1.8rem]" />
                  </span>
                  <div className="text-[1.1rem] font-bold">
                    Continue with Google
                  </div>
                  <div></div>
                </div>
              </button>
            </div>
            <div>
              <button className="text-center w-full py-2 border-gray-300 text-gray-700 border-solid border-[1px] rounded-full mt-4 hover:bg-gray-100 duration-75">
                <div className="px-7 flex justify-between items-center">
                  <span className="mr-2">
                    <FaFacebook className="text-[1.8rem] text-blue-500" />
                  </span>
                  <div className="text-[1.1rem] font-bold">
                    Continue with Facebook
                  </div>
                  <div></div>
                </div>
              </button>
            </div>
            <div>
              <button className="text-center w-full py-2 border-gray-300 text-gray-700 border-solid border-[1px] rounded-full mt-4 hover:bg-gray-100 duration-75">
                <div className="px-7 flex justify-between items-center">
                  <span className="mr-2">
                    <FaPhone className="text-[1.6rem] " />
                  </span>
                  <div className="text-[1.1rem] font-bold">
                    Continue with Number
                  </div>
                  <div></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Signin;
