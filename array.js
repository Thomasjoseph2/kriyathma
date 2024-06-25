const array = [3, 4, 9, 3, 8, 0, 4, 9];

function removeDuplicates(array) {
  const newArray = array.filter((item, index) => array.indexOf(item) === index);
  return newArray;
}

console.log(removeDuplicates(array));

function FindMinMax(array) {
  let min = array[0];
  let max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  return {  max,min };
}

console.log(FindMinMax(array));








const str='KRIYATMA'

console.log(str.substring(1));

function reverse(str,length){
   if(str.length<1)return str
 
   else return reverse(str.substring(1))

}

console.log(reverse(str,str.length));


