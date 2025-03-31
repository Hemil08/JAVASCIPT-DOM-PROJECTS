Array.prototype.myMap = function(callback){

    var arr = [];

    for(let i=0;i<this.length;i++){
        arr.push(callback(this[i]));
    }

    return arr;

};

var a = [5,2,6,8]

var r = a.myMap(item => item*3)
console.log(r);