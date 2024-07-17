import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addFeature } from "./Redux/Actions/carActions";

const AdditionalFeature = (props) => {
  const { feature } = props;

  const { id: carId } = useParams();

  const dispatch = useDispatch();

  const { disabled } = props;

  const addFeatures = (feature) => {
    dispatch(addFeature({ feature, carId }));
  };

  return (
    <li>
      <button
        onClick={() => addFeatures(feature)}
        disabled={disabled}
        className="button"
      >
        {disabled ? "Added" : "Add"}
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
