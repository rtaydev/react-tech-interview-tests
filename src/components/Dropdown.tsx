import React, { FC, useState } from "react";
import Button from "./Button";

interface IMenuItems {
  id: number;
  name: string;
  link: string;
}

const menuItems: IMenuItems[] = [
  {
    id: 1,
    name: "Menu item 1",
    link: "/menu-item-1",
  },
  {
    id: 2,
    name: "Menu item 2",
    link: "/menu-item-2",
  },
  {
    id: 3,
    name: "Menu item 3",
    link: "/menu-item-3",
  },
];

interface DropdownButtonProps {
  open: boolean;
  handleClick: () => void;
}

const DropdownMenu: FC = () => {
  return (
    <ul>
      {menuItems.map((item) => (
        <li key={item.id.toString()}>{item.name}</li>
      ))}
    </ul>
  );
};

const DropdownButton: FC<DropdownButtonProps> = ({ open, handleClick }) => {
  return (
    <Button
      variants="primary"
      onClick={handleClick}
      label={open ? "close" : "open"}
    />
  );
};

const Dropdown: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <DropdownButton
        open={open}
        handleClick={() => setOpen((prev) => !prev)}
      />
      {open ? <DropdownMenu /> : null}
    </>
  );
};

export default Dropdown;
