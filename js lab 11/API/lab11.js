async function fetchUserData() {
    try {
        const response = await fetch('https://dummyjson.com/users/1');
        const userData = await response.json();
        displayUserData(userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

function displayUserData(userData) {
    document.getElementById("user-image").src = userData.image;
    document.getElementById("user-email").textContent = userData.email;
}

// Call fetchUserData when the window loads
window.onload = fetchUserData;