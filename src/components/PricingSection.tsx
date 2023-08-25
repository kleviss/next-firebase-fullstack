import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Akses në grupin e Telegram",
  "Këshilla për trade",
  "Kurse me strategji të fitimprurëse",
  "Support 18/6",
];

export default function PricingSection() {
  return (
    <div className="bg-white py-24 mobile:py-32">
      <div className="mx-auto max-w-7xl px-6 laptop:px-8">
        <div className="mx-auto max-w-2xl mobile:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mobile:text-4xl">
            Çmime i thjeshtë pa hile
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Një cmim modest dhe fiks për të gjithë ata që duan të mësojnë dhe të
            bëhen pjesë e ketij komuniteti.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 mobile:mt-20 laptop:mx-0 laptop:flex laptop:max-w-none">
          <div className="p-8 mobile:p-10 laptop:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Akses i përjetshëm
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Gjatë kësaj periudhe, ju mund të përdorni të gjitha funksionet e
              platformës si dhe do të jeni pjestar i grupti ne Telegram ku do të
              merrni informacione të rëndësishme për tregun e kriptovalutave and
              keshilla për trade ne cifte te ndryshme.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                Çfarë përfshihet
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 mobile:grid-cols-2 mobile:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 laptop:mt-0 laptop:w-full laptop:max-w-md laptop:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 laptop:flex laptop:flex-col laptop:justify-center laptop:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Një pagesë, përgjithmonë akses
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $149
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Merr akses
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Faturat e pageses mund te ofrohen ne bazen e kerkeses se
                  klientit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
