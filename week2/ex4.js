function delayedPromise(number){
     return new Promise(function(resolve,reject){ 
         setTimeout(() => { 
             console.log("Done!")
              var answer = number*number 
              resolve(answer) 
              return answer
          },  500); 
     });
 }


async function asyncPromise(number){
    let promise1 = await new Promise(function(resolve,reject){
         var result = setTimeout(() => {
              console.log("Async Done!")
               var answer = number*number 
               resolve(answer)
               return answer
          }, 500);
          
   })
   var result = promise1; 
   return result
}


 

delayedPromise(5) .then(result => console.log(result))
asyncPromise(6) .then(result => console.log(result))