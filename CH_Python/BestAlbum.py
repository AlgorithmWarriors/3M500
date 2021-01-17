from collections import defaultdict
from operator import itemgetter
def solution(genres, plays):
    myalbum = defaultdict(lambda : 0)
    
    for genre,play in zip(genres,plays):
        myalbum[genre] += play
    
    rank = [genre for genre,play in sorted(myalbum.items(), key = itemgetter(1), reverse=True)]
    mydict = defaultdict(lambda : [])
    for i , song in enumerate(zip(genres,plays)):
        mydict[song[0]].append((song[1],i))
    
    answer = []
    for genre in rank:
        song_list = sorted(mydict[genre], key=itemgetter(0), reverse=True)
        if len(song_list) > 1:
            answer.append(song_list[0][1])
            answer.append(song_list[1][1])
        else:
            answer.append(song_list[0][1])
    return answer