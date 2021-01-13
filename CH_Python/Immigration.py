def solution(n, times): 
    
    right = max(times) * n 
    left = 1 
    answer = 0 

    while(left <= right): 
        mid = (right + left) // 2 
        temp = n 
        for i in times: 
            temp -= mid//i 
            if temp <= 0: 
                answer = mid 
                right = mid - 1 
                break 
        if temp>0: 
            left = mid + 1 

    return answer

