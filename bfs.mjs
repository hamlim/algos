/**
 * 
 * Breadth First Search
 * 
 * Concept:
 * - Layer by layer approach
 * - If you're in a maze, first explore all paths that are 1 step away
 *   - Then explore all paths 2 steps away, and so on
 * 
 * 
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    toString() {
        return JSON.stringify({value: this.value, children: this.children}, null, 2)
    }
}

let root = new TreeNode(1)

root.children.push(new TreeNode(2), new TreeNode(3))
root.children[0].children.push(new TreeNode(4), new TreeNode(5));
root.children[1].children.push(new TreeNode(6), new TreeNode(7));


// === Algorithm: ===
// init the queue
// loop through the queue
    // grab the first item in the queue
    // process the item
    // push the next nodes into the queue
export function bfs(root) {
    // === Algorithm: ===
    // init the queue
    // loop through the queue
      // grab the first item in the queue
      // process the item
      // push the next nodes into the queue

    let q = [root]

    while (q.length > 0) {
        let current = q.shift()

        console.log(current.value);

        current.children.forEach(child => q.push(child))
    }
}

// bfs(root)

// Maze Problem:

let grid1 = [
  [0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 2]
]

// 0 = empty spot
// 1 = wall
// 2 = end

function shortestPathInMaze(maze) {
    let queue = [
        {
            x: 0,
            y: 0,
            distance: 0
        }
    ]

    while (queue.length > 0) {
        let current = queue.shift();

        if (maze[current.y][current.x] === 2) {
            return current.distance;
        }

        // Important!
        // We don't want to re-visit this node after we follow down this path
        maze[current.y][current.x] = 1;

        // look at +/-1 from the current cell
        // if valid (e.g. not 1, or not overflow)
        // add to queue and continue

        // up
        if (
            // Can we backtrack on y?
            typeof maze[current.y-1] !== 'undefined' &&
            // is the cell up one not a 1?
            maze[current.y - 1][current.x] !== 1
        ) {
            queue.push({
                x: current.x,
                y: current.y - 1,
                distance: current.distance + 1
            })
        }
        // down
        if (
            // Can we forward-track(?) on y?
            typeof maze[current.y + 1] !== 'undefined' &&
            // is the cell down one not a 1?
            maze[current.y + 1][current.x] !== 1
        ) {
            queue.push({
                x: current.x,
                y: current.y + 1,
                distance: current.distance + 1
            })
        }
        // left
        if (
            // Can we back-track(?) on x?
            typeof maze[current.y][current.x - 1] !== 'undefined' &&
            // is the cell left one not a 1?
            maze[current.y][current.x - 1] !== 1
        ) {
            queue.push({
                x: current.x - 1,
                y: current.y,
                distance: current.distance + 1
            })
        }
        // right
        if (
            // Can we forward-track(?) on x?
            typeof maze[current.y][current.x + 1] !== 'undefined' &&
            // is the cell right one not a 1?
            maze[current.y][current.x + 1] !== 1
        ) {
            queue.push({
                x: current.x + 1,
                y: current.y,
                distance: current.distance + 1
            })
        }
    }

    return -1;
}

console.log(shortestPathInMaze(grid1))