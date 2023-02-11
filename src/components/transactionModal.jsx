import { Container, Modal } from "react-bootstrap";
import { TX_STATUS } from "src/utils/constants";
import "src/styles/transactionModal.css";
import { ArrowClockwise } from "react-bootstrap-icons";

export const TransactionModal = ({
  show,
  txStatus,
  modalText,
  onClose = () => null,
}) => {
  const isTxFulfilled = TX_STATUS.FULFILLED === txStatus;

  return (
    <>
      <Modal backdrop={false} show={show} dialogClassName="tx-modal">
        <Modal.Body>
          <div className="overlay-effect-container">
            <Container className="modal-container">
              <div className="modal-height content-wrapper">
                {isTxFulfilled && <div className="w-100 mb-2"></div>}

                <div dangerouslySetInnerHTML={{ __html: modalText }} />
                {TX_STATUS.PENDING === txStatus && (
                  <div className="my-4 d-flex">
                    <ArrowClockwise className="loading-animaiton" size="60" />
                  </div>
                )}

                {isTxFulfilled && <span></span>}
                <div className="mt-1">
                  {(true ||
                    TX_STATUS.REJECTED === txStatus ||
                    isTxFulfilled) && (
                    <button
                      className="button-overrides"
                      style={{ maxWidth: 150 }}
                      onClick={onClose}
                    >
                      close
                    </button>
                  )}
                </div>
              </div>
            </Container>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const onTxHash = ({ dispatch = () => null }) => {
  dispatch({
    modalText: `
    <h3 class="tx-modal-text">Waiting for transaction confirmation</h3>
    `,
  });
};

export const onPending = ({ dispatch = () => null }) => {
  dispatch({
    modalText: `
    <h3 class="tx-modal-text">Waiting for transaction Sign</h3>
    <p class="tx-modal-text tx-para">Please confrim signature in your wallet</p>
  `,
    txStatus: TX_STATUS.PENDING,
  });
};

export const onSuccess = ({ dispatch = () => null }) => {
  dispatch({
    modalText: `
    <h3 class="tx-modal-text tx-para">Transaction Successful</h3>
  `,
    txStatus: TX_STATUS.FULFILLED,
  });
};

export const onRejected = ({ dispatch = () => null, reason = null }) => {
  dispatch({
    modalText: `
    <h3 class="tx-modal-text">Failed</h3>
    <p class="tx-modal-text tx-para">${reason}</p> 
  `,
    txStatus: TX_STATUS.REJECTED,
  });
};
