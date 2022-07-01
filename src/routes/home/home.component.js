import Directory from '../../components/directory/directory.component'
import {Outlet} from 'react-router-dom'



const Home = () => {

  const categories = [
    {
    id:1,
    title: "Carrasca Z",
    imageUrl: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/290995915_10220592198226536_3693661798359621383_n.jpg?stp=cp1_dst-jpg_p403x403&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jYV4vdeCG64AX_0L2A6&_nc_ht=scontent-sea1-1.xx&oh=00_AT8wMtxBiBEnJCgy3c76erqE0rDfxnbtGgAIjXMNcsiLTg&oe=62C2DA4D"
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
      imageUrl: "https://scontent-sea1-1.xx.fbcdn.net/v/t31.18172-8/28061241_10155705260278451_3336095654921467835_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=NdBu8tCL58IAX8VOGUp&_nc_ht=scontent-sea1-1.xx&oh=00_AT-ylCrXWzrABJKJ1pMBaDVTNWRW9Mjwm6xWE3zl0Cjlrw&oe=62E49E63"
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
    <div>
        <Directory categories={categories} />
        <Outlet />
        
    </div>
    
)}

export default Home;
