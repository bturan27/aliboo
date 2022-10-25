import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';


const categories = [
  {
    id: 1,
    title: 'Horse-A',
    imageUrl:'https://nationaltoday.com/wp-content/uploads/2020/12/National-Horse-Day-1.jpg' ,
    route: 'shop/horse-a'
  },
  {
    id: 2,
    title: 'Horse-B',
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnationaltoday.com%2Fnational-horse-day%2F&psig=AOvVaw1x-UDG7AjFeiTGAgcM_Qau&ust=1666796460211000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKC40-nS-_oCFQAAAAAdAAAAABAHhttps://nationaltoday.com/wp-content/uploads/2020/12/National-Horse-Day-1.jpg',
    route: 'shop/horse-b'
  },
  {
    id: 3,
    title: 'Horse-C',
    imageUrl: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/267130306_4619482618100527_2878475205334164258_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZzLSxYYguYMAX8rvl3C&tn=Oo6z2oDmeVkwXeVz&_nc_ht=scontent-sea1-1.xx&oh=00_AT-4Rfnvd5YqAwEslfmnwXFbWki7Rs8Fz1fhmQTaYoMQhQ&oe=632D69DE',
    route: 'shop/horse-c'
  },
  {
    id: 4,
    title: 'Horse-D',
    imageUrl: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/267130306_4619482618100527_2878475205334164258_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZzLSxYYguYMAX8rvl3C&tn=Oo6z2oDmeVkwXeVz&_nc_ht=scontent-sea1-1.xx&oh=00_AT-4Rfnvd5YqAwEslfmnwXFbWki7Rs8Fz1fhmQTaYoMQhQ&oe=632D69DE',
    route: 'shop/horse-d'
  },
  {
    id: 5,
    title: 'Horse-E',
    imageUrl: 'https://nationaltoday.com/wp-content/uploads/2020/12/National-Horse-Day-1.jpg',
    route: 'shop/horse-e'
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