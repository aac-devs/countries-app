const orderArray = (option, original) => {
  const originalData = [...original];
  const newData = originalData.sort((a, b) => {
    if (option === 'Name') {
      if (a.name.common.toLowerCase() < b.name.common.toLowerCase()) {
        return -1;
      }
      if (a.name.common.toLowerCase() > b.name.common.toLowerCase()) {
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
  { name: 'Arabic (ARA)', code: 'ara' },
  { name: 'Chinese (ZHO)', code: 'zho' },
  { name: 'Dutch (NLD)', code: 'nld' },
  { name: 'English (ENG)', code: 'eng' },
  { name: 'French (FRA)', code: 'fra' },
  { name: 'German (DEU)', code: 'deu' },
  { name: 'Italian (ITA)', code: 'ita' },
  { name: 'Japanese (JPN)', code: 'jpn' },
  { name: 'Persian (FAS)', code: 'per' },
  { name: 'Portuguese (POR)', code: 'por' },
  { name: 'Russian (RUS)', code: 'rus' },
  { name: 'Spanish (SPA)', code: 'spa' },
  { name: 'Swedish (SWE)', code: 'swe' },
];

const searchCountryCapital = (c, word) => {
  const array = c.filter((item) => {
    if (item.capital !== undefined) {
      if (
        item.capital[0].toLowerCase().startsWith(word) ||
        item.capital[0].toLowerCase().includes(` ${word}`)
      )
        return item;
    }
    if (
      item.name.common.toLowerCase().startsWith(word) ||
      item.name.common.toLowerCase().includes(` ${word}`)
    )
      return item;

    return null;
  });
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
      if (item.languages) {
        const langs = [];
        Object.keys(item.languages).forEach((key) => {
          langs.push(key);
        });
        if (langs.includes(m.language)) {
          return item;
        }
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
