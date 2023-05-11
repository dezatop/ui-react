import { HiOutlineX } from 'react-icons/hi';
import { createPortal } from 'react-dom';

import st from './index.module.scss';

const RModal = ({ children, open, onClose }) => {
  if (!open) {
    return;
  }

  const stopPropagationClick = (e) => {
    e.stopPropagation();
  };

  return createPortal(
    <div onClick={onClose} className={st.overlay}>
      <div onClick={stopPropagationClick} className={st.modal}>
        <div onClick={onClose} className={st.close}>
          <HiOutlineX />
        </div>
        <div className={st.content}>{children}</div>
      </div>
    </div>,
    document.querySelector('#root-modal')
  );
};

export default RModal;
