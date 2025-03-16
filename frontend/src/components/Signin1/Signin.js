import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { BiSolidHide } from "react-icons/bi";

const Signin = () => {
  return (
    <div>
      {/* Whole container */}
      <div className=" mx-auto mt-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-center mb-[50px]">
          <div className="text-center mx-auto my-2 h-[70px] w-[70px] rounded-full bg-gray-500"></div>
          <div>
            <span className="text-[1.6rem] font-bold">
              Glad to see you back!
            </span>
          </div>
          <div>
            <span className="mt-2 text-[0.9rem] text-gray-600">
              Your personalized experience awaits.
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-x-3 items-center">
          <div>
            <div className="my-7">
              <span className="text-center font-bold text-[1.2rem]">Login</span>
            </div>
            <div className="my-3">
              <label for="email" className="text-gray-500">
                Email address
              </label>
              <input
                type="email"
                className="w-full mt-2 border-solid border-[1px] border-black rounded-lg text-[1.1rem] px-3 py-1 outline-none focus:border-black focus:border-solid focus:border-[1.5px]"
                id="email"
                name="email"
              />
            </div>
            <div className="my-4">
              <div className="flex justify-between text-gray-500">
                <div>
                  <label for="password">Password</label>
                </div>
                <div className="flex items-center">
                  <BiSolidHide className="text-[1.4rem] cursor-pointer mr-2 hover:text-black duration-100" />
                  <span>Hide</span>
                </div>
              </div>
              <input
                type="password"
                className="w-full mt-2 border-solid border-[1px] border-black rounded-lg text-[1.1rem] px-3 py-1 outline-none focus:border-black focus:border-solid focus:border-[1.5px]"
                id="password"
                name="password"
              />
            </div>
            <div className="my-5">
              <button className="w-full text-center font-bold text-[1.1rem] bg-gray-300 text-white rounded-full py-2 hover:bg-blue-400 duration-100">
                Sign in
              </button>
            </div>
          </div>
          <div className="px-10">
            <span className="text-center relative before:absolute before:w-[1px] before:h-[150px] before:-top-[90px] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-400 before:content-[''] after:absolute after:w-[1px] after:h-[150px] after:top-[110px] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-gray-400 after:content-['']">
              Or
            </span>
          </div>
          <div className="w-[350px]">
            <div>
              <button className="text-center w-full py-2 border-gray-300 text-gray-700 border-solid border-[1px] rounded-full mt-4 hover:bg-gray-100 duration-75">
                <div className="px-5 flex justify-between items-center">
                  <span className="mr-2">
                    <FcGoogle className="text-[1.4rem]" />
                  </span>
                  <div className="text-[1rem]">Continue with Google</div>
                  <div></div>
                </div>
              </button>
            </div>
            <div>
              <button className="text-center w-full py-2 border-gray-300 text-gray-700 border-solid border-[1px] rounded-full mt-4 hover:bg-gray-100 duration-75">
                <div className="px-5 flex justify-between items-center">
                  <span className="mr-2">
                    <FaFacebook className="text-[1.4rem] text-blue-500" />
                  </span>
                  <div className="text-[1rem]">Continue with Facebook</div>
                  <div></div>
                </div>
              </button>
            </div>
            <div>
              <button className="text-center w-full py-2 border-gray-300 text-gray-700 border-solid border-[1px] rounded-full mt-4 hover:bg-gray-100 duration-75">
                <div className="px-5 flex justify-between items-center">
                  <span className="mr-2">
                    <FaPhone className="text-[1.2rem] " />
                  </span>
                  <div className="text-[1rem]">Continue with Number</div>
                  <div></div>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Can't login section start from here */}
        <div className="text-center mt-10">
          <span className="mt-4 text-[0.9rem] text-gray-600">
            Can't login?{" "}
            <span className="text-blue-500 cursor-pointer hover:text-blue-600 duration-100">
              Forgot password?
            </span>
          </span>
          <div className="mt-3">
            <span className="text-[0.9rem] text-gray-600">
              By signing up, you agree to our Terms & Conditions and Privacy
              Policy.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
