import ReactModal from 'react-modal';
import { LargeImage, customStyles } from './Modal.styled';

ReactModal.setAppElement('#root');

export const Modal = ({ largeImageURL, closeModal, modalIsOpen }) => {
  return (
    <ReactModal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <LargeImage src={largeImageURL} />
    </ReactModal>
  );
};
