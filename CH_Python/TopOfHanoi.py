def hanoi(n, i, f):
    if n==1: return [[i, f]]
    return hanoi(n-1, i, 6-i-f) + hanoi(1, i, f) + hanoi(n-1, 6-i-f, f)

def solution(n):
    answer = hanoi(n, 1, 3)
    return answer

