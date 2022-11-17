import { useReducer } from 'react';

import { validate } from '../../util/validators';

import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH':
      return {
        ...state,
        isTouch: true,
      };
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouch: false,
    isValid: props.initialValid || false,
  });

  //   const { id } = props;
  const { value, isValid } = inputState;

  //   onInput(id, value, isValid);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      ></input>
    ) : (
      <textarea
        id={props.id}
        row={props.row || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      ></textarea>
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouch ? 'form-control--invalid' : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouch && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
