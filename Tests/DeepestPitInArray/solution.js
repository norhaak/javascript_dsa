
function recursiveInc(c, A) {
    if (A[c] < A[c+1]) {
        return c
    }
    else {
        return recursiveInc(c+1, A);
    }
};

function recursiveDec(c, A) {
    let l = A.length;
    if(c < (l-1)) {
        if (A[c] > A[c+1]) {
            return c;
        } else {
            return recursiveDec(c+1, A);
        }
    } else {
        return c;
    }
}


function solution(A) {
    let n = A.length;
    let pitlist = []

    for (let p = 0; p < n - 1; p++) {
        let q = recursiveInc(p, A);
        if(p < q) {
            r = recursiveDec(q, A)
            if(q < r) {
		        aa = A[p] - A[q]
		        bb = A[r] - A[q]
                pitlist.push(Math.min(aa, bb))
            };
        };
    };

    if (pitlist.length > 0) {
      pitlist.sort()
      return(pitlist.pop())
    } else {
      return -1;
    }
};

let A = [0, 1, 3, -2, 0, 1, 0, -3, 2, 3]
//let p = 5;
//q = recursiveInc(p, A);
//r =  recursiveDec(q, A);
//console.log(p, q, r);

console.log(solution(A));