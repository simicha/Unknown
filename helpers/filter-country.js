import { countryCode } from '../constants/country-code';

export const getFilteredCountries = (input) => {
  
  if(!input || input.trim() === ''){
    return [];
  }

  const rootFilter = countryCode.filter(country => country.root.root === `+${input[0]}`);
  if(input.length === 1) {
    return rootFilter.slice(0, 15);
  }
  const suffixFilter = rootFilter.filter(country => country.root.suffixes.includes(input.slice(1, input.length + 1)))
  return suffixFilter.slice(0, 15);
};
