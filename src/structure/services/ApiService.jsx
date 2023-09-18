import axios from "axios";

const ApiService = {
  fetchData: async () => {
    const apiUrl = "https://api.example.com/data";
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ApiService;
