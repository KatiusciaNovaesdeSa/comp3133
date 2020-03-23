
const mixedArray = ["PIZZA", 10 , true , 25 , false , "Wings"];

var lowerCaseWords =  function(words){
    var newArray =[];
    if( words.length > 1){
        for(var i =0; i < words.length ; i++){
            if(typeof words[i] == "string"){
                newArray.push(words[i].toLowerCase());
            }
        }
        return Promise.resolve(newArray);
    }else{
        var error  = new Error("Error: Array cannot be empty!!!!");
        return Promise.reject(error);
    }
    

}

//sorting alphabetically
const sortWords = (result) => {
    return result.sort();
}


lowerCaseWords(mixedArray)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error));