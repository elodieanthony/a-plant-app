import './Button.css';

const Button = props => {
  return (
    <button
      type='button'
      className={`button button--${props.size || 'default'} ${
        props.inverse && 'button--inverse'
      } ${props.danger && 'button--danger'}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
