function solution(s) {
  let steps = 0;
  let zeroCount = 0;
  
  while (s !== '1') {
    let onceOnly = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== '0') {
        onceOnly += s[i];
      } else {
        zeroCount++;
      }
    }
    s = onceOnly.length.toString(2);
    steps++;
  }

  return [steps, zeroCount];
}