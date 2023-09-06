

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "42ab440621msh277fc6795fcabf8p1eb624jsn93125787b4dd",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
