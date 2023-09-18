// ViewModel.js
import React, { useState, useEffect } from "react";
import ApiService from "../services/ApiService";

const ApiViewModel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    ApiService.fetchData()
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return {
    data,
    loading,
  };
};

export default ApiViewModel;
