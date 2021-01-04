def solution(dirs):
    Visit = []
    point = [0,0]
    for commend in dirs:
        y = point[0]
        x = point[1]
        if commend == 'U':
            if [point,[y+1,x]] not in Visit:
                Visit.append([point,[y+1,x]])
                Visit.append([[y+1,x],point])
            point = [y+1,x]
        elif commend == 'D':
            if [point,[y-1,x]] not in Visit:
                Visit.append([point,[y-1,x]])
                Visit.append([[y-1,x],point])
            point = [y-1,x]
        elif commend == 'L':
            if [point,[y,x-1]] not in Visit:
                Visit.append([point,[y,x-1]])
                Visit.append([[y,x-1],point])
            point = [y,x-1]
        elif commend == 'R':
            if [point,[y,x+1]] not in Visit:
                Visit.append([point,[y,x+1]])
                Visit.append([[y,x+1],point])
            point = [y,x+1]
    return len(Visit)/2
dir = "ULURRDLLU"
print(solution(dir))