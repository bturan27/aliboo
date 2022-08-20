const SHOP_DATA = [
  {
    title: 'Hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/260988745_4562185537163569_5677428464463171962_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=PP8R0u6lXQ8AX_EPzuv&_nc_ht=scontent-lax3-1.xx&oh=00_AT-NAUHKHwjbzQ1iuSZtXtbsR7jQKXVZ_Kde025OD9esjA&oe=63050FB8',
        price: 25,
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.18169-9/13332773_1039660372749454_2473819327971377509_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=gMLKhXK6LuMAX9w1Kve&_nc_ht=scontent-lax3-2.xx&oh=00_AT9PY5V45k-ldebJfFgmTcgdsi5RxLS2k4jPXUc17Eh2Zg&oe=632442F5',
        price: 18,
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.18169-9/13332773_1039660372749454_2473819327971377509_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=gMLKhXK6LuMAX9w1Kve&_nc_ht=scontent-lax3-2.xx&oh=00_AT9PY5V45k-ldebJfFgmTcgdsi5RxLS2k4jPXUc17Eh2Zg&oe=632442F5',
        price: 35,
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.18169-9/13332773_1039660372749454_2473819327971377509_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=gMLKhXK6LuMAX9w1Kve&_nc_ht=scontent-lax3-2.xx&oh=00_AT9PY5V45k-ldebJfFgmTcgdsi5RxLS2k4jPXUc17Eh2Zg&oe=632442F5',
        price: 25,
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.18169-9/13332773_1039660372749454_2473819327971377509_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=gMLKhXK6LuMAX9w1Kve&_nc_ht=scontent-lax3-2.xx&oh=00_AT9PY5V45k-ldebJfFgmTcgdsi5RxLS2k4jPXUc17Eh2Zg&oe=632442F5',
        price: 18,
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.18169-9/13332773_1039660372749454_2473819327971377509_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=gMLKhXK6LuMAX9w1Kve&_nc_ht=scontent-lax3-2.xx&oh=00_AT9PY5V45k-ldebJfFgmTcgdsi5RxLS2k4jPXUc17Eh2Zg&oe=632442F5',
        price: 14,
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.18169-9/13332773_1039660372749454_2473819327971377509_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=gMLKhXK6LuMAX9w1Kve&_nc_ht=scontent-lax3-2.xx&oh=00_AT9PY5V45k-ldebJfFgmTcgdsi5RxLS2k4jPXUc17Eh2Zg&oe=632442F5',
        price: 18,
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.18169-9/13332773_1039660372749454_2473819327971377509_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=gMLKhXK6LuMAX9w1Kve&_nc_ht=scontent-lax3-2.xx&oh=00_AT9PY5V45k-ldebJfFgmTcgdsi5RxLS2k4jPXUc17Eh2Zg&oe=632442F5',
        price: 14,
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.18169-9/13332773_1039660372749454_2473819327971377509_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=gMLKhXK6LuMAX9w1Kve&_nc_ht=scontent-lax3-2.xx&oh=00_AT9PY5V45k-ldebJfFgmTcgdsi5RxLS2k4jPXUc17Eh2Zg&oe=632442F5',
        price: 16,
      },
    ],
  },
  {
    title: 'Sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.18172-8/12829004_989360961112729_5630387404099488752_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=cGJ57D44ghkAX_M6jXe&_nc_ht=scontent-lax3-1.xx&oh=00_AT_oLCpc_TuVzTCWvnYzAbfpAYASmLZXhtTaxK7-bNZkfQ&oe=63271874',
        price: 220,
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.18172-8/12829004_989360961112729_5630387404099488752_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=cGJ57D44ghkAX_M6jXe&_nc_ht=scontent-lax3-1.xx&oh=00_AT_oLCpc_TuVzTCWvnYzAbfpAYASmLZXhtTaxK7-bNZkfQ&oe=63271874',
        price: 280,
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.18172-8/12829004_989360961112729_5630387404099488752_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=cGJ57D44ghkAX_M6jXe&_nc_ht=scontent-lax3-1.xx&oh=00_AT_oLCpc_TuVzTCWvnYzAbfpAYASmLZXhtTaxK7-bNZkfQ&oe=63271874',
        price: 110,
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.18172-8/12829004_989360961112729_5630387404099488752_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=cGJ57D44ghkAX_M6jXe&_nc_ht=scontent-lax3-1.xx&oh=00_AT_oLCpc_TuVzTCWvnYzAbfpAYASmLZXhtTaxK7-bNZkfQ&oe=63271874',
        price: 160,
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160,
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160,
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190,
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: 'Jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90,
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165,
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: 'Womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25,
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20,
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80,
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80,
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135,
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: 'Mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;