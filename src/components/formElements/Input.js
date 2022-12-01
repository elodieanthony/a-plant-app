import { useEffect, useReducer } from 'react';

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
  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

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

  let element;
  switch (props.element) {
    case 'input':
      element = (
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        ></input>
      );
      break;
    case 'dropdown':
      element = (
        <select
          id={props.id}
          type={props.type}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        >
          <option value='initial'>Please choose</option>
          {props.options.map(option => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      );

      break;
    case 'radio-group':
      element = props.options.map(option => (
        <div className='radio-group' key={option.id} value={inputState.value}>
          <input
            id={option.id}
            type='radio'
            onChange={changeHandler}
            onBlur={touchHandler}
            name={props.name}
            value={option.value}
          ></input>
          <label htmlFor={inputState.value}>{option.label}</label>
        </div>
      ));
      break;
    default:
      element = (
        <textarea
          id={props.id}
          row={props.row || 3}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        ></textarea>
      );
  }

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
