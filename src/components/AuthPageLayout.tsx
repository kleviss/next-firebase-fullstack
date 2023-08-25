"use client";
import "../app/globals.css";

interface AuthPageLayoutProps {
  children: React.ReactNode;
}

const AuthPageLayout = ({ children }: AuthPageLayoutProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {children}
    </div>
  );
};

export default AuthPageLayout;
