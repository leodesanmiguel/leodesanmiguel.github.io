import { Rating } from "@material-tailwind/react";
import PropTypes from 'prop-types';

export const  RatingRO = ({raiting=0})=> {
  return <Rating value={raiting} readonly />;
}


RatingRO.propTypes = {
  raiting: PropTypes.number,
}
