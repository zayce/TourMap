import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Registr.scss";

export const AuthForm = () => {
  const [activeForm, setActiveForm] = useState("login");
  const [notification, setNotification] = useState({ message: "", type: "" });

  return (
    <div className="AuthForm">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeForm === "login" ? "active" : ""}`}
          onClick={() => setActiveForm("login")}
        >
          Login
        </button>
        <button
          className={`tab-button ${activeForm === "register" ? "active" : ""}`}
          onClick={() => setActiveForm("register")}
        >
          Register
        </button>
      </div>

      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      {activeForm === "login" ? (
        <LoginForm setNotification={setNotification} />
      ) : (
        <RegisterForm setNotification={setNotification} />
      )}
    </div>
  );
};

const RegisterForm = ({ setNotification }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    setNotification({ message: "Successfully registered!", type: "success" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-group">
        <input
          type="text"
          placeholder="First name"
          {...register("firstName", {
            required: "First name is required",
            maxLength: { value: 80, message: "Max length is 80" },
          })}
        />
        {errors.firstName && (
          <p className="error-message">{errors.firstName.message}</p>
        )}
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Surname"
          {...register("surname", {
            required: "Surname is required",
            maxLength: { value: 100, message: "Max length is 100" },
          })}
        />
        {errors.surname && (
          <p className="error-message">{errors.surname.message}</p>
        )}
      </div>

      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>

      <div className="form-group">
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("mobileNumber", {
            required: "Mobile number is required",
            minLength: { value: 6, message: "Minimum length is 6" },
            maxLength: { value: 12, message: "Maximum length is 12" },
          })}
        />
        {errors.mobileNumber && (
          <p className="error-message">{errors.mobileNumber.message}</p>
        )}
      </div>

      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum length is 6" },
            maxLength: { value: 12, message: "Maximum length is 12" },
          })}
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}
      </div>

      <button type="submit" className="submit-button">
        Register
      </button>
    </form>
  );
};
const LoginForm = ({ setNotification }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    setNotification({ message: "Successfully logged in!", type: "success" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <p className="error-message">{errors.username.message}</p>
        )}
      </div>

      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}
      </div>

      <button type="submit" className="submit-button">
        Login
      </button>
    </form>
  );
};
