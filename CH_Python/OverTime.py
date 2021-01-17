import heapq,math
def solution(no, works):
    workheap = []
    result = 0
    for work in works:
        heapq.heappush(workheap,work*-1)
    while no != 0:
        num = heapq.heappop(workheap)
        if num ==0:
            break
        heapq.heappush(workheap,num+1)
        no -=1
    while len(workheap) != 0:
        result += workheap.pop()**2
    return result
N= 2 
works = [0,0,1]
print(solution(N,works))