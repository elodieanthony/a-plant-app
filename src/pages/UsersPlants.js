import PlantList from '../components/plantList';

const UsersPlants = () => {
  const DUMMY_PLANTS = [
    {
      id: Math.floor(Math.random() * 3),
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
    },
    {
      id: Math.floor(Math.random() * 3),
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
      id: Math.floor(Math.random() * 3),
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
      id: Math.floor(Math.random() * 3),
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
  ];

  return <PlantList items={DUMMY_PLANTS} />;
};

export default UsersPlants;
