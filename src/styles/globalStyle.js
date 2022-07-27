import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --background: #4299E1;
    --background-light: #9BCFE4;
    --text-configuration:'Fredoka One', cursive;
    --background-middle: #2B6CB0;
 
  }
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)

  html{
    @media (max-width: 1080px){
      font-size: 93.5cm; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  button{
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
   body{
    
    background-attachment: fixed !important;
  background-image: url("img/SITE_1.png") !important;
  background-position: 50% 100% !important;
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
   
   }
 `;
