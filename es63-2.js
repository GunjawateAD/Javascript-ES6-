// Nesting of callbacks and the Pyradim of Doom, Callback hell

const url1='https://www.js.img1';

const url2='https://www.js.img2';

const url3='https://www.js.img3';

const url4='https://www.js.img4';

const url5='https://www.js.img5';

const url6='https://www.js.img6';

function download(url, callback)
{
    setTimeout(() => {
        console.log("Downloading ", url, " .....");
        callback(url);
    }, 2000);
}

download(url1, function(url){
    console.log("Processing img ", url);
    download(url2, function(url){
        console.log("Processing img ", url);
        download(url3, function(url){
            console.log("Processing img ", url);
            download(url4, function(url){
                console.log("Processing img ", url);
                download(url5, function(url){
                    console.log("Processing img ", url);
                    download(url6, function(url){
                        console.log("Processing img ", url);
                    })
                })
            })
        })
    })
})