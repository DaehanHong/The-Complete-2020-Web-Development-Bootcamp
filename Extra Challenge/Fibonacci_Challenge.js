function fibonacciGenerator (n) {
    var result = [];
    for(var i = 0; i < n; i++)
    {
        if(i < 2)
        {
            result.push(i);
        } else {
            var num = result[i-1] + result[i-2];
            result.push(num);
        }
    }
    return result;
}
