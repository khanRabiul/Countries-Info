import { useEffect, useState } from "react";
import Country from "./Country";
import Modal from "./Modal"; // Imported Modal from another file
import Button from "./Button";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  // for sorting
  const [filteredCountiries, setFiltertdCountries] = useState([]);
  // state to track selected country
  const [selectedCountry, setSelectedCountry] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const fetchDate = await fetch("https://restcountries.com/v3.1/all");
        const data = await fetchDate.json();

        // Filtered by Continents America and country name inda, Israel
        const filteredCountiries = data
          .filter((country) => {
            const name = country?.name?.common?.toLowerCase();
            const region = country?.region.toLowerCase();
            return (
              !["india", "israel"].includes(name) &&
              region !== "americas" &&
              region !== "europe"
            );
          })

          // Sorting countries A-Z alphabetically
          .sort((a, b) => {
            const countryA = a.name?.common?.toLowerCase();
            const countryB = b.name?.common?.toLowerCase();
            return countryA.localeCompare(countryB);
          });

        setCountries(filteredCountiries);
      } catch (error) {
        console.error("Fetch Data Error:", error);
      }
    };
    fetchCountries();
  }, []);

  // All Sorting Functions
  const sortByPopulationHighToLow = () => {
    const sorted = [...countries].sort((a, b) => b.population - a.population);
    setCountries(sorted);
  };

  const sortByPopulationLowToHigh = () => {
    const sorted = [...countries].sort((a, b) => a.population - b.population);
    setCountries(sorted);
  };
  // handle the button click
  const knowMore = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  };

  // function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCountry(null);
  };

  // mapping through countries array
  const allCountries = countries.map((country) => (
    <Country key={country.cca3} country={country} knowMore={knowMore} />
  ));

  return (
    <>
      {/* Pass onClose prop to Modal */}
  <div className="flex flex-col">
  <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        country={selectedCountry}
      />
      <div className="container mx-auto mb-24 mt-40  md:mt-32 flex flex-row gap-8">
        <Button
          onClick={sortByPopulationHighToLow}
          text="Population High-Low"
        />
        <Button
          onClick={sortByPopulationLowToHigh}
          text="Population Low-High"
        />
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
        {allCountries}
      </div>
  </div>
    </>
  );
};

export default Countries;
