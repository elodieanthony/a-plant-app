import './Input.css';

const Input = props => {
  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
      ></input>
    ) : (
      <textarea id={props.id} row={props.row || 3}></textarea>
    );

  return (
    <div className='form-control'>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
