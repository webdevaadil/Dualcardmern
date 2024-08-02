import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Winner.css";
import axios from "axios";
import { Loader } from "../component/Loader";

const Winner = () => {
  const { id, index } = useParams();
  const [images, setImages] = useState([]);
  const [aadil, setaadil] = useState([]);
  const [loader, setLoader] = useState(true);
  const storagedata =JSON.parse(localStorage.getItem("nftuser")) 

  const getwinner = async () => {
 const res = await axios.post("/api/auth/winnerchallenge",{id:id,result:"declared"});

 if(res){

  setTimeout(()=>{
    setLoader(false)
  },800)
    images.push(res.data[0]);

    if(index==="player_1") {
      setaadil(images[0].player_1[0].images);
  }
  if(index==="player_2"){
      setaadil(images[0].player_2[0].images);
  }
 const replaceimage = await axios.put("/api/auth/updateimage",{arr:aadil,id:storagedata._id})
 }
  };

  // useEffect(() => {
    getwinner();
  // }, [id,index]);


  return (

    <>
    {
      loader?<Loader/>:  <div className="body-main">
      <div className="winner-sec">
        <div className="container">
          <div className="section-title">
            <h2>You Won!</h2>
            <div className="prizeimg">
              <img src="/Prize.png" alt="img" />
            </div>
          </div>
          <div className="row won-main">
            <div className="won-grid">
              {aadil.map((item, ind) => {
                return (
                  <>
                    <div className="wonimg1">
                      <img src={item} alt="img" />
                    </div>
                   
                  </>
                );
              })}
            </div>
          </div>
          <div className="won-btn">
            <div className="btn-duel-right winnerbtn1">
              <button className="hero-btn win-btn">CARD GALLERY</button>
            </div>
            <div className="btn-duel-right winnerbtn1">
              <Link to="/DuelSomeone">
                <button className="hero-btn win-btn">DUEL AGAIN</button>
              </Link>
            </div>
            <div className="btn-duel-right winnerbtn1">
              <Link to="/Auction">
                <button style = {{width:"61%"}} className="hero-btn win-btn">AUCTION CARDS</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  
  );
};

export default Winner;