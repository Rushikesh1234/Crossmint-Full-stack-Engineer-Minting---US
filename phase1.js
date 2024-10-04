const axios = require('axios');

const candidateId = '5abf1841-4ddc-42e9-93ec-d5b7cff294ce';

const apiUrl = 'https://challenge.crossmint.io/api/polyanets';

const positions = [
  { row: 2, column: 2 },
  { row: 2, column: 8 },
  { row: 3, column: 3 },
  { row: 3, column: 7 },
  { row: 4, column: 4 },
  { row: 4, column: 6 },
  { row: 5, column: 5 },
  { row: 6, column: 4 },
  { row: 6, column: 6 },
  { row: 7, column: 3 },
  { row: 7, column: 7 },
  { row: 8, column: 2 },
  { row: 8, column: 8 }
];

// Function to create a Polyanet at a given position
const createPolyanet = async (row, column) => {
  try {
      const response = await axios.post(apiUrl, {
        candidateId: candidateId,
        row: row,
        column: column
      });
      console.log(`Polyanet created at (${row}, ${column})`);
    } catch (error) {
      console.error(`Failed to create Polyanet at (${row}, ${column}): ${error}`);
    }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const createXPattern = async () => {
    for (const position of positions) {
        await createPolyanet(position.row, position.column);
        await delay(300);
    }
};

createXPattern();
