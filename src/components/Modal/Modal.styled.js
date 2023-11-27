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
`;

export const className = {
  ReactModal__Overlay: {
    position: 'absolute',
    overflow: 'auto',
    padding: '0px',
    border: 'none',
    background: 'transparent',
    zIndex: '99',
    inset: '0px',
  },
};

export const overlayClassName = {
  ReactModal__Overlay: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0',
    bottom: '0',
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.25)',
    opacity: '1',
    transition: `opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
  },

  'ReactModal__Overlay--after-open': {
    opacity: '0',
  },

  'ReactModal__Overlay--before-close': {
    opacity: '1',
  },
};
