
export const getPathMap = ( transitions: Map<any, any>, start: string, inputSymbols: string[]) => {
        // solve useing BFS/queue
        let queue: string[] = []
        // start the queue with the start element
        queue[0] = start
        // keep a set of visited states
        let visited = new Set()
        // "visit" the first state
        visited.add(start)
        // create a path map to track the path traveled
        let pathMap: Map<string, string> = new Map()
        // while the queue has states in it
        while (queue.length) {
            // get the first element in the queue
            let queueState = queue.shift()
            // get the node value in the transitions map
            let node = transitions.get(queueState)
            // if a transition exists we get the neighbours by mapping through the node object
            if (node) {
                let neighbours = inputSymbols.map((i) => node[i]).filter(value => value !== undefined);
                // for each neighbour if it hasn't been visited, we add it to the queue, add it to the visitors and set the pathMap with the key being the neighbour, and the value being the pervious step
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

export const findShortestPath = (transitions: Map<any, any>, start: string, end: string, inputSymbols: string[]) => {
    let pathMap = getPathMap(transitions, start, inputSymbols)
    // "walk back" the path till it reaches the end
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
    // if no path to the end value has been found we return false. 
    return false
}