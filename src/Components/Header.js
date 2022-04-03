import styled from "styled-components";
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';

const Container = styled.div`
    background: #fff;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 30px;
    max-width: 500px;
    display: flex;
    flex-direction: space-between;
    align-items: center;
    justify-content: center;   
  `;



const Header = () => {
  return (
    <Container>
        <img src="https://www.codester.com/static/uploads/items/000/017/17176/preview-xl.jpg" height="60vh" width="50%" style={{borderRadius:"50%", marginRight:"auto", cursor:"pointer"}} alt=""/>
        <FilterListOutlinedIcon style={{marginLeft:"auto",fontSize: 60, color:"grey", cursor:"pointer"}} />
    </Container>  
    );
}

export default Header;