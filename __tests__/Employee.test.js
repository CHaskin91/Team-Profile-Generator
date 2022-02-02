const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
  const employee = new Employee('Annie');

  expect(employee.name).toBe('Annie');
  expect(employee.name).toEqual(expect.any(String));
});