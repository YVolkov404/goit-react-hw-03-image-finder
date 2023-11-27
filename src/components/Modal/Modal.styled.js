import styled from 'styled-components';

export const LargeImage = styled.img`
  position: inherit;
  width: auto;
  height: auto;
  min-width: 900px;
  max-height: 85vh;
  padding: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  object-fit: cover; */
`;

export const customStyles = {
  overlay: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.25)',
  },

  content: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    padding: '0px',
    border: 'none',
    background: 'transparent',
    zIndex: '99',
    inset: '0px',
  },
};
