import { useEffect, useState } from 'react';

import PlantList from '../components/plantList';

const UsersPlants = props => {
  const [loadedPlants, setLoadedPlants] = useState([]);
  const plants = props.items;
  
  useEffect(() => {
    setLoadedPlants(plants);
  }, [plants]);

  const plantDeleteHandler = deletedPlantId => {
    setLoadedPlants(prevPlant =>
      prevPlant.filter(plant => plant.id !== deletedPlantId)
    );
  };
  return <PlantList items={loadedPlants} onDeletePlant={plantDeleteHandler} />;
};

export default UsersPlants;
