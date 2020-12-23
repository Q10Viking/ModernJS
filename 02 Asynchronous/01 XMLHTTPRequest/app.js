const btn = document.getElementById('button');

btn.addEventListener('click',function(){

    const xhr = new XMLHttpRequest();

    //  api open

    xhr.open('GET','data.txt');

    // new version
    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById('output').innerHTML = `
                <h1>${this.responseText}</h1>
            `
        }
    }

    //  old version
    // xhr.onreadystatechange = function(){
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();


    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready

})