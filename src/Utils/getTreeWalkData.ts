import { TreeNode, TreeWalkNode } from "../Models/Tree/Tree.model";

export function getTreeWalkData<T>(data: TreeNode<T>[]): TreeWalkNode<T>[] {
    const renderingData: TreeWalkNode<T>[] = [];
  

    function calculateTotalChildren(node: TreeNode<T>): number {
      let totalChildren = 0;
  
      if (node.children && node.children.length > 0) {
        node.children.forEach((child) => {
          totalChildren++; // Increment for the current child
          totalChildren += calculateTotalChildren(child); // Recursively calculate children of the child
        });
      }
  
      return totalChildren;
    }

    function traverse(node: TreeNode<T>, depth: number = 1) {
      const { id, data: nodeData, expanded, children } = node;
  
      const totalNoOfChildrens = calculateTotalChildren(node);
      if (children && children.length > 0 && expanded) {
       
        renderingData.push({
          id,
          data: nodeData,
          isExpandableFurther: true,
          expanded: true,
          depth,
          totalNoOfChildrens: totalNoOfChildrens
        });
  
        children.forEach((child) => traverse(child, depth + 1));
      } else {
        renderingData.push({
          id,
          data: nodeData,
          isExpandableFurther: children?.length > 0,
          expanded,
          depth,
          totalNoOfChildrens: totalNoOfChildrens
        });
      }
    }
  
    data.forEach((node) => traverse(node));
    return renderingData;
  }