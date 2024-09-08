import React, { memo, useCallback, useMemo, useState } from "react";

interface ICounterListItems {
  id: number;
  name: string;
  count: number;
}

const initialList = [
  { id: new Date().getMilliseconds(), name: "Item 1", count: 0 },
  { id: new Date().getMilliseconds() + 1, name: "Item 2", count: 0 },
  { id: new Date().getMilliseconds() + 2, name: "Item 3", count: 0 },
  { id: new Date().getMilliseconds() + 3, name: "Item 4", count: 0 },
];

const CounterListItem: React.FC<{
  name: string;
  onClick: () => void;
}> = memo(({ name, onClick }) => {
  return (
    <li>
      <button onClick={onClick}>{name}</button>
    </li>
  );
});

const CounterList: React.FC = () => {
  const [list, setList] = useState<ICounterListItems[]>(initialList);

  const handleListItemIncrement = useCallback((item: ICounterListItems) => {
    setList((prevList) =>
      prevList.map((listItem) =>
        listItem.id === item.id
          ? { ...listItem, count: listItem.count + 1 }
          : listItem,
      ),
    );
  }, []);

  const totalCount = useMemo(
    () => list.reduce((total, item) => total + item.count, 0),
    [list],
  );

  return (
    <div>
      {list.map((item) => (
        <CounterListItem
          key={item.id.toString()}
          name={item.name}
          onClick={() => handleListItemIncrement(item)}
        />
      ))}
      <div>
        <span>Total count: {totalCount}</span>
      </div>
    </div>
  );
};

export default CounterList;
