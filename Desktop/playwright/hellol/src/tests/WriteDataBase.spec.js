import { test, expect } from '@playwright/test';
// Correct import for insertEmployeeData
import { insertEmployeeData } from '../utils/WriteDBUtility'; // Ensure the path is correct

test('Insert Employee Data and Verify', async () => {
  const newEmployee = {
    name: 'Samuel Lee',
    age: 33,
    position: 'Product Manager',
    salary: '85004.00'
  };

  // Insert data into the database
  const result = await insertEmployeeData(newEmployee);
  console.log(result);  // Log the result to confirm data insertion

  // Verify the data in the database (using SELECT query or Playwright actions)
  expect(result).toHaveProperty('affectedRows', 1);  // Verify that the insert was successful
});
      