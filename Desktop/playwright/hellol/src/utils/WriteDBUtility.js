import { createConnection } from 'mysql2';

// Create a connection to the MySQL database
const connection = createConnection({
  host: 'localhost',       // Change to your MySQL server host if not localhost
  user: 'root',            // Replace with your MySQL username
  password: 'Rohan@10101', // Replace with your MySQL password
  database: 'sample_db'    // Replace with your database name
});

// Function to insert employee data
function insertEmployeeData(employee) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO employees (name, age, position, salary) VALUES (?, ?, ?, ?)';
    connection.query(query, [employee.name, employee.age, employee.position, employee.salary], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Make sure you're exporting the function correctly
export { insertEmployeeData };
