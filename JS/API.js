export const getTEMP = async (lat, lon) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=c897d0ca07632c6d50bc8cba97b93b80`
  );
  return [
    data.main.temp,
    data.main.temp_min,
    data.main.temp_max,
    data.name,
    data.main.humidity,
    data.main.sea_level,
    data.main.pressure,
  ];
};
