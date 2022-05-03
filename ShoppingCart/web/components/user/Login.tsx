import React, { useState } from "react";
import Axios from "axios";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseApi from "../../callApi/UseApi";
const Login = () => {
  const { userLoginUrl } = UseApi();

  const [login, setLogin] = useState({ email: "", password: "" });

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const loginValue = event.target.value;
    setLogin({
      ...login,
      [event.target.name]: loginValue,
    });
  };
  // console.log(login);
  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (login.email.trim() === "") {
      toast("email is empty");
    } else if (login.password.trim() === "") {
      toast("password is empty");
    } else {
      const loginData: object = {
        email: login.email,
        password: login.password,
      };
      console.log(loginData);
      const res = await userLoginUrl(loginData);
      const token = res.data.token;
      console.log(res);

      if (token) {
        localStorage.setItem("userjwt", token);
        localStorage.setItem("userid", res.data.id);
        alert("login success");
        Router.push("/user/userdashboard");
      } else {
        alert("login failed");
      }
    }
  };
  return (
    <>
      <ToastContainer />

      <section
        className="bg-image "
        // style={{"background-image: 'url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')'"}}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6 p-4 login-box">
                <div className="card border border-dark">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      User Login
                    </h2>

                    <form method="post">
                      <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          name="email"
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          name="password"
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          type="submit"
                          className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                          onClick={loginHandler}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
