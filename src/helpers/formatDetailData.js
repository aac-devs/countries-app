const formatDetailData = (o) => {
  const newData = [
    { title: 'Native name', value: o.nativeName },
    {
      title: 'Alternative spelling',
      value: `${o.altSpellings.map(
        (spe, i) => `${i === 0 ? spe : ` ${spe}`}`,
      )}`,
    },
    {
      title: 'Translations',
      value: `French: "${o.translations.fr}" - Spanish: "${o.translations.es}" - German: "${o.translations.de}" - Japanesse: "${o.translations.ja}" - Portuguese: "${o.translations.pt}" - Italian: "${o.translations.it}" - Breton: "${o.translations.br}"`,
    },
    { title: 'Demonym', value: o.demonym },
    { title: 'Region', value: o.region },
    { title: 'Subregion', value: o.subregion },
    {
      title: 'Languages',
      value: `${o.languages.map(
        (lng, i) => `${i === 0 ? lng.name : ` ${lng.name}`}`,
      )}`,
    },
    { title: 'Capital', value: o.capital },
    { title: 'Numeric Code', value: o.numericCode },
    { title: 'Alpha codes', value: `${o.alpha2Code} - ${o.alpha3Code}` },
    {
      title: 'Top level domains',
      value: `${o.topLevelDomain.map(
        (tld, i) => `${i === 0 ? tld : ` ${tld}`}`,
      )}`,
    },
    {
      title: 'Calling codes',
      value: `${o.callingCodes.map(
        (clc, i) => `${i === 0 ? clc : ` ${clc}`}`,
      )}`,
    },
    {
      title: 'Area',
      value: `${o.area ? `${o.area.toLocaleString()} km\u00B2` : '???'}`,
    },
    {
      title: 'Location',
      value: `Lat: ${o.latlng[1]}\u00B0, Long: ${o.latlng[0]}\u00B0`,
    },
    {
      title: 'Time zones',
      value: `${o.timezones.map((tmz, i) => `${i === 0 ? tmz : ` ${tmz}`}`)}`,
    },
    { title: 'Population', value: o.population?.toLocaleString() },
    {
      title: 'Currencies',
      value: `${o.currencies.map(
        (cur, i) =>
          `${
            i === 0
              ? `${cur.symbol} - ${cur.code} - ${cur.name}`
              : ` ${cur.symbol} - ${cur.code} - ${cur.name}`
          }`,
      )}`,
    },
  ];
  return newData;
};

export default formatDetailData;
