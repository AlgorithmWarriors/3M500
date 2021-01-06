from collections import deque

def bfs(start, image, visit):
    queue = deque()
    queue.append(start)
    color = image[start[0]][start[1]]
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    while queue:
        y,x = queue.popleft()
        visit[y][x] = 1  
        for dy,dx in dirs:
            ny,nx = y+dy,x+dx
            if 0<= ny <len(image) and 0 <= nx < len(image[0]) and not visit[ny][nx] and image[ny][nx] == color:
                visit[ny][nx] = 1 
                queue.append((ny,nx))
    return 1 


def solution(n, m, image):
    visit = [[0 for _ in range(m)] for _ in range(n)] 
    answer = 0
    for y in range(n):
        for x in range(m):
            if not visit[y][x]:
                answer += bfs((y,x), image, visit)
            
    return answer
image = [[1, 2, 3], [3, 2, 1]]
solution(2,3,image)