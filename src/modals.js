import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle
} from 'react-bootstrap';
import { closeModal } from './actions/actions';
import { connect } from 'react-redux';
import { getModals } from './selectors';

const Modals = ({ modals, close }) => {
  let modalstack = modals.map((m, i) => {
    let handleClose = close;
    if (m.onClose) {
      handleClose = () => {
        close();
        m.onClose();
      };
    }
    return (
      <Modal show={true} onHide={handleClose} key={i}>
        <ModalHeader closeButton>
          <ModalTitle>
            {m.type}
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          {m.message}
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  });
  return (
    <div>
      {modalstack}
    </div>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    close: () => {
      dispatch(closeModal());
      if (ownProps.onClose) {
        ownProps.onClose();
      }
    }
  };
};

const mapStateToProps = state => {
  return {
    modals: getModals(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
