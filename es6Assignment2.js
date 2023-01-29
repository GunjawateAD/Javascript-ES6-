//Fetch Data  Using API
const url = 'https://jsonplaceholder.typicode.com/comments';//API

fetch(url)
    .then((data) => data.json())
    .then((data) =>{
        console.log(data);
        var table = "<table><tr><th>"+"Id"+"</th><th>"+"Name"+"</th><th>"+"Email"+"</th><th>"+"Body"+"</th></tr></body>";
        for(let i=0;i<data.length;i++)
        {
            table=table+"<tr><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td>"+data[i].email+"</td><td>"+data[i].body+"</td></tr>";
        }
        table=table+"</body></table>";

        document.getElementById("text").innerHTML=table;

    })
    .catch((err) => {
        document.write("<p> URL Not Found " + err+"</p>");
    });