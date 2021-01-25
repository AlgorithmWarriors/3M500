def solution(n, k):
    factorial = [1]
    number = [i for i in range(1,n+1)]
    answer = []
    for i in range(n-1):
        factorial.append(factorial[i]*(i+2))
    while n != 0 : 
        temp = factorial[n-1]//n
        index = k // temp
        k = k % temp
        if k == 0:
            answer.append(number.pop(index-1))
        else :
            answer.append(number.pop(index))
        n -= 1 
    return answer