import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { gql, useLazyQuery } from "@apollo/client";
import cup from "./../../../assets/images/cup.png";
import "./Login.css";
import { useCookies } from "react-cookie";
import Loader from "./../../UI/organisms/Loader";

const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      found
      authenticated
      token
      user {
        id
        image {
          path
        }
        role {
          rolType
        }
      }
    }
  }
`;

export default function Login(props) {
  const [cookies, setCookie] = useCookies([
    "user",
    "token",
    "license",
    "image",
  ]);
  const manageSession = props;
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [login, { loading }] = useLazyQuery(LOGIN, {
    onCompleted: (data) => {
      handleSession(data.login);
    },
    fetchPolicy: "network-only",
  });
  const [validation, setvalidation] = useState({
    email: false,
    psw: false,
  });
  const { addToast } = useToasts();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({
      variables: {
        email: formData.email,
        password: formData.password,
      },
    });
  };

  const handleSession = (login) => {
    if (!login.found) {
      addToast("Whoops! This user doesn't exits :C", {
        appearance: "warning",
        autoDismiss: true,
      });
      setTimeout(() => {
        addToast("Try clicking on register", {
          appearance: "info",
          autoDismiss: true,
        });
      }, 3000);
      return {
        error: true,
        message: "Error 404 User not found",
      };
    }

    if (!login.authenticated) {
      addToast("uhm.. Apparently your password is not correct :/", {
        appearance: "warning",
        autoDismiss: true,
      });
      return {
        error: true,
        message: "Error 401 User not Authorized",
      };
    }
    // ReactSession.set("token", login.token);
    // ReactSession.set("user", login.user.id);
    // ReactSession.set("license", login.user.role.rolType);
    // ReactSession.set("image", login.user.image.path);
    setCookie("token", login.token, { path: "/" });
    setCookie("user", login.user.id, { path: "/" });
    setCookie("license", login.user.role.rolType, { path: "/" });
    setCookie("image", login.user.image.path, { path: "/" });
    manageSession.initSesion(true);
  };

  if (loading) return <Loader />;

  return (
    <div className="fadeIn flex justify-center">
      <div className="bg-gradient-to-r from-fresh-god-50 to-fresh-god-cool-rose shadow-2xl rounded-tl-3xl rounded-br-3xl lg:px-12">
        <div className="flex flex-nowrap flex-col justify-center">
          <img className="mx-auto h-28 mt-0 md:mt-1" src={cup} alt="Workflow" />
          <h2 className="text-center sm:text-xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <form onSubmit={handleSubmit} class="mt-4 md:mt-6 w-full max-w-sm">
            <input
              class={`bg-gray-200 outline-none appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${
                validation.email ? "border-red-800" : "border-gray-200"
              }`}
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(event) => {
                setvalidation((validation) => ({
                  ...validation,
                  email: false,
                }));
                setformData((formData) => ({
                  ...formData,
                  email: event.target.value,
                }));
              }}
              required
              onInvalid={(event) => {
                event.preventDefault();
                setvalidation((validation) => ({
                  ...validation,
                  email: true,
                }));
                addToast("Please provide a email address", {
                  appearance: "warning",
                  autoDismiss: true,
                });
              }}
            />
            <input
              class={`outline-none appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${
                validation.psw ? "border-red-800" : "border-gray-200"
              }`}
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => {
                setvalidation((validation) => ({
                  ...validation,
                  psw: false,
                }));
                setformData((formData) => ({
                  ...formData,
                  password: event.target.value,
                }));
              }}
              required
              onInvalid={(event) => {
                event.preventDefault();
                setvalidation((validation) => ({
                  ...validation,
                  psw: true,
                }));
                addToast("Please provide a password", {
                  appearance: "warning",
                  autoDismiss: true,
                });
              }}
            />
            <button
              class="my-4 md:my-10 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
