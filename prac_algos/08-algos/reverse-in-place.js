
const reverseInPlace = (arr)=>{
 let left = 0;
 let right = arr.length -1;
 while( left < right){
   let temp = arr[left];
   arr[left] = arr[right];
   arr[right] = temp;
   left ++;
   right --;
 }
 return arr
}


console.log(reverseInPlace([8,6,7,5,3,0,9]))
