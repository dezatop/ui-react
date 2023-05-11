import st from './index.module.scss';

const RButton = ({ children, ...rest }) => {
  return (
    <button {...rest} className={st.wp}>
      {children}
    </button>
  );
};

export default RButton;
