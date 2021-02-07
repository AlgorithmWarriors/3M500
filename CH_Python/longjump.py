def solution(n):
    dp = [1,2,3,5]
    if n>4:
        for i in range(n-4):
            dp.append(dp[i+3]%1234567+dp[i+2]%1234567)
         
    return dp[n-1]

print(solution(7))