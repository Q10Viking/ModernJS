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