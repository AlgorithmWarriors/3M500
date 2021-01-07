from collections import defaultdict, deque

def can_reach(start, des, table):
    visited = set()
    queue = deque()
    queue.append(start)
    while queue:
        nxt = queue.popleft()
        visited.add(nxt)
        for i in table[nxt]:
            if i == des: 
                return 1
            elif i not in visited:
                queue.append(i)
                visited.add(i)
    return 0
  
def solution(n,signs):
    table = defaultdict(set)
    for y in range(n):
        for x in range(n):
            if signs[y][x] == 1:
                table[y].add(x)
                
    answer = [[0 for _ in range(n)] for _ in range(n)]
    for y in range(n):
        for x in range(n):
            answer[y][x] = can_reach(y, x, table)
    
    return answer