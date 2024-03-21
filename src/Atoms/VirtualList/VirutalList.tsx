import React, { useState, useEffect, useRef } from "react";

const VirtualListItem = ({ item, itemHeight, renderRow }) => (
  <div style={{ height: `${itemHeight}px` }}>
    {renderRow(item)}
  </div>
);

const VirtualListContainer = ({ items, itemHeight, renderRow }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const listRef = useRef(null);
  const visibleCount = Math.ceil(window.innerHeight / itemHeight);
  const totalHeight = items.length * itemHeight;

  const handleScroll = () => {
    if (listRef.current) {
      setScrollTop(listRef.current.scrollTop);
    }
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = scrollTop;
    }
  }, [scrollTop]);

  return (
    <div
      ref={listRef}
      style={{ height: `${visibleCount * itemHeight}px`, overflowY: "scroll" }}
      onScroll={handleScroll}
    >
      <div style={{ height: `${totalHeight}px`, paddingTop: `${scrollTop}px` }}>
        {items
          .slice(
            Math.floor(scrollTop / itemHeight),
            Math.ceil((scrollTop + window.innerHeight) / itemHeight) + 1
          )
          .map((item, index) => (
            <VirtualListItem
              key={index}
              item={item}
              itemHeight={itemHeight}
              renderRow={renderRow}
            />
          ))}
      </div>
    </div>
  );
};

const VirtualList = ({ items, itemHeight, renderRow }) => (
  <VirtualListContainer items={items} itemHeight={itemHeight} renderRow={renderRow} />
);

export default VirtualList;
