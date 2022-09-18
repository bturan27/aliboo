import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';
const categories = [
  {
    id: 1,
    title: 'Name',
    imageUrl: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/267130306_4619482618100527_2878475205334164258_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZzLSxYYguYMAX8rvl3C&tn=Oo6z2oDmeVkwXeVz&_nc_ht=scontent-sea1-1.xx&oh=00_AT-4Rfnvd5YqAwEslfmnwXFbWki7Rs8Fz1fhmQTaYoMQhQ&oe=632D69DE',
    route: 'shop/hats'
  },
  {
    id: 2,
    title: 'Name',
    imageUrl: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/267130306_4619482618100527_2878475205334164258_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZzLSxYYguYMAX8rvl3C&tn=Oo6z2oDmeVkwXeVz&_nc_ht=scontent-sea1-1.xx&oh=00_AT-4Rfnvd5YqAwEslfmnwXFbWki7Rs8Fz1fhmQTaYoMQhQ&oe=632D69DE',
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: 'name',
    imageUrl: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/267130306_4619482618100527_2878475205334164258_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZzLSxYYguYMAX8rvl3C&tn=Oo6z2oDmeVkwXeVz&_nc_ht=scontent-sea1-1.xx&oh=00_AT-4Rfnvd5YqAwEslfmnwXFbWki7Rs8Fz1fhmQTaYoMQhQ&oe=632D69DE',
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: 'name',
    imageUrl: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/267130306_4619482618100527_2878475205334164258_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZzLSxYYguYMAX8rvl3C&tn=Oo6z2oDmeVkwXeVz&_nc_ht=scontent-sea1-1.xx&oh=00_AT-4Rfnvd5YqAwEslfmnwXFbWki7Rs8Fz1fhmQTaYoMQhQ&oe=632D69DE',
    route: 'shop/womens'
  },
  {
    id: 5,
    title: 'name',
    imageUrl: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/267130306_4619482618100527_2878475205334164258_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZzLSxYYguYMAX8rvl3C&tn=Oo6z2oDmeVkwXeVz&_nc_ht=scontent-sea1-1.xx&oh=00_AT-4Rfnvd5YqAwEslfmnwXFbWki7Rs8Fz1fhmQTaYoMQhQ&oe=632D69DE',
    route: 'shop/mens'
  },
];
const Directory = () => {
  
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;