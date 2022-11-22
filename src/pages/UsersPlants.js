import { useEffect, useMemo, useState } from 'react';

import PlantList from '../components/plantList';

const UsersPlants = () => {
  const DUMMY_PLANTS = useMemo(
    () => [
      {
        id: 'id0',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/BasilikumGenovesergro%C3%9Fbl%C3%A4ttriger.jpg/1185px-BasilikumGenovesergro%C3%9Fbl%C3%A4ttriger.jpg?uselang=fr',
        name: 'Aneth',
        description: 'It smell good and it is tasty!',
        water: 'Water each time the soil is dry',
        fertilizer: '',
        expo: 'sunny',
        temperature: '20°',
        soil: 'light, drain and rich',
        repoting: 'Annual plant',
      },
      {
        id: 'id1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/BasilikumGenovesergro%C3%9Fbl%C3%A4ttriger.jpg/1185px-BasilikumGenovesergro%C3%9Fbl%C3%A4ttriger.jpg?uselang=fr',
        name: 'Thym',
        description: 'It smell good and it is tasty!',
        water: 'Water each time the soil is dry',
        fertilizer: '',
        expo: 'sunny',
        temperature: '20°',
        soil: 'light, drain and rich',
        repoting: 'Annual plant',
        type: 'herb',
      },
      {
        id: 'id2',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/BasilikumGenovesergro%C3%9Fbl%C3%A4ttriger.jpg/1185px-BasilikumGenovesergro%C3%9Fbl%C3%A4ttriger.jpg?uselang=fr',
        name: 'Basilic',
        description: 'It smell good and it is tasty!',
        water: 'Water each time the soil is dry',
        fertilizer: '',
        expo: 'sunny',
        temperature: '20°',
        soil: 'light, drain and rich',
        repoting: 'Annual plant',
        type: 'herb',
      },
      {
        id: 'id3',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/BasilikumGenovesergro%C3%9Fbl%C3%A4ttriger.jpg/1185px-BasilikumGenovesergro%C3%9Fbl%C3%A4ttriger.jpg?uselang=fr',
        name: 'Persil',
        description: 'It smell good and it is tasty!',
        water: 'Water each time the soil is dry',
        fertilizer: '',
        expo: 'sunny',
        temperature: '20°',
        soil: 'light, drain and rich',
        repoting: 'Annual plant',
        type: 'herb',
      },
    ],
    []
  );

  const [loadedPlants, setLoadedPlants] = useState([]);

  useEffect(() => {
    setLoadedPlants(DUMMY_PLANTS);
  }, [DUMMY_PLANTS]);

  const plantDeleteHandler = deletedPlantId => {
    setLoadedPlants(prevPlant =>
      prevPlant.filter(plant => plant.id !== deletedPlantId)
    );
  };
  return <PlantList items={loadedPlants} onDeletePlant={plantDeleteHandler} />;
};

export default UsersPlants;
