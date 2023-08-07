import {MenuList} from "./MenuList";
import {MenuItem} from "./MenuItem";

export const MenuBar = () => {
  return (
    <MenuList>
      <MenuItem href={"/home"} isActive={true}>
        Home
      </MenuItem>
      <MenuItem href={"/cities"}>Cities</MenuItem>
      <MenuItem href={"/about-me"}>About me</MenuItem>
    </MenuList>
  );
};

