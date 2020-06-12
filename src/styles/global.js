import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,400&display=swap');
   *{
     margin:0;
     padding:0;
     box-sizing:border-box;
     font-family:'Roboto',sans-serif;
   }
   body{
     background:#eee;
   }
   button
   ,input{
       outline:0;
   }
   button{
     cursor:pointer;
   }
 
`