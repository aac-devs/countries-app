const orderArray = (option, original) => {
  const originalData = [...original];
  const newData = originalData.sort((a, b) => {
    if (option === 'Name') {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    }
    if (option === 'Area') {
      if (a.area < b.area) {
        return 1;
      }
      if (a.area > b.area) {
        return -1;
      }
      return 0;
    }
    if (a.population < b.population) {
      return 1;
    }
    if (a.population > b.population) {
      return -1;
    }
    return 0;
  });
  return newData;
};

const languages = [
  { name: 'Arabic (ARA)', code: 'ar' },
  { name: 'Chinese (ZHO)', code: 'zh' },
  { name: 'Dutch (NLD)', code: 'nl' },
  { name: 'English (ENG)', code: 'en' },
  { name: 'French (FRA)', code: 'fr' },
  { name: 'German (DEU)', code: 'de' },
  { name: 'Italian (ITA)', code: 'it' },
  { name: 'Japanese (JPN)', code: 'ja' },
  { name: 'Persian (FAS)', code: 'fa' },
  { name: 'Portuguese (POR)', code: 'pt' },
  { name: 'Russian (RUS)', code: 'ru' },
  { name: 'Spanish (SPA)', code: 'es' },
  { name: 'Swedish (SWE)', code: 'sv' },
];

const searchCountryCapital = (c, word) => {
  const array = c.filter(
    (item) =>
      item.name.toLowerCase().startsWith(word) ||
      item.capital.toLowerCase().startsWith(word) ||
      item.name.toLowerCase().includes(` ${word}`) ||
      item.capital.toLowerCase().includes(` ${word}`),
  );
  return array;
};

const mutatingCountryList = (original, m) => {
  let regionList = [];
  let languageList = [];
  let orderList = [];
  let senseList = [];

  // Filtrar por region - subregion
  if (m.region === 'World') {
    regionList = [...original];
  } else if (m.subregion !== 'All') {
    regionList = original.filter((item) => item.subregion === m.subregion);
  } else {
    regionList = original.filter((item) => item.region === m.region);
  }

  // Filtrar por idioma
  if (m.language === 'None') {
    languageList = [...regionList];
  } else {
    languageList = regionList.filter((item) => {
      const langs = item.languages.map((i) => i.iso639_1);
      if (langs.includes(m.language)) {
        return item;
      }
      return null;
    });
  }

  // Ordenar
  if (m.orderBy === 'None') {
    orderList = [...languageList];
  } else {
    orderList = orderArray(m.orderBy, languageList);
  }

  // Cambiar Sentido
  if (m.orderSense === 'up-to-down') {
    senseList = [...orderList];
  } else {
    senseList = [...orderList.reverse()];
  }

  return senseList;
};

export { languages, searchCountryCapital };
export default mutatingCountryList;
