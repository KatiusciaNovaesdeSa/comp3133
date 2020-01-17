
const makeUpperCase = words =>
    new Promise((resolve, reject) => {
        if (words.every(word =>typeof word === 'string')){
            resolve(words.map(word => word.toUpperCase()))
        }else{
            reject(Error('Not all items in the array are strings!'))

        
        }
    })

    const sortWords = words => {
        return words.sort((a,b) =>{
            if(a>b){
                return 1
            }
            else{
                return -1
            }
        })
    }

/*const sortWords = words => {
    return new Promise ((resolve, reject) => {
        if(words) {
            resolve(words.sort())
        }
        else{
            reject('strings only')
        }
    })
}
*/

const arrayOfNames = ['jaxx', 'tiny', 'clay'];
makeUpperCase(arrayOfNames) 
    .then(sortWords) 
    .then(result => console.log(result)) 
    .catch(error => console.log(error));

const mixedArray = ['anarchy', 99, true];
makeUpperCase(mixedArray) 
    .then(sortWords) 
    .then(result => console.log(result)) 
    .catch(error => console.log(error))