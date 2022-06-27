// Sum of common elements in two sets.
               //Method 1:
         const set1=[4,5,7,1,8]
         const set2=[3,4,9,5]
         function SumCommonElements(set1,set2) {
             let sum = 0;
         
           for(let i = 0; i < set1.length; i++){
              for (let j=0 ; j<set2.length;j++){
                      if(set1[i]==set2[j]){
                         sum += set2[j];
                      }
                 }
            
          }
             return sum;
         }
                 //Method 2:
         const set3=[4,5,7,1,8]
         const set4=[3,4,9,5]
         const Common= set3.filter(function (val) {
             return set4.includes(val);
         });
         
         function getSum(arr) {
             
                 var sum = 0;
                 for(var i = 0; i < arr.length; i++) {
                   sum += arr[i];
                 }
                 return sum;
         }
         
         
         
         // Sum of unique elements in two sets.
         
         let arr1=[4,5,7,1,8,10,11]
         let arr2=[3,4,9,5,8,10]
         const array1 = arr1.filter(function (val) {
             return !arr2.includes(val);
         });
         const array2 = arr2.filter(function (val) {
             return !arr1.includes(val);
         });
         const newArray=array1.concat(array2)
         function Sum(newArray) {
             const sum=newArray.reduce(
             (accum,value)=>accum+value);
                 return sum
             }