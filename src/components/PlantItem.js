import { Fragment, useState } from 'react';

import Button from './formElements/Button';
import Card from './UIElements/Card';
import Modal from './UIElements/Modal';

import './PlanyItem.css';

const PlantItem = props => {
  const [cardIsShown, setCardIsShown] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showMoreHandler = () => {
    setCardIsShown(prev => (prev = !prev));
  };

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <Fragment>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header='Are you sure you want to delete this plant?'
        footerClass='plant-item__modal-actions'
        footer={
          <Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </Fragment>
        }
      ></Modal>
      <li className='plant-item'>
        <Card className='plant-item__content'>
          <Button
            className='plant-item__delete'
            size='small'
            danger
            onClick={showDeleteWarningHandler}
          >
            X
          </Button>
          <div className='plant-item__alert'>
            <svg className='svg-icon' viewBox='0 0 20 20'>
              <path
                fill='white'
                d='M10,16.513c-2.249,0-4.071-1.822-4.071-4.07c0-0.226-0.182-0.407-0.407-0.407c-0.225,0-0.407,0.182-0.407,0.407c0,2.697,2.187,4.885,4.885,4.885c0.225,0,0.407-0.183,0.407-0.407S10.225,16.513,10,16.513M10,1.044c-0.814,0-6.513,6.92-6.513,11.398c0,3.597,2.916,6.513,6.513,6.513c3.597,0,6.513-2.916,6.513-6.513C16.513,7.964,10.813,1.044,10,1.044 M10,18.141c-3.148,0-5.699-2.65-5.699-5.92C4.301,8.372,9.593,2.011,10,2.011c0.407,0,5.698,6.36,5.698,10.209C15.698,15.49,13.147,18.141,10,18.141'
              ></path>
            </svg>
          </div>
          <div className='plant-item__image'>
            <img src={props.image} alt={props.name} />
          </div>
          <div className='plant-item__info'>
            <h2>{props.name}</h2>
            <h3>{props.description}</h3>
            <Card className='plant-item__details'>
              <div className='plant-item__icon'>
                <svg className='svg-icon' viewBox='0 0 20 20'>
                  <path
                    fill='black'
                    d='M10,16.513c-2.249,0-4.071-1.822-4.071-4.07c0-0.226-0.182-0.407-0.407-0.407c-0.225,0-0.407,0.182-0.407,0.407c0,2.697,2.187,4.885,4.885,4.885c0.225,0,0.407-0.183,0.407-0.407S10.225,16.513,10,16.513M10,1.044c-0.814,0-6.513,6.92-6.513,11.398c0,3.597,2.916,6.513,6.513,6.513c3.597,0,6.513-2.916,6.513-6.513C16.513,7.964,10.813,1.044,10,1.044 M10,18.141c-3.148,0-5.699-2.65-5.699-5.92C4.301,8.372,9.593,2.011,10,2.011c0.407,0,5.698,6.36,5.698,10.209C15.698,15.49,13.147,18.141,10,18.141'
                  ></path>
                </svg>
              </div>
              <div className='plant-item__text'>
                <h4>Water</h4>
                <p>{props.water}</p>
              </div>
            </Card>
            {/* <Card className='plant-item__details'>
            <div className='plant-item__icon'></div>
            <p>{props.fertilizer}</p>
          </Card> */}

            {cardIsShown && (
              <Fragment>
                <Card className='plant-item__details'>
                  <div className='plant-item__icon'>
                    <svg className='svg-icon' viewBox='0 0 20 20'>
                      <path
                        fill='black'
                        d='M5.114,5.726c0.169,0.168,0.442,0.168,0.611,0c0.168-0.169,0.168-0.442,0-0.61L3.893,3.282c-0.168-0.168-0.442-0.168-0.61,0c-0.169,0.169-0.169,0.442,0,0.611L5.114,5.726z M3.955,10c0-0.239-0.193-0.432-0.432-0.432H0.932C0.693,9.568,0.5,9.761,0.5,10s0.193,0.432,0.432,0.432h2.591C3.761,10.432,3.955,10.239,3.955,10 M10,3.955c0.238,0,0.432-0.193,0.432-0.432v-2.59C10.432,0.693,10.238,0.5,10,0.5S9.568,0.693,9.568,0.932v2.59C9.568,3.762,9.762,3.955,10,3.955 M14.886,5.726l1.832-1.833c0.169-0.168,0.169-0.442,0-0.611c-0.169-0.168-0.442-0.168-0.61,0l-1.833,1.833c-0.169,0.168-0.169,0.441,0,0.61C14.443,5.894,14.717,5.894,14.886,5.726 M5.114,14.274l-1.832,1.833c-0.169,0.168-0.169,0.441,0,0.61c0.168,0.169,0.442,0.169,0.61,0l1.833-1.832c0.168-0.169,0.168-0.442,0-0.611C5.557,14.106,5.283,14.106,5.114,14.274 M19.068,9.568h-2.591c-0.238,0-0.433,0.193-0.433,0.432s0.194,0.432,0.433,0.432h2.591c0.238,0,0.432-0.193,0.432-0.432S19.307,9.568,19.068,9.568 M14.886,14.274c-0.169-0.168-0.442-0.168-0.611,0c-0.169,0.169-0.169,0.442,0,0.611l1.833,1.832c0.168,0.169,0.441,0.169,0.61,0s0.169-0.442,0-0.61L14.886,14.274z M10,4.818c-2.861,0-5.182,2.32-5.182,5.182c0,2.862,2.321,5.182,5.182,5.182s5.182-2.319,5.182-5.182C15.182,7.139,12.861,4.818,10,4.818M10,14.318c-2.385,0-4.318-1.934-4.318-4.318c0-2.385,1.933-4.318,4.318-4.318c2.386,0,4.318,1.933,4.318,4.318C14.318,12.385,12.386,14.318,10,14.318 M10,16.045c-0.238,0-0.432,0.193-0.432,0.433v2.591c0,0.238,0.194,0.432,0.432,0.432s0.432-0.193,0.432-0.432v-2.591C10.432,16.238,10.238,16.045,10,16.045'
                      ></path>
                    </svg>
                  </div>
                  <div className='plant-item__text'>
                    <h4>Exposition</h4>
                    <p>{props.expo}</p>
                  </div>
                </Card>
                <Card className='plant-item__details'>
                  <div className='plant-item__icon'>
                    <svg className='svg-icon' viewBox='0 0 20 20'>
                      <path
                        fill='black'
                        d='M10.867,12.751V7.4c0-0.478-0.388-0.866-0.866-0.866S9.134,6.923,9.134,7.4v5.351c-1.008,0.357-1.733,1.316-1.733,2.448c0,1.436,1.164,2.599,2.6,2.599c1.435,0,2.599-1.163,2.599-2.599C12.6,14.067,11.876,13.108,10.867,12.751 M12.6,11.739V3.068c0-1.436-1.164-2.6-2.599-2.6c-1.436,0-2.6,1.164-2.6,2.6v8.671c-1.05,0.79-1.733,2.044-1.733,3.46c0,2.393,1.939,4.332,4.333,4.332c2.392,0,4.333-1.939,4.333-4.332C14.333,13.783,13.65,12.529,12.6,11.739 M10,18.665c-1.914,0-3.466-1.552-3.466-3.466c0-1.282,0.698-2.399,1.733-2.999V3.068c0-0.957,0.776-1.733,1.733-1.733s1.733,0.776,1.733,1.733V12.2c1.035,0.6,1.732,1.717,1.732,2.999C13.466,17.113,11.914,18.665,10,18.665'
                      ></path>
                    </svg>
                  </div>
                  <div className='plant-item__text'>
                    <h4>Temperature</h4>
                    <p>{props.temperature}</p>
                  </div>
                </Card>
                <Card className='plant-item__details'>
                  <div className='plant-item__icon'>
                    <svg className='svg-icon' viewBox='0 0 20 20'>
                      <path
                        fill='black'
                        d='M9.634,10.633c0.116,0.113,0.265,0.168,0.414,0.168c0.153,0,0.308-0.06,0.422-0.177l4.015-4.111c0.229-0.235,0.225-0.608-0.009-0.836c-0.232-0.229-0.606-0.222-0.836,0.009l-3.604,3.689L6.35,5.772C6.115,5.543,5.744,5.55,5.514,5.781C5.285,6.015,5.29,6.39,5.522,6.617L9.634,10.633z'
                      ></path>
                      <path
                        fill='black'
                        d='M17.737,9.815c-0.327,0-0.592,0.265-0.592,0.591v2.903H2.855v-2.903c0-0.327-0.264-0.591-0.591-0.591c-0.327,0-0.591,0.265-0.591,0.591V13.9c0,0.328,0.264,0.592,0.591,0.592h15.473c0.327,0,0.591-0.264,0.591-0.592v-3.494C18.328,10.08,18.064,9.815,17.737,9.815z'
                      ></path>
                    </svg>
                  </div>
                  <div className='plant-item__text'>
                    <h4>Soil</h4>
                    <p>{props.soil}</p>
                  </div>
                </Card>
                <Card className='plant-item__details'>
                  <div className='plant-icon__icon'></div>
                  <div className='plant-item__text'>
                    <h4>Repoting</h4>
                    <p>{props.repoting}</p>
                  </div>
                </Card>
              </Fragment>
            )}

            {/* </CSSTransition> */}
          </div>
          <div className='plant-item__actions'>
            <Button to={`/plants/${props.id}`}>edit</Button>
            <Button inverse onClick={showMoreHandler}>
              {cardIsShown ? 'Show less' : 'Show more'}
            </Button>
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default PlantItem;
