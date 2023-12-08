import axios from "axios";

export const fetchData = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://real-time-product-search.p.rapidapi.com/search',
        params: {
          q: 'Nike shoes',
          country: 'us',
          language: 'en'
        },
        headers: {
          'X-RapidAPI-Key': '3beda21666msh8100c8afaaeef88p1ccab3jsne9096190f60d',
          'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
       
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };