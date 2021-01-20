def tiling(n):
    if n % 2 == 1:
        return 0
    a = 1
    answer = 1
    sum = 0
    i = 2
    while i <= n:
        answer = a*3+sum*2
        sum += a
        a = answer
        i += 2
    return answer%100000