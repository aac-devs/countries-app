const formatDetailData = (o) => {
  const languages = [];
  let languagesStr = ' -- ';

  if (o.languages) {
    Object.entries(o.languages).forEach((entry) => {
      languages.push([entry[0], entry[1]]);
    });

    languagesStr = '';
    languages.forEach((lang) => {
      languagesStr += `${lang[1]} - `;
    });
  }

  let currencieList = ' -- ';

  if (o.currencies) {
    currencieList = '';
    Object.entries(o.currencies).forEach((entry) => {
      currencieList += `${entry[1].name}: ${entry[0]}, ${entry[1].symbol} / `;
    });
  }

  const newData = [
    {
      title: 'Native name',
      value: o.name.common
        ? o.name.common
        : o.name?.nativeName[languages[0][0]].official,
    },
    {
      title: 'Alternative spelling',
      value: `${o.altSpellings.map(
        (spe, i) => `${i === 0 ? spe : ` ${spe}`}`,
      )}`,
    },
    {
      title: 'Translations',
      value: `French: "${o.translations.fra.common}" - Spanish: "${o.translations.spa.common}" - German: "${o.translations.deu.common}" - Japanesse: "${o.translations.jpn.common}" - Portuguese: "${o.translations.por.common}" - Italian: "${o.translations.ita.common}" - Breton: "${o.translations.bre.common}"`,
    },
    {
      title: 'Demonym',
      value: o.demonyms.eng.m,
    },
    {
      title: 'Region',
      value: o.region,
    },
    {
      title: 'Subregion',
      value: o.subregion ? o.subregion : ' -- ',
    },
    {
      title: 'Languages',
      value: languagesStr.replace(/ - $/, ''),
    },
    {
      title: 'Capital',
      value: o.capital ? o.capital[0] : ' -- ',
    },
    {
      title: 'Numeric Code',
      value: o.ccn3,
    },
    {
      title: 'Alpha codes',
      value: `${o.cca2} - ${o.cca3}`,
    },
    {
      title: 'Top level domains',
      value: `${o.tld.map((tld, i) => `${i === 0 ? tld : ` ${tld}`}`)}`,
    },
    {
      title: 'Area',
      value: `${o.area ? `${o.area.toLocaleString()} km\u00B2` : '???'}`,
    },
    {
      title: 'Location',
      value: `Lat: ${o.latlng[0]}\u00B0, Long: ${o.latlng[1]}\u00B0`,
    },
    {
      title: 'Time zones',
      value: `${o.timezones.map((tmz, i) => `${i === 0 ? tmz : ` ${tmz}`}`)}`,
    },
    {
      title: 'Population',
      value: o.population?.toLocaleString(),
    },
    {
      title: 'Currencies',
      value: currencieList.replace(/ \/ $/, ''),
    },
  ];
  return newData;
};

export default formatDetailData;
