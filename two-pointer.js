function reverseString(str) {
  let strArr = str.split('');
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    const temp = strArr[start];
    strArr[start] = strArr[end];
    strArr[end] = temp;
    start++;
    end--;
  }

  return strArr.join('');
}

const reverseString = (str) => {
  // Create 2 pointers (1st item and last item)

  let leftPointer = 0;
  let rightPointer = str.length - 1;

  while(leftPointer < rightPointer) {
    if(str[leftPointer] === str[rightPointer]) {
      leftPointer += 1;
      rightPointer -= 1;
    } else {
      return false
    }
  }
  return true;
 
};

console.log(reverseString("racecar")); 

function reverseOnlyAlphabetical(str) {
  const alphaChars = [];
  str = str.split(''); // strings are immutable in JS

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      alphaChars.push(char);
    }
  }

  const reversedAlpha = reverseArray(alphaChars);

  // let idxRA = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      str[i] = reversedAlpha[i];
    }
  }

  return str.join('');
}

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}

function reverseOnlyAlphabetical(str) {
  let strArr = str.split("");
  let start = 0;
  let end = str.length - 1;
  while(start <= end) {
    if((/[a-zA-Z]/).test(strArr[start]) && (/[a-zA-Z]/).test(strArr[end])) {
      const temp = strArr[start];
      strArr[start] = strArr[end];
      strArr[end] = temp;
      start++;
      end--;
    }
    if(!(/[a-zA-Z]/).test(strArr[start])){
      start++;
    }
    if(!(/[a-zA-Z]/).test(strArr[end])){
      end--;
    }
  }
  return strArr.join("");
}

// ('sea!$hells3') should equal 'sll!$ehaes3'
console.log(reverseOnlyAlphabetical('sea!$hells3'));

function twoSum(arr, goal) {
  let results = [];
  const sortedArr = arr.sort((a, b) => a - b);
  for(let start=0, end=sortedArr.length - 1; start < end;){
    let sum = sortedArr[start] + sortedArr[end];
    if(sum === goal) {
      results = [start, end];
      break;
    } else if (sum < goal){
      start++;
    }else {
      end--;
    }
  }
  // define this method
  return results;
}
console.log(twoSum([1, 9, 13, 20, 47], 10));

function isAnagram(str1, str2) {
  // fill this in
  if(str1.length !== str2.length) return false;
  // const str1Arr = str1.toLowerCase().split("").sort();
  // const str2Arr = str2.toLowerCase().split("").sort();
  // for(let i=0; i < str1.length; i++){
  //   if(str1Arr[i] !== str2Arr[i]) return false;
  // }
  let isAnagram = true;
  const seen = {};
  for(let i = 0; i <str1.length; i++) {
    const item = str1[i].toLowerCase();
    if (seen[item]) {
      seen[item] = seen[item] + 1;
    } else {
      seen[item] = 1
    } 
  } 

  for(let i = 0; i<str2.length; i++) {
    const item = str2[i].toLowerCase(); 
    if (seen[item]) {
      seen[item] = seen[item] - 1;
    } else {
      isAnagram = false;
      break;
    }
  }
  return isAnagram;
}
