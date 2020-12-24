class EasyHttp{
    get(url){
        return new Promise( resolve => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
        })
    }

    post(url,data){
        return new Promise(reslove => {
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-type':'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => reslove(data));
        })
    }

    put(url,data){
        return new Promise(reslove => {
            fetch(url,{
                method: 'put',
                headers: {
                    'Content-type':'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => reslove(data));
        })
    }

    delete(url){
        return new Promise( resolve => {
            fetch(url,{
                method: 'DELETE'
            })
                .then(() => resolve('Resource Deleted!'));
        })
    }
}