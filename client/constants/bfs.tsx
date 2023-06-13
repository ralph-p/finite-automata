
export const getPathMap = ( transitions: Map<any, any>, start: string, inputSymbols: string[]) => {
        // solve
        let queue: string[] = []
        queue[0] = start
        let visited = new Set()
        visited.add(start)
        let pathMap: Map<string, string> = new Map()
        while (queue.length) {
            let queueState = queue.pop()
            let node = transitions.get(queueState)
            if (node) {
                let neighbours = inputSymbols.map((i) => node[i]).filter(value => value !== undefined);
                if (neighbours.length) {
                    neighbours.forEach((neighbour) => {
                        if (!visited.has(neighbour)) {
                            queue.push(neighbour)
                            visited.add(neighbour)
                            pathMap.set(neighbour, queueState as string)
                        }
                    })
    
                }
            }
        }
        return pathMap
}

export const findShortestPath = (allStates: string[], transitions: Map<any, any>, start: string, end: string, inputSymbols: string[]) => {
    // solve
    let pathMap = getPathMap(transitions, start, inputSymbols)
    // reconstruct path
    let path: string[] = [end]
    let backPath = end
    while(pathMap.has(backPath)) {
        const step = pathMap.get(backPath)
        if(step) {
            path.push(step)
            if(step === start) return path.reverse()
            backPath = step
        }
    }
    return false
}