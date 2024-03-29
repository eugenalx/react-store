import styled from "styled-components";
export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    bacground-image: ${({imageUrl}) => `url(${imageUrl})`};
    @meda screen and (max-width: 792px){
        border-radius: 50px;
    }
` 

export const Body = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    border-radius: 10px;

  


    h2 {
        font-weight: bold;
        margin: 0 6px 0;
        font-size: 22px;
        color: #4a4a4a;
        text-transform: uppercase;
    }

    p {
        font-weight: lighter;
        font-size: 16px;
    }

    @media screen and (max-width: 792px){
        padding: 0 15px;
        border-radius: 10px
    }

    

`
export const DirectoryItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden; 
    border-radius: 10px;

    &:first-child {
        margin-right: 7.5px;
        }
    
    &:last-child {
        margin-left: 7.5px;
        }

    &:hover {
        cursor: pointer;
    
        & ${BackgroundImage} {
          transform: scale(1.1);
          transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    
        & ${Body} {
          opacity: 0.9;
        }
    }
    @meda screen and (max-width: 792px){
        border-radius: 50px;
    }

    

    
    `
   
  
    
    
  
    