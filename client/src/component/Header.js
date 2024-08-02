import React, {useEffect, useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import logo from "../images/Logo.png"
import tabicon from "../images/tabicon-14.png"

const Header = () => {
const navigate  = useNavigate()
const [colorChange, setColorchange] = useState(false);
const data = JSON.parse(localStorage.getItem("nftuser"))

const changeNavbarColor = () =>{
  if(window.scrollY >= 80){
    setColorchange(true);
  }
  else{
    setColorchange(false);
  }
};
     window.addEventListener('scroll', changeNavbarColor);


const logoutuser = () => {
  localStorage.removeItem("nftuser");
  navigate("/register");
};

  return (   <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <div className='container-fluid topheader desktop-nav fixed-top'>
        <div className='container'>
         <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="" to = "/">
                    <img src={logo}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-menu">
                    <li className="nav-item" to="/">                    
                       <Link  to="BuyDuelCard" className="nav-link" aria-current="page">Buy Duel Card</Link>
                    </li>    
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/Marketplace" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Marketplace
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li>
                          <Link to="Marketplace" className="dropdown-item">Marketplace</Link>
                          </li> 
                          <li>
                            <Link to="Auction" className="dropdown-item">Auction Your Cards</Link>
                          </li>
                          <li>
                          <Link to="Leaderboard" className="dropdown-item">Leaderboards</Link>
                          </li>     
                        </ul>
                      </li>    
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/DuelSomeone" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Duel Someone
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li>
                          <Link to="/DuelSomeone" className="dropdown-item">Duel Someone</Link>
                          </li> 
                          <li>
                            <Link to="/DuelReceived" className="dropdown-item">Duel Received</Link>
                          </li>
                          <li>
                            <Link to="/duelstatus" className="dropdown-item">Duel Status</Link>
                          </li>     
                        </ul>
                      </li>    
                 
                      <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/AboutRules" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Challenge System
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li>
                          <Link to="/Pathtolevel" className="dropdown-item">Path To Level 4</Link>
                          </li> 
                          <li>
                            <Link to="/Duelsystem" className="dropdown-item">Duel System</Link>
                          </li>                             
                        </ul>
                    </li> 
                    <li className="nav-item" onClick={()=>navigate("/ICOInformation")} to='/ICOInformation'>                                        
                    <Link  to="/ICOInformation" className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Duel Coins Info</Link>
                    </li>                                                    
                     
                </ul>
                <form style={{position:"relative",right:"10%"}} className="d-flex">  
                {
                    localStorage.getItem("nftuser")?
                    <div style = {{position:"relative"}}>
                         <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/AboutRules" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src = {tabicon} alt = "profileimage"/>
                        </Link>
                        <ul style={{backgroundColor:"#3C2485",textAlign:"center"}} className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li>
                        <button style={{padding:"5px 8px",marginBottom:"10px",backgroundColor:"#273e77",border:"1px solid #ffff"}}  className="btn btn-outline head-btn" type="submit">{data.username}</button>
                          </li> 
                          <li>
                          <button style={{backgroundColor:"#273e77",border:"1px solid #ffff",padding:"5px 8px"}} className="btn btn-outline head-btn"   onClick={logoutuser}>logout</button>
                          </li>                             
                        </ul>
                    </li> 
                    <>
                    </>
                  
                    </div>
                    :
                    <Link to="/register">
                    <button className="btn btncl btn-outline head-btn" type="submit">Sign In </button>
                    </Link> 
                  }         
                </form>
                </div>
            </div>
            </nav>
            </div>
        </div>
        <div className="mobile-nav fixed-top">
        {[false,].map((expand) => (
        <Navbar key={expand}  expand={expand}>
          <Container fluid>
            <Link to="/">
            <img src={logo}></img>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="BuyDuelCard">BuyDuelCard</Nav.Link>
                  <Nav.Link href="Marketplace">Marketplace</Nav.Link>
                  <Nav.Link href="DuelSomeone">Duel Someone</Nav.Link>
                  <Nav.Link href="AboutRules">About / Rules</Nav.Link>
                  <Nav.Link href="ICOInformation">ICO Information</Nav.Link>
                </Nav>
                
                <form className="d-flex">
                  {
                    localStorage.getItem("nftuser")?
                    <>
                    <button  className="btn btn-outline head-btn" type="submit">{data.username}</button>
                    <button className="btn btn-outline head-btn" style={{marginLeft:"10px"}}  onClick={logoutuser}>logout</button>
                    </>
                    :
                    <Link to="/register">
                    <button className="btn btn-outline head-btn" type="submit">Sign In</button>
                    </Link>

                  }                    
                </form>             
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        ))}
        </div>
    </div>

  )

}
export default Header