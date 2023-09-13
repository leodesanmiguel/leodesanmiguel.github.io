/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { MenuList } from "./MenuList";
import { MenuItem } from "./MenuItem";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

export const MenuBar = ({ links }) => {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(true);

  console.log(links);

  return (
    <MenuList>
      {links.map(({ value, content, id, active }, index) => {
        console.log("enlace: ", value, content, id, active);
        return (
          <Fragment key={id}>
            <MenuItem href={value} isActive={isActive}>
              {content}
            </MenuItem>
          </Fragment>
        );
      })}
      {/* <MenuItem href={"/home"} isActive={isActive}>
        Home
        </MenuItem>
        <MenuItem href={"/cities"}  isActive={isActive} >Cities </MenuItem>
      <MenuItem href={"/about-us"} isActive={isActive} >About us</MenuItem> */}
    </MenuList>
  );
};

MenuBar.propTypes = {
  links: PropTypes.object,
};
