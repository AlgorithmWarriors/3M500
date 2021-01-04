from queue import PriorityQueue

def solution(healths, items):
    healths.sort()
    items = [(item[1], item[0], idx) for idx, item in enumerate(items, 1)]
    items.sort()

    DEBUFF, BUFF, INDEX = 0, 1, 2

    pq = PriorityQueue()
    answer = []
    item_idx = 0

    for health in healths:
        while item_idx < len(items):
            item = items[item_idx]
            if health - item[DEBUFF] < 100:
                break
            pq.put_nowait((-item[BUFF], item[INDEX]))
            item_idx += 1
        if not pq.empty():
            _, index = pq.get_nowait()
            answer.append(index)

    return sorted(answer)
