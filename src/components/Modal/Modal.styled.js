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
  object-fit: cover;
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
    width: '100vw',
    height: '100vh',
    padding: '0px',
    border: 'none',
    background: 'transparent',
    zIndex: '999',
    inset: '0px',
  },
};
