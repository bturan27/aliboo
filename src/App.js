import Directory from './components/directory/directory.component';



const App = () => {

  const categories = [
    {
    id:1,
    title: "Carrasca Z",
    imageUrl: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/283935091_10221731598420000_6934398400253204440_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gO2x_gpdTpgAX-eBa5A&_nc_ht=scontent-lax3-1.xx&oh=00_AT8R5HPyULzfYzBoaIR5iRW8Clj22E-3nzDrRnPsc4Przw&oe=62B64E35"
    // price : "",
    // personalCharacter : "",
    },
    {
      id:2,
      title: "Levistoff Z",
      imageUrl:"https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/71005959_10157245591913451_4951529519086305280_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ue_0po8BDb4AX_xWoGk&_nc_oc=AQncZmecdKevftRHmOmW4wR2_8dEm-kRpb_-BKlDBKOkHs9TH0uhOXaopfVX_bo7kQE&_nc_ht=scontent-lax3-2.xx&oh=00_AT9yw3J5LUjwEMYjNrnx1zikTMiVFEV3szjW124sQUOHmA&oe=62D6D584"
      // price : "",
      // personalCharacter : "",
    },
    {
      id:3,
      title: "Thor Z",
      imageUrl:"https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/37161468_10215749732030211_1793595767491919872_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=wqTn2D6x3b4AX_ef1Gn&_nc_ht=scontent-lax3-2.xx&oh=00_AT_iRCHfoJPM7Cv3qxmk37LMJ2Ah6uoTaMyxong_uZkkQQ&oe=62D865B2"
      // price : "",
      // personalCharacter : "",
    },
    {
      id:4,
      title: "Blue Z",
      imageUrl: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/289019647_10160036875543688_4410728059343738523_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=l55ZBIiZALsAX_WSZLG&_nc_ht=scontent-lax3-1.xx&oh=00_AT_5UKqAHR66Ip1iKfRfqmvb0vOb20bhsGDxt7dAIoju9g&oe=62B7517A"
      // price : "",
      // personalCharacter : ""
    },
    {
      id:5,
      title: "Loretta Z",
      imageUrl:"https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/118766396_10222108061224263_8743581715493119984_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=lV3QWj2Sc-EAX-R8TlN&_nc_ht=scontent-lax3-2.xx&oh=00_AT_XvXRmTJd_deJ2DHIV-zJF4Cryqo3rQ9WkiqOk7rmwFw&oe=62D7E156"
      // price : "",
      // personalCharacter : "",
    },
  ]
  return (
    <Directory categories={categories} />
  )}

export default App;
