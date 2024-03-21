export interface TreeNode<T> {
  id: number;
  data: T;
  children: TreeNode<T>[];
  expanded: boolean;
}

export interface TreeWalkNode<T> {
  id: number;
  data: T;
  isExpandableFurther: boolean;
  expanded: boolean;
  depth: number;
  totalNoOfChildrens: number;
}



export interface TreeListItemProps {
  node: TreeWalkNode<any>;
  handleToggleExpand: (node: TreeWalkNode<any>) => void;
  handleDelete: (id: number) => void;
}