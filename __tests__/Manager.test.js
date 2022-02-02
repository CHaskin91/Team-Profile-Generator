const Manager = require('../lib/Manager.js');

test('creates manager object', () => {
    const manager = new Manager('Annie');
  
    expect(manager.name).toBe('Annie');
    expect(manager.name).toEqual(expect.any(String));
  });