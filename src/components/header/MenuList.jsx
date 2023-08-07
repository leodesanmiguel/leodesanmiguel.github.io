import { MenuItem } from '@material-tailwind/react';
import PropTypes from 'prop-types';
export const MenuList= ({children}) => {
    return (
      <MenuItem className="py-4 text-sm font-medium bg-transparent">
        <ul className="flex  group items-center">
          {children}
        </ul>
      </MenuItem>
    )
  }
  
  MenuList.propTypes = {
    children: PropTypes.object,
  };
  
