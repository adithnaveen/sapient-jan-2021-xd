
const {generateText}  = require('../script/util')


test('should output given name and age in proper format', () => {
    const name = "Nagesh"; 
    const age = 22; 
    const expectedResult = `${name} (${age} years old)`
    const actualResult = generateText(name, age); 
    expect(actualResult).toBe(expectedResult); 
})

test('should fail post passing  invalid values', () => {
    const text = generateText('', null); 
    expect(text).toBe(' (null years old)')
})

