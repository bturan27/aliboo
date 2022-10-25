import styled from 'styled-components';


export const BackgroundImage = styled.div`
  width:100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  backgroung-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
height: 100px;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
border-radius: 30px;
background-color: gray;
position: absolute;


h2 {
font-weight:bold ;
margin: 0 6px 0;
font-size: 24px;
color: #E6E6FA
text-transform:uppercase;
}

p {
color:#871F78;
font-weight: lighter;
font-size: 16px;
}
`

export const DirectoryItemContainer = styled.div`
min-width: 30%;
height: 340px;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid purple;
border-radius: 30px;
margin: 0 7.5px 15px;
overflow: hidden;

&:hover {
  cursor: pointer;

${BackgroundImage} {
transform: scale(1.1);
transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}

& ${Body} {
  opacity: 0.9;
  }
}

&:first-child {
  margin-right: 7.5px;
  }
  
  &:last-child {
  margin-left: 7.5px;
  }
`



