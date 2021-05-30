const generateStats = (c, r, option) => {
  const keys = [];
  const more = {};
  const less = {};

  Object.keys(r).forEach((reg) => {
    keys.push(reg);
    r[reg].forEach((i) => {
      keys.push(i);
    });
  });

  more.World = undefined;
  less.World = undefined;
  keys.forEach((i) => {
    more[i] = undefined;
    less[i] = undefined;
  });

  c.forEach((country) => {
    if (country[option]) {
      if (!more.World) {
        more.World = country;
      } else if (more.World[option] < country[option]) {
        more.World = country;
      }
      if (country.region) {
        if (!more[country.region]) {
          more[country.region] = country;
        } else if (more[country.region][option] < country[option]) {
          more[country.region] = country;
        }
      }
      if (country.subregion) {
        if (!more[country.subregion]) {
          more[country.subregion] = country;
        } else if (more[country.subregion][option] < country[option]) {
          more[country.subregion] = country;
        }
      }
      if (!less.World) {
        less.World = country;
      } else if (less.World[option] > country[option]) {
        less.World = country;
      }
      if (country.region) {
        if (!less[country.region]) {
          less[country.region] = country;
        } else if (less[country.region][option] > country[option]) {
          less[country.region] = country;
        }
      }
      if (country.subregion) {
        if (!less[country.subregion]) {
          less[country.subregion] = country;
        } else if (less[country.subregion][option] > country[option]) {
          less[country.subregion] = country;
        }
      }
    }
  });

  return {
    more,
    less,
  };
};

export default generateStats;
