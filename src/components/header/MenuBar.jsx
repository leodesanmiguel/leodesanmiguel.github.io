/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { MenuItem } from "./MenuItem";
import { Fragment, useState } from "react";

export const MenuBar = ({ links }) => {
  return (
    <div>
      <nav className="hidden lg:flex space-x-8  py-4 text-sm font-medium bg-transparent">
        <ul className="flex  group items-center">
          {Object.values(links).map(({ value, content, id, isActive }) => (
            <Fragment key={id}>
              <MenuItem href={value} isActive={isActive}>
                {content}
              </MenuItem>
            </Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
};

MenuBar.propTypes = {
  links: PropTypes.object,
};
