const resolvedPromise = () => new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve({'message': 'delayed sucess!'})
    }, 500)
})

const rejectPromise = () => new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        try{
            resolve({'error':'delayed exception!'})
    }
        catch (e){

        }reject("Error");

    }, 500)

})

resolvedPromise()
.then(resolve=>console.log(resolve))
.catch(reject=>console.log(reject))


rejectPromise()
.then(resolve=>console.log(resolve))
.catch(reject=>console.log(reject))