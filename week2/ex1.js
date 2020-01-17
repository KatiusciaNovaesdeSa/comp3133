const compareNumToTen = number => {
    return new Promise ((resolve, reject) => {
        if (number > 10){
            resolve(number +' is greater than 10');
        }
        else{
            reject(number + ' is less than 10');
    }
  });
};

compareNumToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));


compareNumToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));    
    
