function solution(A, K) {
    if (A.length == 0) {
        return A;
    }
    for (let i = 0; i < K; i++) {
        let head = A.pop();
        A.unshift(head);
    }
    return A;
}