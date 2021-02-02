def solution(n, s):
    if n > s : 
        return -1
    mok = n//s 
    answer = [ mok for i range(n)]
    remain = s%n
    index = len(n) - 1 
    for i in range(remain):
        answer[index] +=1 
        index -=1
    return answer