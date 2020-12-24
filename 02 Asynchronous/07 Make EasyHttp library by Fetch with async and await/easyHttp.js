class EasyHttp{
    async get(url){
        // wait util promise resloved
        let response = await fetch(url);    
        let res = await response.json();
        return res;
    }

    async post(url,data){

        let response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(data)
        });

        let res = await response.json();
        return res;
    }

    async put(url,data){
        let response = await fetch(url,{
            method: 'PUT',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(data)
        });

        let res = await response.json();
        return res;
    }

    async delete(url){
        // wait util promise resloved
        let response = await fetch(url,{
                    method: 'DELETE'
            });
    
        let res = await "Resource deleted...";
        return res;
    }
}