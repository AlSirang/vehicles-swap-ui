import { ethers } from "ethers";
import { Button, Form } from "react-bootstrap";
import { WalletUserContext } from "src/context";
import AuthLayout from "src/layout/auth.layout";
import { contractConfigs } from "src/utils/contract.configs";

export default function RegisterVechicle() {
  const { state } = WalletUserContext();
  const { signer } = state;

  const onRegister = (event) => {
    event.preventDefault();

    try {
      const data = new FormData(event.currentTarget);
      console.log(data);

      const contractInstance = new ethers.Contract(
        contractConfigs.abi,
        contractConfigs.address,
        signer
      );
    } catch (err) {}
  };

  return (
    <AuthLayout
      className="my-5"
      style={{
        maxWidth: 1200,
        margin: "auto",
      }}
    >
      <div>
        <Form onSubmit={onRegister}>
          <h3>Vehicle Information</h3>
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="make">
              <Form.Label>Car Make</Form.Label>
              <Form.Control type="text" placeholder="Car Make" required />
            </Form.Group>

            <Form.Group className="mb-3 col-md-6" controlId="model">
              <Form.Label>Car Model</Form.Label>
              <Form.Control type="text" placeholder="Car Modle" required />
            </Form.Group>
          </div>

          {/********************************************************************/}
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="year">
              <Form.Label>Car Year</Form.Label>
              <Form.Control type="text" placeholder="Car Year" required />
            </Form.Group>

            <Form.Group className="mb-3 col-md-6" controlId="Location">
              <Form.Label>Car Location</Form.Label>
              <Form.Control type="text" placeholder="Car Location" required />
            </Form.Group>
          </div>
          {/********************************************************************/}
          <div className="row">
            <Form.Group className="mb-3 col-12" controlId="registered">
              <Form.Label>Date first registered</Form.Label>
              <Form.Control type="date" placeholder="Car Year" required />
            </Form.Group>
          </div>

          {/********************************************************************/}

          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="value">
              <Form.Label>Estimated Value</Form.Label>
              <Form.Control
                type="text"
                placeholder="Estimated Value"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 col-md-6" controlId="owner">
              <Form.Label>Verified Owner</Form.Label>
              <Form.Control type="text" placeholder="Verified Owner" required />
            </Form.Group>
          </div>
          {/********************************************************************/}

          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="VIN">
              <Form.Label>VIN</Form.Label>
              <Form.Control type="text" placeholder="VIN" required />
            </Form.Group>

            <Form.Group className="mb-3 col-md-6" controlId="mileage">
              <Form.Label>Mileage</Form.Label>
              <Form.Control type="text" placeholder="Mileage" required />
            </Form.Group>
          </div>
          {/********************************************************************/}

          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="exteriorColor">
              <Form.Label>Exterior Color</Form.Label>
              <Form.Control type="text" placeholder="Exterior Color" required />
            </Form.Group>

            <Form.Group className="mb-3 col-md-6" controlId="interiorColor">
              <Form.Label>Interior Color</Form.Label>
              <Form.Control type="text" placeholder="Interior Color" required />
            </Form.Group>
          </div>
          {/********************************************************************/}

          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="arrisCode">
              <Form.Label>Arris Code</Form.Label>
              <Form.Control type="text" placeholder="Arris Code" required />
            </Form.Group>

            <Form.Group className="mb-3 col-md-6" controlId="roofload">
              <Form.Label>Roof Load</Form.Label>
              <Form.Control type="text" placeholder="Roof Load" required />
            </Form.Group>
          </div>
          {/********************************************************************/}
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="accelerationTime">
              <Form.Label>Acceleration Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="Acceleration Time"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 col-md-6" controlId="bodyType">
              <Form.Label>Body type</Form.Label>
              <Form.Control type="text" placeholder="Body type" required />
            </Form.Group>
          </div>
          {/********************************************************************/}
          <div className="row">
            <Form.Group
              className="mb-3 col-md-6"
              controlId="wheelConfiguration"
            >
              <Form.Label>Drive Wheel configuration</Form.Label>
              <Form.Control
                type="text"
                placeholder="Drive Wheel configuration"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 col-md-6" controlId="damage">
              <Form.Label>Known vehicle damage</Form.Label>
              <Form.Control
                type="text"
                placeholder="Known vehicle damage"
                required
              />
            </Form.Group>
          </div>
          {/********************************************************************/}
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="seatingCapacity">
              <Form.Label>Seating capacity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Seating capacity"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 col-md-6" controlId="steeringPosition">
              <Form.Label>Steering position</Form.Label>
              <Form.Control
                type="text"
                placeholder="Steering position"
                required
              />
            </Form.Group>
          </div>
          {/********************************************************************/}

          <Button
            variant="outline-dark"
            style={{ minWidth: 200 }}
            className="mt-4"
            type="submit"
          >
            Register
          </Button>
        </Form>
      </div>
    </AuthLayout>
  );
}
