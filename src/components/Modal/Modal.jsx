import ReactModal from 'react-modal';
import { LargeImage, customStyles } from './Modal.styled';

ReactModal.setAppElement('#root');

export const Modal = ({ largeImageURL, closeModal, modalIsOpen }) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
    >
      <LargeImage src={largeImageURL} />
    </ReactModal>
  );
};
