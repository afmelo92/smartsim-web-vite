import React from 'react';
import ReactDOM from 'react-dom';

type ReactPortalProps = {
  containerId?: string;
  children: React.ReactNode;
};

const ReactPortal: React.FC<ReactPortalProps> = ({ children, containerId = 'portal-root' }) => {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
};

export default ReactPortal;
