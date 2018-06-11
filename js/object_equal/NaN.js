//https://www.cnblogs.com/onepixel/p/5281796.html

100 - '2a' ; // NaN
'100' / '20a'; // NaN
'20a' * 5 ; // NaN
undefined - 1; // NaN, Number(undefined) == NaN
[] * 20 ; // 0, Number([]) == 0
null - 5; // -5, Number(null) == 0