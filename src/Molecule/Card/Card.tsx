import React, { Children, memo } from "react";
import { RandomAvatar } from "react-random-avatars";
import "./Card.css";
import Button from "../../Atoms/Button/Button";
import { FcCollect, FcExpand } from "react-icons/fc";
import { FcCollapse } from "react-icons/fc";
import Avatar from "../../Atoms/Avatar/Avatar";

interface CardProps {
  id: number;
  name: string;
  hasChildren: boolean;
  isExpanded?: boolean;
  onToggleExpand?: (id: number) => void;
  depth: number;
  onRemoveHandler: () => void;
  totalChildrenCount: number;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  isExpanded = false,
  hasChildren,
  onToggleExpand,
  depth,
  onRemoveHandler,
  totalChildrenCount
}) => {
  const handleExpandClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleExpand?.(id); 
  };

  return (
    <div className="card" style={{ marginLeft: depth === 1 ? 0 : `${depth * 50}px` }}>
      <RandomAvatar name={name} size={40} />
      <div className="card-content" style={{ marginLeft: "10px", flexGrow: 1 }}>
        <h2>Name: {name}</h2>
        <h6>Total Children: {totalChildrenCount} </h6>
      </div>
      <Button className="remove-button" onClick={onRemoveHandler} text="Remove" />
      {hasChildren && (
        <Avatar  icon={isExpanded ? <FcCollapse /> : <FcExpand/>} className="expand-icon"  onClick={handleExpandClick}/>
      )}
      {!hasChildren && <Avatar icon={<FcCollect />} disabled />}
    </div>
  );
};

export default memo(Card);
