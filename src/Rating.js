import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";

import "./App.css";
import { useState } from "react";

Star.propType = {
  index: PropTypes.number,
  setIndex: PropTypes.func,
  full: PropTypes.bool
}

function Star({ index, setIndex, full }) {
  
  return (
      <div className="star">
        {!full && <CiStar  onMouseEnter={() => setIndex(index)}/>}
        {
          full && <FaStar className="r" onMouseEnter={() => setIndex(index)}/>
        }
      </div>
  );
}

function Rating({ count=5 }) {
  const [index, setIndex] = useState(-1);

   return (
      <div className="ratings" onMouseLeave={() => setIndex(-1)}>
        {Array.from({length: count}).map((_, i) => 
        (
          <Star 
          key={i} 
          index={i} 
          setIndex={setIndex} 
          full={i <= index}
          />
        ))}
    </div>
   );
}

export default Rating;