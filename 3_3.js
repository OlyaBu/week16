/*задача 1*/
let arr = ['js', 'css', 'html'];
alert(arr[0])

array = [0, 1, false, 2, undefined, '', 3, null];

/*задача 2*/
function filterFalse(arr) {
    return arr.filter(function (v) {
        return !!v;
    });
}
document.writeln(filterFalse(array));

/*задача 3* Дан массив [[1,2], [1,2,3], [1,2,3,4]]. Найдите индекс массива, длина которого > 3.*/

let arr = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4]
]
arr.find(el => el.length > 3);
