function oddNumbers(l, r) {
    // Write your code here
    /* (l + 1) /2 !== 0
    */
    let oddNums = [];
    for(let i=l -1;i<r;i++){
        const currentNum= i + 1;
      if(currentNum%2 !==0){
        oddNums.push(currentNum)
      }
    };
  return oddNums;

}

console.log(oddNumbers(2,5))