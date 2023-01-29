//Asynch -- using asynch it allows to write promice based code in a synchronous way and it also checks that we are not breaking the execution thread

async function getData()
{
    var y =await "hello world"
    console.log(y)
}

console.log(1)
getData();
console.log(2)

function asynchronous_operation()
{
    let promise1 = new Promise((res,rej)=>res("Sucess"));
    let promise2 = new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Resolving After 5 Sec")
        },5000)
    })
    let combined_res=Promise.all([promise1,promise2])
    return combined_res
}

async function display()
{
    let data= await asynchronous_operation()
    console.log(data,"resived data")
}

display()

async function getFile()
{
    let mypromice=new Promise(function(res){
        let request =new XMLHttpRequest();
        request.open('GET','second.html');
        request.onload=function()
        {
            if(request.status==200)
            {
                res(request.response)
            }
            else
            {
                res("File Not Found")
            }
        }
        request.send();
    })

    document.getElementById('demo').innerHTML=await mypromice;
}

getFile();