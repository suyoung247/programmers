function solution(s) {
    let answer = ""
    for (let index = 0; index < s.length; index++) {
        if(index === 0 || s[index - 1] === " ") {
            answer += s[index].toUpperCase();
        } else {
            answer += s[index].toLowerCase();
        }   
    }
  
    return answer;
}