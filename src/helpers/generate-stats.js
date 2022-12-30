const generateStatistics = (c, r, option) => {
  const keys = [];
  const stats = {};

  Object.keys(r).forEach((reg) => {
    keys.push(reg);
    r[reg].forEach((i) => {
      if (i) {
        keys.push(i);
      }
    });
  });

  stats.World = {
    more: undefined,
    less: undefined,
  };
  keys.forEach((i) => {
    stats[i] = {
      more: undefined,
      less: undefined,
    };
  });

  c.forEach((country) => {
    if (country[option]) {
      if (!stats.World.more) {
        stats.World.more = country;
      } else if (stats.World.more[option] < country[option]) {
        stats.World.more = country;
      }
      if (country.region) {
        if (!stats[country.region].more) {
          stats[country.region].more = country;
        } else if (stats[country.region].more[option] < country[option]) {
          stats[country.region].more = country;
        }
      }
      if (country.subregion) {
        if (!stats[country.subregion].more) {
          stats[country.subregion].more = country;
        } else if (stats[country.subregion].more[option] < country[option]) {
          stats[country.subregion].more = country;
        }
      }
      if (!stats.World.less) {
        stats.World.less = country;
      } else if (stats.World.less[option] > country[option]) {
        stats.World.less = country;
      }
      if (country.region) {
        if (!stats[country.region].less) {
          stats[country.region].less = country;
        } else if (stats[country.region].less[option] > country[option]) {
          stats[country.region].less = country;
        }
      }
      if (country.subregion) {
        if (!stats[country.subregion].less) {
          stats[country.subregion].less = country;
        } else if (stats[country.subregion].less[option] > country[option]) {
          stats[country.subregion].less = country;
        }
      }
    }
  });

  return stats;
};

export default generateStatistics;
