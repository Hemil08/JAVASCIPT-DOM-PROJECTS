Array.prototype.myFilter = function(callback){
    var arr = [];

    for(let i=0;i<this.length;i++){
        if(callback(this[i]) == true){
            arr.push(this[i]);
        }
    }

    return arr;
}

var a = [5,21,61,8,1];

var result = a.myFilter(i => i<20);

console.log(result);