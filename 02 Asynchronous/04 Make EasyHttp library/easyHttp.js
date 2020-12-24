function EasyHttp(){
    this.http = new XMLHttpRequest();
}

//  GET Method
EasyHttp.prototype.get = function(url,callback){
    this.http.open('GET',url);
    let that = this;
    this.http.onload = function(){
        if(that.http.status === 200){
            callback(null,that.http.responseText);
        }else{
            callback(`Error: ${that.http.status}`);
        }
    }
    this.http.send();
}


//  POST Method
EasyHttp.prototype.post = function(url,data,callback){
    this.http.open('POST',url);
    this.http.setRequestHeader("Content-Type", "application/json");
    let that = this;

    this.http.onload = function(){
        // console.log(that.http.status); 201
        callback(null,that.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

EasyHttp.prototype.put = function(url,data,callback){
    this.http.open('PUT',url);
    this.http.setRequestHeader("Content-Type", "application/json");
    let that = this;

    this.http.onload = function(){
        // console.log(that.http.status); 201
        callback(null,that.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}


//  GET Method
EasyHttp.prototype.delete = function(url,callback){
    this.http.open('GET',url);
    let that = this;
    this.http.onload = function(){
        let obj = {
            status: 'success',
            result: that.http.responseText
        }
        callback(null,JSON.stringify(obj));
    }
    this.http.send();
}