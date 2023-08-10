import PropTypes from "prop-types";
import {MenuList} from "./MenuList";
import {MenuItem} from "./MenuItem";
import { Fragment } from "react";

export const MenuBar = ({links}) => {
  return (
    <MenuList>
      {
        links.map((link, index)=> {
          return ( 
            <Fragment key={index}>
              
            </Fragment>
          )
        })
      }
      <MenuItem href={"/home"} isActive={true}>
        Home
      </MenuItem>
      <MenuItem href={"/cities"}>Cities</MenuItem>
      <MenuItem href={"/about-us"}>About us</MenuItem>
    </MenuList>
  );
};

MenuBar.propTypes={
  links: PropTypes.object,
}