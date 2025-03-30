function solution(s) {
  let noZero = s
  let countZero = 0;
  let process = 0;
  let string = '';
  while (noZero !== '1') {
    for (const item of noZero) {
      if (item !== '0') {
        string+= item
      } else {
        countZero++
      }
    }
    noZero = (string.length).toString(2);
    process++;
    string = ''
  }
  
  return [process, countZero];
}