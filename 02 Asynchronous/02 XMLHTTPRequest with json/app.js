const btn = document.getElementById('button');

btn.addEventListener('click',function(){

    const xhr = new XMLHttpRequest();

    //  api open

    xhr.open('GET','customers.json');

    // new version
    xhr.onload = function(){
        if(this.status === 200){

            let output = '';

            const customers = JSON.parse(this.responseText);

            customers.forEach(customer => {
                output += `
                <ul>
                    <li>${customer.id}</li>
                    <li>${customer.name}</li>
                    <li>${customer.company}</li>
                    <li>${customer.phone}</li>
                </ul>
                `
            })

            document.getElementById('output').innerHTML = output
        }
    }


    xhr.send();
})