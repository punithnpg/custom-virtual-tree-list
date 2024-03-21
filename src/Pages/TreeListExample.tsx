import React from 'react'
import { Card, TreeList } from '../Molecule'
import { TreeListItemProps } from '../Models';

const TreeListItem: React.FC<TreeListItemProps> = ({
    node,
    handleToggleExpand,
    handleDelete,
}) => {
    return (
        <Card
            key={node.id}
            id={node.id}
            hasChildren={node.isExpandableFurther}
            isExpanded={node.expanded}
            onToggleExpand={() => handleToggleExpand(node)}
            depth={node.depth}
            name={node.data?.name}
            onRemoveHandler={() => handleDelete(node.id)}
            totalChildrenCount={node.totalNoOfChildrens}
        />
    );
};


const TreeListExample = () => {
    return (
        <div>
            <TreeList TreeListItemComponent={TreeListItem} />
        </div>
    )
}

export default TreeListExample