import React from 'react';
import ReactModal from 'react-modal';

interface IModal {
  children: React.ReactNode;
  isModalOpen: boolean;
}

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Modal: React.FC<IModal> = (props) => {
  const { children, isModalOpen } = props;

  return (
    <ReactModal
      isOpen={ isModalOpen }
      contentLabel='Example Modal'
      shouldCloseOnEsc={ true }
      shouldCloseOnOverlayClick={ true }
      style={ modalStyles }
      ariaHideApp={ false }
    >
      { children }
    </ReactModal>
  );
};

export default Modal;
