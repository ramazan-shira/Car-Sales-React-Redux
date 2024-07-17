import AddedFeature from "./AddedFeature";
import "./style.css";

const AddedFeatures = (props) => {
  const { addedFeatures } = props;

  return (
    <>
      <h2>Added features:</h2>
      {addedFeatures?.length > 0 ? (
        <ol type="1">
          {addedFeatures.map((feature) => (
            <AddedFeature key={feature.id} feature={feature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </>
  );
};

export default AddedFeatures;
