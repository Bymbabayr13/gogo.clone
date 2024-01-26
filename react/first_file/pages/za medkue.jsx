import { Counter } from "../components/OtherFile/Counter";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => Array(length).fill(null);

const Test = () => {
  return <StarRating totalStars={5} />;
};

const StarRating = (props) => {
  const [selectedStars, setSelectedStars] = useState(0);
  const { totalStars } = props;
  const stars = createArray(totalStars);

  const onSelect = (selectedIndex) => {
    setSelectedStars(selectedIndex + 1);
  };

  return (
    <div className="flex">
      {stars.map((_, index) => {
        return (
          <Star
            key={index}
            selected={selectedStars > index}
            onSelect={() => onSelect(index)}
          />
        );
      })}
    </div>
  );
};

const Star = (props) => {
  const { selected, onSelect } = props;

  const color = selected ? "#fcba03" : "grey";

  return (
    <FaStar
      onClick={onSelect}
      color={color}
      style={{
        cursor: "pointer",
      }}
    />
  );
};
