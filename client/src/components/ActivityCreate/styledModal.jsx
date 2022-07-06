import styled from "styled-components"

export const StyledModal = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgba(255, 255, 255, 0.2); */
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    backdrop-filter: blur(2px);
.contenedor {
    background: linear-gradient(160deg, #050505 0%, rgba(0, 0, 0, 0.49) 101%);
    border-radius: 10px;
    border: 2px solid #5e8fdb;
    padding: 20px;
    max-width: 400px;
    text-align: center;
    width: 90%;
    i {
        font-size:55px;
        color #5e8fdb;
    }
    
    .volver{
        color: #ffff;
        background-color: #333;
        border: none;
        margin: 20px;
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
}
`