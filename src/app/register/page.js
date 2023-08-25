"use client";
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import AuthPageLayout from "@/components/AuthPageLayout";
import GenericForm from "@/components/GenericForm";

const RegisterPage = () => {
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  const handleSignUp = async (email, password) => {
    const { result, error } = await signUp(email, password);
    if (error) {
      setError(error.message);
    } else {
      setSuccess("User registered successfully! You can now log in.");
    }
  };

  return (
    <AuthPageLayout>
      {/* Page header */}
      <h1 className="text-3xl font-semibold">VisionFX Academy</h1>
      <div className="h-8"></div>
      <h3 className="text-xl font-semibold mt-2">Register</h3>

      {/* Form */}
      <GenericForm
        handleSubmit={handleSignUp}
        buttonText="Register"
        linkText="Log in"
        linkHref="/login"
      />

      <div className="h-4"></div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </AuthPageLayout>
  );
};

export default RegisterPage;
