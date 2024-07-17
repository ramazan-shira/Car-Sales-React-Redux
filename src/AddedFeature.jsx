import { useDispatch } from "react-redux";
import { deleteFeature } from "./Redux/Actions/carActions";
import { useParams } from "react-router-dom";

const AddedFeature = (props) => {
  const { feature } = props;

  const { id: carId } = useParams();
  const dispatch = useDispatch();

  const removeFeature = (id) => {
    dispatch(deleteFeature({ id, carId }));
  };
  return (
    <div>
      <li>
        <button className="button" onClick={() => removeFeature(feature.id)}>
          X
        </button>
        {feature.name}
      </li>
    </div>
  );
};

export default AddedFeature;
