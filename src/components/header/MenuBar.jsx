/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import {MenuList} from "./MenuList";
import {MenuItem} from "./MenuItem";
import {  Fragment, useState } from "react";

export const MenuBar = ({links}) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <MenuList>
      {
        links.map((link, index)=> {
          return ( 
            <Fragment key={index}>
            {console.log(`index: ${index}`)}
            </Fragment>
          )
        })
      }
      <MenuItem href={"/home"} isActive={isActive}>
        Home
      </MenuItem>
      <MenuItem href={"/cities"}  isActive={isActive} >Cities </MenuItem>
      <MenuItem href={"/about-us"} isActive={isActive} >About us</MenuItem>
    </MenuList>
  );
};

MenuBar.propTypes={
  links: PropTypes.object,
}