import styled from "styled-components";

export const StyledActivity = styled.div`
margin: 200px auto 30px;
padding: 40px;
display: flex;
justify-content: center;
max-width: 700px;
min-height: 550px;
width: 90%;
border-radius: 20px;
border: 2px solid #8fbfd6;
color: white;
background: #004D40; 
font-family: 'Overpass', sans-serif;
p {
    color:red;
    margin: -5px 6px;
    i {
        color: red;
    }
}
input {
    font-size: 15px;
    margin: 20px; 
    padding: 8px 10px;
    border-radius: 15px;
    border: 1px solid #8fbfd6;
    background: #b8c1c5;
    outline: none;
    width: 40%;
    }
    .submit{
        color: #ffff;
        background-color: #333;
        border: none;
        padding: 10px 15px;
        border-radius: 15%;
        transition: background-color 100ms ease, font-weight 100ms ease;;
        outline: none;
        cursor: pointer;
        margin-left: 432px;
        margin-top: 50px;
        
        &:hover{
            font-weight: bold;
            background-color: #22933f;
        }
    }
    .volver{
        color: #ffff;
        background-color: #333;
        border: none;
        padding: 10px 15px;
        border-radius: 15%;
        transition: background-color 100ms ease, font-weight 100ms ease;;
        outline: none;
        cursor: pointer;
        
        &:hover{
            font-weight: bold;
            background-color: #dd3d3d;
        }
    }
.select{
    position: relative;
    display: flex;
    width: 100%;
    height: 3em;
    line-height: 4;
    border-radius: 30px;
    
    .select::after {
        
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 1em;
        background: #e2e;
        cursor:pointer;
        pointer-events:none;
        transition:.10s all ease;
     }
     .select:hover::after {
        color: #23b499;
        
     }
    select{
        border-radius: 15px;
        flex-direccion:columm;
        background: #0e0707;
        margin:9px 10px;
        flex: 1;
        padding: 5px;
        color:#fff;
        cursor:pointer;
        font-size: 1em;
       
    }
}
`