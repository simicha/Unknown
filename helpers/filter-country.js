import countryCode from '../constants/country-code';

const getFilteredCountries = (input) => {
  
  if(!input || input.trim() === ''){
    return [];
  }
  
  return countryCode.filter(country => country.name.includes(input));
};

export default getFilteredCountries;
