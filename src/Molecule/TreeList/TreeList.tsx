// TreeList.tsx
import React, { useContext, useEffect } from 'react';
import { TreeContext, actionTypes } from './TreeContext';
import { getTreeWalkData, randomOrgData } from '../../Utils';
import { VirtualList } from '../../Atoms';
import { Data, TreeListItemProps, TreeWalkNode } from '../../Models';

interface TreeListProps {
  TreeListItemComponent: React.ComponentType<TreeListItemProps>;
}

const TreeList: React.FC<TreeListProps> = ({ TreeListItemComponent }) => {
  const { state, dispatch } = useContext(TreeContext);
  const { data } = state;
  const renderingNode = getTreeWalkData(data);

  useEffect(() => {
    dispatch({ type: actionTypes.SET_DATA, payload: randomOrgData });
  }, [dispatch]);

  const deleteTreeNodeById = (id: number, nodeArray: any[]) => {
    return nodeArray.reduce((acc, node) => {
      if (node.id !== id) {
        const children = node.children ? deleteTreeNodeById(id, node.children) : null;
        acc.push({ ...node, children });
      }
      return acc;
    }, []);
  };

  const handleDelete = (nodeId: number) => {
    const updatedData = deleteTreeNodeById(nodeId, data);
    dispatch({ type: actionTypes.DELETE_NODE, payload: updatedData });
  };

  const handleToggleExpand = (currentNode: any) => {
    const updateNode = (node: any) => {
      if (node.id === currentNode.id) {
        return { ...node, expanded: !node.expanded };
      }
      if (node.children) {
        return { ...node, children: node.children.map(updateNode) };
      }
      return node;
    };

    const updatedData = data.map(updateNode);
    dispatch({ type: actionTypes.TOGGLE_EXPAND, payload: updatedData });
  };

  const items = renderingNode.map((node: TreeWalkNode<Data>) => (
    <TreeListItemComponent
      key={node.id}
      node={node}
      handleToggleExpand={handleToggleExpand}
      handleDelete={handleDelete}
    />
  ));

  const renderRow = (item: React.ReactNode) => <div>{item}</div>;

  return (
    <div className="App">
      <VirtualList items={items} itemHeight={100} renderRow={renderRow} />
    </div>
  );
};

export default TreeList;
