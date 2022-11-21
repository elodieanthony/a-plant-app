import PlantItem from './PlantItem';
import './PlantList.css';

const PlantList = props => {
  return (
    <ul className='plant-list'>
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
      <span className='plant-item break'></span>
      <span className='plant-item break'></span>
    </ul>
  );
};

export default PlantList;
