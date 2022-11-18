import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => {
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || 'default'} ${
          props.inverse && 'button--inverse'
        } ${props.danger && 'button--danger'}`}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      className={`button button--${props.size || 'default'} ${
        props.inverse && 'button--inverse'
      } ${props.danger && 'button--danger'}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
