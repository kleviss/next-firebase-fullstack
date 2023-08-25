import React from "react";
import Link from "next/link";

interface GenericInfoTextProps {
  children: React.ReactNode;
  textSize: string;
  textAlignment: string;
  textColor: string;
  customStyles: string;
}

const GenericInfoText: React.FC<GenericInfoTextProps> = ({
  children,
  textSize,
  textAlignment,
  textColor,
  customStyles,
}) => {
  return (
    <div
      className={`${textSize} ${textColor} ${textAlignment} ${customStyles}`}
    >
      {children}
    </div>
    // Desired outcome:
    // "text-4xl text-center font-medium text-gray-500 hover:text-gray-900"
  );
};

export default GenericInfoText;
