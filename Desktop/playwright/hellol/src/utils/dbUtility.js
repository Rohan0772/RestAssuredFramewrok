import { createConnection } from 'mysql2';

// Create a connection to the MySQL database
const connection = createConnection({
  host: 'localhost',       // Change to your MySQL server host if not localhost
  user: 'root',            // Replace with your MySQL username
  password: 'Rohan@10101', // Replace with your MySQL password
  database: 'sample_db'    // Replace with your database name
});

// Function to fetch employee data
function fetchEmployeeData() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM employees', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Named export
export { fetchEmployeeData };
