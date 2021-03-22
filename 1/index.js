function facingDirectionTest() {
  const amountTestCases = parseInt(prompt('Amount of test cases'));
  const testCases = [];

  for (let index = 0; index < amountTestCases; index++) {
    const input = prompt(`Test case ${index + 1}. Input 2 numbers separated by space`);
    testCases.push(input.split(' ').map(Number));
  }

  const result = testCases.map((testCase) => findFacingDirection(testCase[0], testCase[1]));

  alert(`Facing directions: \n${result.join('\n')}`);
}

function findFacingDirection(n, m) {
  if (n > m) {
    if (m % 2 == 0) return 'U';
    return 'D';
  }
  if (n % 2 == 0) return 'L';
  return 'R';
}

facingDirectionTest();
