const Engineer = require('../lib/Engineer.js');

test('creates engineer object', () => {
    const engineer = new Engineer('Annie');
  
    expect(engineer.name).toBe('Annie');
    expect(engineer.name).toEqual(expect.any(String));
  });