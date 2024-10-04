const axios = require('axios');

const candidateId = '5abf1841-4ddc-42e9-93ec-d5b7cff294ce';
const goalMapUrl = `https://challenge.crossmint.io/api/map/${candidateId}/goal`;

const getGoalMap = async () => {
  try {
    const response = await axios.get(goalMapUrl);
    const goalMap = response.data.goal;
    console.log(goalMap);
    return goalMap;
  } catch (error) {
    console.error('Error fetching the goal map:', error);
  }
};

getGoalMap();
