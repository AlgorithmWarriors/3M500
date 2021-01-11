from itertools import combinations,product

def solution(a):
    answer = 0 
    bfsArray = [[] for _ in a[0]]  
    mylist = [index for index,val in enumerate(a,0)]
    for i in range(len(a[0])):
        count = 0
        for j in range(len(a)):
            if a[j][i] == 1 :
                count += 1
        newlist = list(combinations(mylist,count))
        for checklist in newlist:
            array = [0 for _ in a]
            for k in checklist:
                array[k] = 1
            bfsArray[i].append(array)
    totallists = list(product(*bfsArray))
    for totallist in totallists:
        for i in range(len(totallist[0])):
            checkodd = 0
            for j in range(len(totallist)):
                checkodd += totallist[j][i]
            if checkodd %2 == 1:
                break
        if checkodd %2 == 0:
            answer+=1
    return answer
a = [[0,1,0],[1,1,1],[1,1,0],[0,1,1]] 
print(solution(a))