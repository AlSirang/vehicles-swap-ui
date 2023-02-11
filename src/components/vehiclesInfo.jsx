import { Table } from "react-bootstrap";
import { PenFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { shortenAddress } from "src/utils/constants";

export default function VehicleInfo({
  wallet = "",
  vehiclesOf = [],
  clickable = false,
}) {
  return (
    <div className="mb-5">
      {wallet && <h3>Owner ({shortenAddress(wallet)})</h3>}
      <Table responsive striped bordered className="table-main">
        <thead className="table-head">
          <tr>
            <th>Car Make</th>
            <th>Car Model</th>
            <th>Car Year</th>
            <th>Car location</th>
            <th>Estimated Value</th>
            <th>VIN</th>
            <th>Verified Owner</th>
            <th>Mileage</th>
            <th>Acceleration Time</th>
            <th>Exterior Color</th>
            <th>Interior Color</th>
            <th>Arris Code</th>
            <th>Roof Load</th>
            <th>Body type</th>
            <th>Date first registered</th>
            <th>Drive Wheel configuration</th>
            <th>Known vehicle damage</th>
            <th>Seating capacity</th>
            <th>Steering position</th>

            {clickable && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {vehiclesOf.map((props) => (
            <TableRow key={props.index} {...props} clickable={clickable} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

const TableRow = (props) => {
  const {
    VIN,
    accelerationTime,
    arrisCode,
    bodyType,
    carLocation,
    driveWheelConfiguration,
    exteriorColor,
    firstRegisteredDate,
    interiorColor,
    knownDamage,
    make,
    mileage,
    model,
    roofLoad,
    seatingCapacity,
    steeringPosition,
    value,
    verifiedOwner,
    year,
    ownerOf,
    index,
    clickable,
  } = props;

  const navigate = useNavigate();
  const onRowClick = () => {
    navigate(`/vehicleInfo/${ownerOf}/${index}`);
  };
  return (
    <tr>
      <td>{make}</td>
      <td>{model}</td>
      <td>{year}</td>
      <td>{carLocation}</td>
      <td>{value}</td>
      <td>{VIN}</td>
      <td>{verifiedOwner}</td>
      <td>{mileage}</td>
      <td>{accelerationTime}</td>
      <td>{exteriorColor}</td>
      <td>{interiorColor}</td>
      <td>{arrisCode}</td>
      <td>{roofLoad}</td>
      <td>{bodyType}</td>
      <td>{firstRegisteredDate}</td>
      <td>{driveWheelConfiguration}</td>
      <td>{knownDamage}</td>
      <td>{seatingCapacity}</td>
      <td>{steeringPosition}</td>

      {clickable && (
        <th
          onClick={onRowClick}
          style={{
            cursor: "pointer",
          }}
        >
          <PenFill />
        </th>
      )}
    </tr>
  );
};
