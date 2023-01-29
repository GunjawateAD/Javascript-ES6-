//Fetch Data  Using API
const url = 'https://jsonplaceholder.typicode.com/comments';//API

fetch(url)
    .then((data) => data.json())
    .then((data) =>{
        console.log(data);
        for(let i=0;i<data.length;i++)
        {
            document.write("<p> Name is : " + i + ":" + data[i].name+ "</p>");
            document.write("<h6> Email is : " + i + ":" + data[i].email+ "</h6>");
        }
    })
    .catch((err) => {
        document.write("<p> URL Not Found " + err+"</p>");
    });


    //Task 1 Calculator
    // Task 2 - Create a Button with Name Of Fetch Data
    //on click we should get data in table format 