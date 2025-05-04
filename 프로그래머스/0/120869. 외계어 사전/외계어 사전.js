function solution(spell, dic) {
  const spellObj = {};
  let stack = [];
  
  for (const item of spell) {
    spellObj[item] = true;
  }
  
  const findUseSameSeplling = dic.filter((item) => item.length === spell.length);
  
  for(const spelling of findUseSameSeplling) {
     for (const spell of spelling) {
         if (spellObj[spell] && !stack.includes(spell)) {
             stack.push(spell)
         }
     }
     
     if (stack.length === spell.length) {
         return 1
     }
     
     stack = [];
  }
    
  return 2
}