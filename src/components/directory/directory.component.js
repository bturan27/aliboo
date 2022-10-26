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
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKR53cLrYwEpSFyxr0hAX7D_TnAHgxtjB1xA&usqp=CAU',
    route: 'shop/horse-b'
  },
  {
    id: 3,
    title: 'Horse-C',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KaJvDR9w7PSWNToEeb3CIwPtfT1c_2gN8g&usqp=CAU',
    route: 'shop/horse-c'
  },
  {
    id: 4,
    title: 'Horse-D',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7SijgG4y4Ytr38z1EE4jRlu3IRvqLl0h7g&usqp=CAU',
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