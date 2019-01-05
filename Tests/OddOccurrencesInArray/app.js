
function solution(A) {
    let dict = {};
    A.forEach((item) => {
        if (dict[item] == undefined) {
            dict[item] = 1;
        } else {
            dict[item] += 1;
        }
    });
    for (let key in dict) {
        let value = dict[key];
        if (value % 2 !== 0) {
            return parseInt(key);
            break;
        }
    }
};

let array = [9, 3, 9, 3, 9, 7, 9];
console.log(solution(array));