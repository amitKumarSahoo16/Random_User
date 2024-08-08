const generateButton = document.getElementById('generate');
const avatar = document.getElementById('avatar');
const name = document.getElementById('name');
const email = document.getElementById('email');   

const phone = document.getElementById('phone');
const city = document.getElementById('city');   


generateButton.addEventListener('click', () => {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      avatar.src = user.picture.medium;
      name.textContent = `${user.name.first} ${user.name.last}`;
      email.textContent = user.email;
      phone.textContent = user.phone;
      city.textContent = user.location.city;
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
});