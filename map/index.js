function map(array, transformFunc, ctx) {
    var result = [];
    for(var i=0; i<array.length; i++) {
        result[i] = transformFunc.call(ctx, array[i], i, array);
    }   
    return result;
}

module.exports = map;

