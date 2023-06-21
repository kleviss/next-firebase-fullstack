"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import AuthPageLayout from "@/components/AuthPageLayout";
import GenericForm from "@/components/GenericForm";

const LoginPage = () => {
  const router = useRouter();
  const { user } = useAuthContext();

  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [router, user]);

  const handleSignIn = async (email, password) => {
    const { error } = await signIn(email, password);
    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <AuthPageLayout>
      {/* Page header */}
      <h1 className="text-3xl font-semibold">VisionFX Academy</h1>
      <div className="h-8"></div>
      <h3 className="text-xl font-semibold mt-2">Login</h3>

      {/* Form */}
      <GenericForm
        handleSubmit={handleSignIn}
        buttonText="Login"
        linkText="Sign up"
        linkHref="/register"
      />

      <div className="h-4"></div>
      {error && <p className="text-red-500">{error}</p>}
    </AuthPageLayout>
  );
};

export default LoginPage;
