
import React from 'react';

interface BottomBlurBarProps {
  text: string;
  buttonText: string;
}

const BottomBlurBar = ({ text, buttonText }: BottomBlurBarProps) => {
  return (
    <div className="backdrop-filter backdrop-blur-sm">
      <div className="mx-auto max-w-7xl py-6 laptop:px-10 pt-0">
        <div className="bg-white shadow-2xl rounded-2xl shadow-zinc-500">
          <div className="mx-auto max-w-2xl px-4 mobile:px-6 mobile:py-6 laptop:max-w-7xl laptop:px-8">
            <div className="flex justify-between items-center laptop:p-2">
              <h2 className="text-black font-bold mobile:text-sm mobile:p-0 tablet:text-xl">
                {text}
              </h2>
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              >
                {buttonText} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBlurBar;