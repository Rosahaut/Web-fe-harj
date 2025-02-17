import { fetchData } from './fetch.js';
/* //oma rajapinnan kutsu
const getItems = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/items");
    console.log(response);
    // muunnetaan .json muotoon
    console.log("Haetaan omasta rajapinnasta");
    const data = await response.json();
    console.log(data);
    data.forEach((element) => {
      //jokainen rivi
      //console.log(element);
      //jokaisen rivin yksityiskohtainen nimi.
      console.log(element.name);
    });
  } catch (error) {
    console.error("Virhe:", error);
  }
}; */

const getItems = async () => {
  const url = 'http://localhost:3000/items';
  const items = await fetchData(url);

  if (items.error) {
    console.log('virhe tapahtui fetch haussa');
    return;
  }

  console.log(items);
};

export { getItems };
