import React, { useState, FormEvent } from "react";
import Link from "next/link";

interface GenericFormProps {
  handleSubmit: (email: string, password: string) => void;
  buttonText: string;
  linkText: string;
  linkHref: string;
}

const GenericForm: React.FC<GenericFormProps> = ({
  handleSubmit,
  buttonText,
  linkText,
  linkHref,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit(email, password); // Pass email and password values to handleSubmit function
  };

  return (
    <form
      className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
      onSubmit={handleSubmitForm}
    >
      <label className="font-semibold text-xs" htmlFor="usernameField">
        Email
      </label>
      <input
        className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label className="font-semibold text-xs mt-3" htmlFor="passwordField">
        Password
      </label>
      <input
        className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
        type="submit"
      >
        {buttonText}
      </button>
      <div className="flex mt-6 justify-center text-xs">
        <Link href="/" className="text-blue-400 hover:text-blue-500">
          Faqja Kryesore
        </Link>

        <span className="mx-2 text-gray-300">/</span>
        <Link href={linkHref} className="text-blue-400 hover:text-blue-500">
          {linkText}
        </Link>

        <span className="mx-2 text-gray-300">/</span>
        <Link href="/login" className="text-blue-400 hover:text-blue-500">
          Reset Password
        </Link>
      </div>
    </form>
  );
};

export default GenericForm;
