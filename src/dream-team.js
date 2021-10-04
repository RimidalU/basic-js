import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {

  
  if (Array.isArray(members) === false){
     return false
  } 
  
  let result = [];
  members.flat(Infinity);

  for (let i = 0; i < members.length; ){
    if((typeof members[i] !== "string") || (members[i] == undefined) || (typeof members[i] === 'number') || (members[i] == NaN) || (members[i] == null)){
      ++i;

    }else if(typeof members[i] == "string"){
    let item = members[i].trim().toUpperCase();

    item.split('');
    result.push(item[0]);
    ++i;
    }
}
return result.sort().join(""); 
}
