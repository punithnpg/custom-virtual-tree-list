import { Data } from "../Models";
import { TreeNode } from "../Models/Tree/Tree.model";

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomTree(depth: number): TreeNode<Data>[] {
    const nodes: TreeNode<Data>[] = [];

    function generateNode(id: number, level: number): TreeNode<Data> {
        const node: TreeNode<Data> = {
            id,
            data: { id, name: `Node ${id}` },
            children: [],
            expanded: true,
        };

        if (level < depth) {
            const numChildren = getRandomInt(1, 3);
            for (let i = 0; i < numChildren; i++) {
                const childId = id * 10 + i + 1;
                const childNode = generateNode(childId, level + 1);
                node.children.push(childNode);
            }
        }

        return node;
    }

    const numRootNodes = getRandomInt(7, 10);
    for (let i = 0; i < numRootNodes; i++) {
        const rootNodeId = i + 1;
        const rootNode = generateNode(rootNodeId, 1);
        nodes.push(rootNode);
    }

    return nodes;
}

const randomOrgData = generateRandomTree(7);


export default randomOrgData;
