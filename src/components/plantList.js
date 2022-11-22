import { useState } from 'react';
import Masonry from 'react-masonry-css';
import Button from './formElements/Button';
import Card from './UIElements/Card';

import PlantItem from './PlantItem';

import './PlantList.css';

const PlantList = props => {
  const breakpointColumnsObj = {
    default: 3,
    800: 2,
    500: 1,
  };

  const [filterIsShown, setFIlterIsShown] = useState(false);

  const toggleFilterHandler = () => {
    setFIlterIsShown(prevState => !prevState);
  };

  const getButtonNameRef = () => {};
  const getButtonAlertRef = () => {};

  if (props.items.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2>No plant registered. Maybe create one?</h2>
          <Button to='/plants/new'>Add Plants</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className='plant-list'>
      <div className='filter'>
        <div className='filter__head'>
          <p>Filter by</p>
          <Button size='small' inverse onClick={toggleFilterHandler}>
            Type
          </Button>
        </div>
        {filterIsShown && (
          <div className='filter__buttons'>
            <Button size='small' inverse onClick={getButtonNameRef}>
              Name
            </Button>
            <Button size='small' inverse onClick={getButtonAlertRef}>
              Alert
            </Button>
          </div>
        )}
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='grid'
        columnClassName='column'
      >
        {props.items.map(plant => (
          <PlantItem
            key={plant.id}
            id={plant.id}
            image={plant.image}
            name={plant.name}
            description={plant.description}
            water={plant.water}
            fertilizer={plant.fertilizer}
            expo={plant.expo}
            soil={plant.soil}
            temperature={plant.temperature}
            repoting={plant.repoting}
            onDelete={props.onDeletePlant}
          />
        ))}
      </Masonry>
    </ul>
  );
};

export default PlantList;
