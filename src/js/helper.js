export const getJson = async function (data, page = 1) {
  const modul = await fetch(
    `https://omdbapi.com/?s=$${data}&page=${page}&apikey=fc1fef96`
  );
  return await modul.json();
};
