import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const loginUser = async (token) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { token });
        return response.data;
    } catch (error) {
        throw new Error('Login failed: ' + error.message);
    }
};

export const logoutUser = async () => {
    try {
        await axios.post(`${API_BASE_URL}/logout`);
    } catch (error) {
        throw new Error('Logout failed: ' + error.message);
    }
};

// Additional API functions can be added here as needed.