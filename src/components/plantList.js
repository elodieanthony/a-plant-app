import Masonry from 'react-masonry-css';

import PlantItem from './PlantItem';

import './PlantList.css';

const PlantList = props => {
  const breakpointColumnsObj = {
    default: 3,
    800: 2,
    500: 1,
  };
  return (
    <ul className='plant-list'>
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
          />
        ))}
      </Masonry>
    </ul>
  );
};

export default PlantList;
