import React from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate(); // <-- hook for navigation

  const handleLogin = (e) => {
    e.preventDefault(); // prevent default form submission

    // TODO: add your login logic here (API call, validation, etc.)

    // Redirect to dashboard after login
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <span className="text-sky-600 text-2xl font-bold">FlowState</span>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold mb-1">Login</h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter your email below to login to your account.
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Email Address
            </label>
            <Input type="email" placeholder="username@domain.com" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input type="password" placeholder="Enter Password" required />
            <div className="text-right mt-1">
              <Link
                to="/forgot-password"
                className="text-sm text-sky-600 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-sky-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
