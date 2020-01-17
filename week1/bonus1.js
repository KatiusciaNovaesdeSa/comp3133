const gretter = (myArray) => {
    let greetText = 'Hello ';

    for(const element of myArray)
    {
        console.log('Hello '+ element);
    }
}

gretter(['Randy Savage' , 'Ric Flair' , 'Hulk Hogan'] , 3);
