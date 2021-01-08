from collections import deque,defaultdict
import math

def find_parent(x,parent): 
    if x == parent[x]:
        return x
    else:
        p = find_parent(parent[x],parent)
        parent[x] = p 
        return p 

def union_find(x,y,parent):
    x = find_parent(x,parent)
    y = find_parent(y,parent)
    parent[y] = x 

def bfs(land, start ,visited, height ,group):
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    queue = deque()
    queue.append(start)
    while queue:
        y,x = queue.popleft()
        visited[y][x] = group
        for dy,dx in dirs: 
            ny, nx = y+dy,x+dx
            if 0 <= ny <len(land) and 0 <= nx <len(land[0]) and visited[ny][nx] == 0 and abs(land[ny][nx]-land[y][x]) <=height:
                visited[ny][nx] = group
                queue.append((ny,nx))


def find_height(visited, height, maps, table):
    for y in range(len(maps)):
        for x in range(len(maps[0])):
            rx = x + 1 
            dy = y + 1
            if rx < len(maps[0]) and visited[y][x] != visited[y][rx]:
                a,b = min(visited[y][x],visited[y][rx]),max(visited[y][x],visited[y][rx])
                table[(a,b)] = min(table[(a,b)],abs(maps[y][x] - maps[y][rx]))
            
            if dy < len(maps) and visited[dy][x] != visited[y][x]:
                a,b = min(visited[dy][x],visited[y][x]),max(visited[dy][x],visited[y][x])
                table[(a,b)] = min(table[(a,b)],abs(maps[dy][x] - maps[y][x]))


def solution(land, height): 
    visited = [[0 for _ in range(len(land[0]))] for _ in range(len(land))]
    group = 1

    for y in range(len(land)):
        for x in range(len(land[0])):
            if visited[y][x] == 0:
                bfs(land, (y,x), visited, height, group)
                group += 1 
    
    table = defaultdict(lambda :math.inf)
    find_height(visited, height, land, table)
    table = sorted(table.items(), key = lambda x : x[1])

    answer = 0
    nodes = {i:i for i in range(1,group)}
    for (a,b), value in table: 
        if find_parent(a, nodes) != find_parent(b, nodes):
            union_find(a,b, nodes)
            answer += value
        if len(nodes.values()) == 1:
            return answer

    return answer
land = [[1, 4, 8, 10], [5, 5, 5, 5], [10, 10, 10, 10], [10, 10, 10, 20]]

solution(land,3)