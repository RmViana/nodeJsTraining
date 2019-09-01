const { calculateTip } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})

test('Should caculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

// 
//Why Test?
// 
// - Saves Time
// - Creates reliable software
// - Gives flexibility to developers
//   - Refactoring
//   - Collaborating
//   - Profiling
// -Piece of mind