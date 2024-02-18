import axios from 'axios';

const apiRequest = async (endpoint: string, customParams: object) => {
  const options = {
    method: 'GET',
    url: `https://v1.basketball.api-sports.io/${endpoint}`,
    params: customParams,
    headers: {
      'X-RapidAPI-Key': 'c20a1ab05bf0985e09d2e9624cb9d6b7',
      'X-RapidAPI-Host': 'v1.basketball.api-sports.io',
    },
  };
  try {
    const response = await axios.request(options);
    if (!response) throw Error('Data not found');
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export default apiRequest;
