import Image from "next/image";

const LandingPageFooter = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 tablet:py-8">
        <div className="mobile:flex mobile:items-center mobile:justify-between gap-12">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 mobile:mb-0"
          >
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
              width={28}
              height={28}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              VisionFX
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 mobile:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline tablet:mr-6 ">
                Rreth nesh
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline tablet:mr-6">
                Kontakt
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline tablet:mr-6">
                Politika e privatësisë
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline tablet:mr-6">
                Telegram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Licensa
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 mobile:mx-auto dark:border-gray-700 laptop:my-8" />
        <span className="block text-sm text-gray-500 mobile:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            VISIONFX™
          </a>
          . Të gjitha të drejtat e rezervuara.
        </span>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
