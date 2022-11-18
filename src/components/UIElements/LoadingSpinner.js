import './LoadingSpinner.css';

const LoadingSpinner = props => {
  return (
    <div className={`${props.overlay && 'loading-spinner__overlay'}`}>
      <div className='dual-ring'></div>
    </div>
  );
};

export default LoadingSpinner;
