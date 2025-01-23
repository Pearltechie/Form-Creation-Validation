// Function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
    const dataContainer = document.getElementById('api-data'); // Select the container for displaying data

    try {
        // Fetch data from API
        const response = await fetch(apiUrl);

        // Check if the response is okay
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse response as JSON
        const users = await response.json();

        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';

        // Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through the users and create a <li> for each
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set text to user's name
            userList.appendChild(listItem); // Append <li> to <ul>
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run the function after the DOM has loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
