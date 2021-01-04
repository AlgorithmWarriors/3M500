from collections import deque

def soluction(N,road,k):
    node = {}
    dist = {i:float('inf') if i != 1 else 0 for i in range(1,N+1)}
    for v1,v2,d in road:
        node[v1] = node.get(v1,[]) + [(v2,d)] 
        node[v2] = node.get(v2,[]) + [(v1,d)]
    que = deque([1]) 

    while que:
        cur_node = que.popleft()
        for next_node, d in node[cur_node]:
            if dist[next_node] > dist[cur_node] + d:
                dist[next_node] = dist[cur_node] + d
                que.append(next_node)
    return len([True for dist in dist.values() if dist <= k])