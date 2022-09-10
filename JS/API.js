export const getTEMP = async (lat, lon) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c897d0ca07632c6d50bc8cba97b93b80`
  );
  return [
    data.main.temp - 273.15,
    data.main.temp_min - 273.15,
    data.main.temp_max - 273.15,
    data.name,
  ];
};
