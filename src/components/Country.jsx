/* eslint-disable react/prop-types */
import { useState } from "react";

const Country = ({ country, knowMore }) => {
  const [isButtonDisabled, setButtonDisabled] = useState(false); // State to disable button after click

  const {
    name,
    independent,
    unMember,
    capital,
    region,
    subregion,
    languages,
    demonyms,
    flags,
    maps,
    population,
    timezones,
    continents,
    area,
    idd,
    currencies,
    tld,
  } = country;

  const handelKnowMore = () => {
    knowMore(country);
    setButtonDisabled(true); // Disable button after it's clicked
  };

  return (
    <div className="w-full min-h-full flex items-stretch">
      <div className="w-full py-6 px-4 space-y-4 shadow-md bg-gray-200 rounded-md flex flex-col h-full hover:shadow-lg">
        {/* Title Section */}
        <div>
          <h2 className="text-2xl text-slate-800 font">
            <strong>{name?.common}</strong>
          </h2>
        </div>

        {/* Flag Section (clicking on the image will also trigger modal) */}
        <div className="flex-grow" onClick={() => knowMore(country)}>
          <img
            src={flags?.svg}
            alt={flags?.svg?.alt}
            className="object-cover mx-auto max-h-48 cursor-pointer"
          />
        </div>

        {/* Details Section (at the bottom) */}
        <div className="mt-auto">
          <h3 className="text-xl">
            <strong>Capital:</strong> {capital}
          </h3>
          <h3 className="text-xl">
            <strong>Population:</strong> {population}
          </h3>
          <h3 className="text-xl">
            <strong>Area:</strong> {area} square km
          </h3>
        </div>

        <div>
          <button
            className="bg-purple-600 text-white text-xl py-3 px-4 rounded-md hover:opacity-90 active:opacity-70 transition-all duration-300 w-full capitalize disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handelKnowMore}
            disabled={isButtonDisabled} // Button disabled after click
          >
            Know more &#128712;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Country;
