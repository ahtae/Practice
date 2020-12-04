// 73. Set Matrix Zeroes

const setZeroes = (matrix) => {
  const rows = {};
  const columns = {};

  for (let i = 0; i < matrix.length; i++) {
    const currentRow = matrix[i];

    for (let j = 0; j < currentRow.length; j++) {
      const currentElement = currentRow[j];

      if (currentElement === 0) {
        if (!rows[i]) {
          rows[i] = true;
        }

        if (!columns[j]) {
          columns[j] = true;
        }
      }
    }
  }

  for (let row in rows) {
    for (let i = 0; i < matrix[row].length; i++) {
      matrix[row][i] = 0;
    }
  }

  for (let column in columns) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][column] = 0;
    }
  }

  return matrix;
};

// Time Complexity: O(m * n)
// Space Complexity: O(n)
