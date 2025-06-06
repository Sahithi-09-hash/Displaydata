const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

async function fetchUsers() {
  userContainer.innerHTML = 'Loading...';
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Network response was not ok');
    const users = await response.json();

    userContainer.innerHTML = '';
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('userCard');
      userCard.innerHTML = `
        <strong>${user.name}</strong><br>
        ${user.email}<br>
       ${user.address.street}, ${user.address.city}
      `;
      userContainer.appendChild(userCard);
    });
  } catch (error) {
    userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}

reloadBtn.addEventListener('click', fetchUsers);

fetchUsers();
