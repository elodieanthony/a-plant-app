import { ReactDOM } from 'react';

import './Backdrop.css';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className='backdrop' onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
