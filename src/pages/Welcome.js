import Button from '../components/UIElements/Button';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className='welcome-page'>
      <h1>Welcome on a Plant App! </h1>
      <p>In here you can collect and reference all the plants you own.</p>
      <p>And more!</p>
      <p>Don't hesitate to join us by</p>
      <div className='align-content'>
        <Button inverse>Subscribe</Button>
        <p>Or</p>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Welcome;
