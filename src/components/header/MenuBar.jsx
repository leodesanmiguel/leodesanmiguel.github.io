/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { MenuList } from "./MenuList";
import { MenuItem } from "./MenuItem";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

export const MenuBar = ({ links }) => {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(true);

  const linkArray = Object.values(links);
  console.log(linkArray);
  return (
    <div>
      <nav className="hidden lg:flex space-x-8   py-4 text-sm font-medium bg-transparent">
        {linkArray.map(({ value, content, id, isActive }, index) => (
          <Fragment key={id}>
            <MenuItem href={value} isActive={true}>
              {content}
            </MenuItem>
          </Fragment>
        ))}
      </nav>
    </div>
  );
};

MenuBar.propTypes = {
  links: PropTypes.object,
};
