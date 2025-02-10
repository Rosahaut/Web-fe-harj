import "../css/style.css";
import "../css/snackbar.css";
import { getItems } from "./items.js";
import { getUsers, addUser, getUsersById } from "./users.js";
import { getData } from "./test.js";


document.querySelector("#app").innerHTML = "Oman APIn harjoituksia";

console.log("moro maailma scriptit alkaa");

getData();

//haetaan GET all items nappi ja tehrään rajapinta haku.
const getItemsBtn = document.querySelector('.get_items');
getItemsBtn.addEventListener('click', getItems);
//getItems();

const getUserBtn = document.querySelector('.get_users');
getUserBtn.addEventListener('click', getUsers);

const addUserForm = document.querySelector('.formpost');
addUserForm.addEventListener('click', addUser);

const getUserByIdBtn = document.querySelector('.get_user_by_id');
getUserByIdBtn.addEventListener('click', async () => {
  const userId = document.querySelector('#user_id').value.trim();
  if (userId) {
    await getUsersById(userId);
  } else {
    console.log("Anna käyttäjän ID");
  }
});
