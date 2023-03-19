var delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
function memoized() {
    var cache = {};
    return function (a, b) {
        if (a in cache && b in cache) {
            return cache[a];
        }
        var res = sum(a, b);
        cache[a] = res;
        cache[b] = res;
        return res;
    };
}
function sum(a, b) {
    return a * b;
}
var memoizedSum = memoized();
document.querySelector('button').addEventListener('click', function (ev) {
    var a = +prompt('a number');
    console.time();
    var res = memoizedSum(a, 9999999);
    console.log(res);
    console.timeEnd();
});
