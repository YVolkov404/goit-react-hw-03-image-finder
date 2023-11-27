import ReactModal from 'react-modal';
import { LargeImage, className, overlayClassName } from './Modal.styled';

ReactModal.setAppElement('#root');

export const Modal = ({ largeImageURL, closeModal, modalIsOpen }) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={className}
      overlayClassName={overlayClassName}
      shouldCloseOnOverlayClick={true}
    >
      <LargeImage src={largeImageURL} />
    </ReactModal>
  );
};
