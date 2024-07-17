import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AddedFeatures from "./AddedFeatures";
import AdditionalFeature from "./AdditionalFeature";

const CarSales = () => {
  const cars = useSelector((state) => state.cars.cars);

  const { id } = useParams();

  const selectedCar = cars.find((car) => car.id === Number(id));

  const additionalPrice = useSelector((state) => state.cars.additionalPrice);

  const additionalFeatures = useSelector(
    (state) => state.cars.additionalFeatures
  );

  const navigate = useNavigate();

  const viewCars = () => {
    navigate("/");
  };
  return (
    <div className="car-shop">
      <div className="car-features">
        <div className="car-card-info">
          <div className="car-card sales" key={selectedCar.id}>
            <img src={selectedCar.image} alt={selectedCar.name} />
            <h2>{selectedCar.name}</h2>
            <p>Amount: ${selectedCar.price}</p>
            <h4>
              Total Amount: $
              {Number(selectedCar.price) + Number(additionalPrice)}
            </h4>
          </div>
          <div className="added-features">
            <AddedFeatures addedFeatures={selectedCar.features} />
          </div>
        </div>
        <div className="additional-features">
          <h4>Additional Features</h4>
          {additionalFeatures?.length ? (
            <ol type="1">
              {additionalFeatures.map((item) => (
                <AdditionalFeature
                  key={item.id}
                  feature={item}
                  disabled={selectedCar.features.find(
                    (feature) => feature.id === item.id
                  )}
                />
              ))}
            </ol>
          ) : (
            <p>Nice looking car!</p>
          )}
        </div>
      </div>
      <div className="view-cars">
        <button onClick={viewCars}>View Cars</button>
      </div>
    </div>
  );
};

export default CarSales;
