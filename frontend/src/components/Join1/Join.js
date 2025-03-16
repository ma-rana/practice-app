import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const Join = () => {
  return (
    <div>
      <div className="border-solid border-[0.5px] border-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] bg-white shadow-lg rounded-lg p-10">
        <div>
          <IoIosCloseCircle className="text-[1.8rem] text-gray-500 absolute top-3 right-3 cursor-pointer hover:text-gray-700 duration-100" />
        </div>
        <div>
          <div className="h-[60px] w-[60px] bg-gray-400 rounded-full mx-auto my-0"></div>
          <div className="mt-4 mb-1 w-9/12 mx-auto">
            <span className="text-center text-[1.6rem]">
              Unlimited free access to our resources
            </span>
          </div>
          <span className="text-center text-[0.9rem] text-gray-600">
            Signup to see more
          </span>
          <div>
            <div>
              <button className="bg-gray-900 text-center w-full py-2 border-gray-300 text-gray-700 border-solid border-[1px] rounded-full mt-4 hover:bg-gray-800 duration-75">
                <div className="flex justify-center items-center">
                  <div className="text-[1.1rem] text-white">
                    Continue with email
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button className="text-center w-full py-2 border-gray-300 text-gray-700 border-solid border-[1px] rounded-full mt-4 hover:bg-gray-100 duration-75">
                <div className="flex justify-center items-center">
                  <span className="mr-6">
                    <FaFacebook className="text-[1.8rem] text-blue-500" />
                  </span>
                  <div className="text-[1.1rem]">Continue with Facebook</div>
                </div>
              </button>
            </div>
            <div>
              <button className="text-center w-full py-2 border-gray-300 text-gray-700 border-solid border-[1px] rounded-full mt-4 hover:bg-gray-100 duration-75">
                <div className="flex justify-center items-center">
                  <span className="mr-6">
                    <FcGoogle className="text-[1.8rem]" />
                  </span>
                  <div className="text-[1.1rem]">Continue with Google</div>
                </div>
              </button>
            </div>
          </div>
          <div className="mt-5 max-w-1/3 mx-auto">
            <div className="text-center">
              <p className="text-[0.7rem] leading-4 text-gray-600">
                By signing up, you agree to our Terms or Service and acknowledge
                you've read our Privacy Policy.
              </p>
            </div>
            <div className="text-center mt-3">
              <span className="text-[0.9rem] text-gray-600">
                Already have an account?{" "}
                <span className="text-blue-500 cursor-pointer hover:text-blue-600 duration-100">
                  Sign in
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Join;
