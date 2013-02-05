// @title Date(): Time difference
// @desc A simple way to do benchmarks or compare dates

var start, end, result,
    n = 35;

start  = new Date();
result = fibonacci(n);
end    = new Date();

document.writeln("Took " + (end - start)
   + "ms to calculate the " + n + "th\nfibonacci number, "
   + result + '.');

function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return (fibonacci(n-1) + fibonacci(n-2));
    }
}