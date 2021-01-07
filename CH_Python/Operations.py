def solution(arr):
    d = [[[0 for x in range(2)] for y in range(201)] for z in range(201)]
    oper = []

    for i in range(len(arr)):
        if arr[i] == "+":
            oper.append(-1)
        elif arr[i] == "-":
            oper.append(-2)
        else:
            oper.append(int(arr[i]))
            d[i][i][0] = oper[i]
            d[i][i][1] = oper[i]

    for i in range(2,len(arr),2): 
        for j in range(0,len(arr)-i,2):    
            tmax = 0
            tmin = 0
            max_n = -9999999
            min_n = 9999999
            for k in range(j+1,i+j,2):         
                if oper[k] == -1:       
                    tmax = d[j][k - 1][0] + d[k + 1][i + j][0]
                    tmin = d[j][k - 1][1] + d[k + 1][i + j][1]
                    if tmax > max_n:
                        max_n = tmax
                    if tmin < min_n:
                        min_n = tmin
                elif oper[k] == -2:       
                    tmax = d[j][k - 1][0] - d[k + 1][i + j][1]
                    tmin = d[j][k - 1][1] - d[k + 1][i + j][0]
                    if tmax > max_n:
                        max_n = tmax
                    if tmin < min_n:
                        min_n = tmin
            d[j][j + i][0] = max_n
            d[j][j + i][1] = min_n
    return d[0][len(arr) - 1][0]