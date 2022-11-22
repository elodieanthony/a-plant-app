import Button from '../formElements/Button';
import Modal from './Modal';

const ErrorModal = props => {
  <Modal
    onCancel={props.onClear}
    header='An error occured!'
    show={!!props.error}
    footer={<Button onClick={props.onClear}>Okay</Button>}
  >
    <p>props.error</p>
  </Modal>;
};

export default ErrorModal;
