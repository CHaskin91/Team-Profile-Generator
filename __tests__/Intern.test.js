const Intern = require('../lib/Intern.js');

test('creates intern object', () => {
    const intern = new Intern('Annie');
  
    expect(intern.name).toBe('Annie');
    expect(intern.name).toEqual(expect.any(String));
  });