def solution(money):
    dp1 = []
    dp2 = []
    dp1.append(money[0])
    dp1.append(money[1])
    dp2.append(0)
    dp2.append(money[1])
    dp2.append(money[2])
    for i in range(2,len(money)):
        if i == len(money)-1:    
            dp1.append(max(dp1[-1],dp2[-1]))
            break
        if i==2:
            dp2.append(max(money[i+1]+dp2[i-1],dp2[i]))
            dp1.append(max(money[i]+dp1[i-2],dp1[i-1]))
        else:
            dp2.append(max(money[i+1]+dp2[i-1],money[i+1]+dp1[i-2],dp2[i]))
            dp1.append(max(money[i]+dp1[i-2],money[i]+dp1[i-3],dp1[i-1])) 

    
    return dp1[-1] 
money = [1,2,2,100,2]

print(solution(money))