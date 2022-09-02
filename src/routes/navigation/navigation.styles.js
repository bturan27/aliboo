import styled from 'styled-components';

import {Link} from "react-router-dom"

export const NavigationContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 10%;
  width: 70px;
  padding: 25px;
`
export const Logo = styled.img`
width: 100px;
border-radius: 50%;
padding-bottom: 50px;
margin: 15px;
margin-left:50px;
position: absolute;
left: 0px;
top: 0px;
z-index: -1;
`

// `
// // export const Image = styled.img`
// width: 100px;
// border-radius: 50%;
// padding-bottom: 50px;
// margin: 15px;
// margin-left:50px;
// `

export const NavLinks = styled.div `
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`
export const NavLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`

export const Head = styled.h1`
color: purple;
align-items: center;
position: inherit;
justify-content: center;
`

export const Marquee = styled.marquee`
color: purple;
`

// .navigation {
//     height: 70px;
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 25px;
  
//     .logo-container {
//       height: 10%;
//       width: 70px;
//       padding: 25px;
  

//     }
//     .horsepic {
//   width: 100px;
//   border-radius: 50%;
//   padding-bottom: 50px;
//   margin: 15px;
//   margin-left:50px;

// }
// marquee{
//   color: purple;
// }
// img {
//   position: absolute;
//   left: 0px;
//   top: 0px;
//   z-index: -1;
// }
//   h2 {
//     color: purple;
//     align-items: center;
//     position: inherit;
//     justify-content: center;
   
    
//   }
//     .nav-links-container {
//       width: 50%;
//       height: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: flex-end;
  
//       .nav-link {
//         padding: 10px 15px;
//         cursor: pointer;
//       }
//     }
//   }
  