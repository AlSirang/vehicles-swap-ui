import {
  onPending,
  onRejected,
  onSuccess,
  onTxHash,
  TransactionModal,
} from "components/transactionModal";
import { useReducer } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { WalletUserContext } from "src/context";
import AuthLayout from "src/layout/auth.layout";
import { TX_STATUS } from "src/utils/constants";
import {
  getContractInstance,
  parseTransactionError,
} from "src/utils/utils.dapp";

export default function RegisterVechicle() {
  const navigate = useNavigate();
  const { state } = WalletUserContext();
  const { account, signer } = state;

  const [{ modalText, txStatus }, dispatch] = useReducer(
    (state, payload) => ({ ...state, ...payload }),
    {
      modalText: null,
      txStatus: null,
    }
  );

  const onRegister = async (event) => {
    event.preventDefault();

    try {
      onPending({
        dispatch,
      });
      const data = new FormData(event.currentTarget);

      const payload = [
        0,
        account,
        data.get("make"),
        data.get("model"),
        data.get("year"),
        data.get("value"),
        data.get("VIN"),
        data.get("owner"),
        data.get("mileage"),
        data.get("exteriorColor"),
        data.get("interiorColor"),
        data.get("arrisCode"),
        data.get("roofLoad"),
        data.get("accelerationTime"),
        data.get("bodyType"),
        data.get("registered"),
        data.get("wheelConfiguration"),
        data.get("seatingCapacity"),
        data.get("steeringPosition"),
        data.get("location"),
        data.get("damage"),
      ];

      const contractInstance = getContractInstance(signer);
      const tx = await contractInstance.registerVehicle(payload);
      onTxHash({
        dispatch,
      });
      const reciept = await tx.wait();

      onSuccess({
        dispatch,
      });

      console.log(reciept);
    } catch (err) {
      console.log(err);
      const reason = parseTransactionError(err);

      onRejected({
        dispatch,
        reason,
      });
    }
  };

  const onModalClose = () => {
    const _txState = txStatus;
    dispatch({
      modalText: null,
      txStatus: null,
    });
    if (_txState === TX_STATUS.FULFILLED) navigate(`/dashboard/${account}`);
  };
  return (
    <>
      <TransactionModal
        show={Boolean(modalText)}
        txStatus={txStatus}
        modalText={modalText}
        onClose={onModalClose}
      />

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
                <Form.Control
                  type="text"
                  placeholder="Car Make"
                  name="make"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-md-6" controlId="model">
                <Form.Label>Car Model</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Car Modle"
                  name="model"
                  autoComplete="off"
                />
              </Form.Group>
            </div>

            {/********************************************************************/}
            <div className="row">
              <Form.Group className="mb-3 col-md-6" controlId="year">
                <Form.Label>Car Year</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Car Year"
                  name="year"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-md-6" controlId="registered">
                <Form.Label>Date first registered</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Car Year"
                  name="registered"
                  autoComplete="off"
                />
              </Form.Group>
            </div>
            {/********************************************************************/}
            <div className="row">
              <Form.Group className="mb-3 col-12" controlId="Location">
                <Form.Label>Car Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Car Location"
                  name="location"
                  autoComplete="off"
                />
              </Form.Group>
            </div>

            {/********************************************************************/}

            <div className="row">
              <Form.Group className="mb-3 col-md-6" controlId="value">
                <Form.Label>Estimated Value</Form.Label>
                <Form.Control
                  type="number"
                  step="any"
                  placeholder="Estimated Value"
                  name="value"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-md-6" controlId="owner">
                <Form.Label>Verified Owner</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Verified Owner"
                  name="owner"
                  autoComplete="off"
                />
              </Form.Group>
            </div>
            {/********************************************************************/}

            <div className="row">
              <Form.Group className="mb-3 col-md-6" controlId="VIN">
                <Form.Label>VIN</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="VIN"
                  name="VIN"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-md-6" controlId="mileage">
                <Form.Label>Mileage</Form.Label>
                <Form.Control
                  type="number"
                  step="any"
                  placeholder="Mileage"
                  name="mileage"
                  autoComplete="off"
                />
              </Form.Group>
            </div>
            {/********************************************************************/}

            <div className="row">
              <Form.Group className="mb-3 col-md-6" controlId="exteriorColor">
                <Form.Label>Exterior Color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Exterior Color"
                  name="exteriorColor"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-md-6" controlId="interiorColor">
                <Form.Label>Interior Color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Interior Color"
                  name="interiorColor"
                  autoComplete="off"
                />
              </Form.Group>
            </div>
            {/********************************************************************/}

            <div className="row">
              <Form.Group className="mb-3 col-md-6" controlId="arrisCode">
                <Form.Label>Arris Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Arris Code"
                  name="arrisCode"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-md-6" controlId="roofLoad">
                <Form.Label>Roof Load</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Roof Load"
                  name="roofLoad"
                  autoComplete="off"
                />
              </Form.Group>
            </div>
            {/********************************************************************/}
            <div className="row">
              <Form.Group
                className="mb-3 col-md-6"
                controlId="accelerationTime"
              >
                <Form.Label>Acceleration Time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Acceleration Time"
                  name="accelerationTime"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-md-6" controlId="bodyType">
                <Form.Label>Body type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Body type"
                  name="bodyType"
                  autoComplete="off"
                />
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
                  name="wheelConfiguration"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-md-6" controlId="damage">
                <Form.Label>Known vehicle damage</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Known vehicle damage"
                  name="damage"
                  autoComplete="off"
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
                  name="seatingCapacity"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-md-6"
                controlId="steeringPosition"
              >
                <Form.Label>Steering position</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Steering position"
                  name="steeringPosition"
                  autoComplete="off"
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
    </>
  );
}
