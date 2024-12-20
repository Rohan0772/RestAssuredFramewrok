import { test, expect } from '@playwright/test';
// Import the fetchEmployeeData function
import { fetchEmployeeData } from '../utils/dbUtility.js';

test('Verify Employee Data from Database', async ({ page }) => {
  // Fetch employee data from the database
  const data = await fetchEmployeeData();

  // Log the data to verify
  console.log(data);

  // Assuming the data structure, you can now verify it
  expect(data).toContainEqual({
    id: 1,
    name: 'John Doe',
    age: 28,
    position: 'Software Engineer',
    salary: '60000.00'
  });
  expect(data).toContainEqual({
    id: 2,
    name: 'Jane Smith',
    age: 34,
    position: 'Project Manager',
    salary: '75000.00'
  });
  // Add other data verification as needed
});
