import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Horse-A',
    imageUrl: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/260988745_4562185537163569_5677428464463171962_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=VHPh_jS1JyQAX87Nq0m&tn=Oo6z2oDmeVkwXeVz&_nc_ht=scontent-sea1-1.xx&oh=00_AT-19tzOWSz6V1qW5t1A0jwEYNVRK-F5hIhRZnVU9Tqa2Q&oe=632C9CB8',
    route: 'shop/hats'
  },
  {
    id: 2,
    title: 'Horse-B',
    imageUrl: 'https://nationaltoday.com/wp-content/uploads/2020/12/National-Horse-Day-1.jpg',
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: 'Horse-C',
    imageUrl: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/267130306_4619482618100527_2878475205334164258_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZzLSxYYguYMAX8rvl3C&tn=Oo6z2oDmeVkwXeVz&_nc_ht=scontent-sea1-1.xx&oh=00_AT-4Rfnvd5YqAwEslfmnwXFbWki7Rs8Fz1fhmQTaYoMQhQ&oe=632D69DE',
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: 'Horse-D',
    imageUrl: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/267130306_4619482618100527_2878475205334164258_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZzLSxYYguYMAX8rvl3C&tn=Oo6z2oDmeVkwXeVz&_nc_ht=scontent-sea1-1.xx&oh=00_AT-4Rfnvd5YqAwEslfmnwXFbWki7Rs8Fz1fhmQTaYoMQhQ&oe=632D69DE',
    route: 'shop/womens'
  },
  {
    id: 5,
    title: 'Horse-E',
    imageUrl: 'https://nationaltoday.com/wp-content/uploads/2020/12/National-Horse-Day-1.jpg',
    route: 'shop/mens'
  },
];
const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;