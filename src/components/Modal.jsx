const Modal = ({ isOpen, onClose, country }) => {
    if (!isOpen) return null;
  
    const isIndependent = country?.independent ? (
      <span className="text-green-600">Yes</span>
    ) : (
      <span className="text-red-600">No</span>
    );
  
    const isUNMember = country?.unMember ? (
      <span className="text-green-500">Yes</span>
    ) : (
      <span className="text-red-500">No</span>
    );
  
    return (
      <div
        className="fixed bg-gray-700 bg-opacity-90 z-50 inset-0 h-screen flex justify-center items-center"
        onClick={onClose}
      >
        <div
          className="bg-gray-200 px-8 py-6 rounded-md shadow-md w-2/3 space-y-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl text-slate-800 font">
                <strong>Name:</strong> {country?.name?.common}
              </h2>
            </div>
            {/* Close button */}
            <div
              className="text-xl bg-pink-600 size-12 rounded-full text-white font-bold flex justify-center items-center cursor-pointer"
              onClick={onClose}
            >
              X
            </div>
          </div>
  
          {/* Image */}
          <div className="mx-auto">
            <img
              src={country?.flags?.svg}
              alt={country?.flags?.alt}
              className="h-48 w-ful mx-auto mb-12"
            />
          </div>
  
          {/* Country details */}
          <div>
            <h4>
              <span className="mr-4"><strong>Capital:</strong></span> {country?.capital?.[0]}
            </h4>
            <h4>
              <span className="mr-4"><strong>Area:</strong></span> {country?.area} square km
            </h4>
            <h4>
              <span className="mr-4"><strong>Population:</strong></span> {country?.population}
            </h4>
            <h4>
              <span className="mr-4"><strong>Language:</strong></span>{" "}
              {Object.values(country?.languages || {}).join(", ")}
            </h4>
            <h4>
              <span className="mr-4"><strong>Region:</strong></span> {country?.region}
            </h4>
            <h4>
              <span className="mr-4"><strong>Subregion:</strong></span> {country?.subregion}
            </h4>
            <h4>
              <span className="mr-4"><strong>Continents:</strong></span> {country?.continents?.[0]}
            </h4>
            <h4>
              <span className="mr-4"><strong>Currencies:</strong></span>{" "}
              {Object.values(country?.currencies || {})
                .map((currency) => currency.name)
                .join(", ")}
            </h4>
            <h4>
              <span className="mr-4"><strong>Independent:</strong></span> {isIndependent}
            </h4>
            <h4>
              <span className="mr-4"><strong>UNMember:</strong></span> {isUNMember}
            </h4>
            <h4>
              <span className="mr-4"><strong>Demonyms:</strong></span>{" "}
              {Object.values(country?.demonyms?.eng || {}).join(", ")}
            </h4>
            <h4>
              <span className="mr-4"><strong>IDD:</strong></span> {country?.idd?.root}
              {country?.idd?.suffixes?.[0]}
            </h4>
            <h4>
              <span className="mr-4"><strong>TLD:</strong></span> {country?.tld?.[0]}
            </h4>
            <h4>
              <span className="mr-4"><strong>TimeZone:</strong></span> {country?.timezones?.[0]}
            </h4>
            <h4>
              <span className="mr-4"><strong>View On Google Map:</strong></span>
              <a
                href={country?.maps?.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Click to View
              </a>
            </h4>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  