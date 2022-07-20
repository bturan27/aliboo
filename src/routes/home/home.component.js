import Directory from '../../components/directory/directory.component'
import {Outlet} from 'react-router-dom'



const Home = () => {

  const categories = [
    {
    id:1,
    title: "Carrasca Z",
    imageUrl: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/260988745_4562185537163569_5677428464463171962_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=EBLxvMODO6UAX_6yfmB&tn=Oo6z2oDmeVkwXeVz&_nc_ht=scontent-dfw5-2.xx&oh=00_AT96I03m8t_we9s9A-luDjh4WAwwT0OJiGuJ59w3TOcotg&oe=62D793F8",
    price : "",
    personalCharacter : "",
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
      imageUrl: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/125007306_3480446395337494_8968964086664094365_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=leivS4HRALgAX_by6dq&_nc_ht=scontent-dfw5-1.xx&oh=00_AT9gE5r6CFsfSyN1obLw9cq0IqfwLry6VTVy4x63bNoXUQ&oe=62F89A3D",
      price : "",
      personalCharacter : ""
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
    <div>
        <Directory categories={categories} />
        <Outlet />
{/*An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.  */}
        
    </div>
    
)}

export default Home;
