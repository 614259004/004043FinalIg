import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Profile.css';
import * as AiIcons from "react-icons/ai";
import { useHistory } from 'react-router-dom'; 
//<a onClick={() => {deletelocalStorage()}}>Hello</a>


const Profile = () => {
    const key=(process.env.REACT_APP_UNSPLASH_KEY);

    useEffect(initialValue, []);
    
    const [user , setUser] = useState([]);
    const [like , setLike] = useState([]);
    const history = useHistory();

function  initialValue(){
    const username = localStorage.getItem("Username");
    const url = "https://api.unsplash.com/search/users?query="+username+"&client_id="+key;

    const url2 = "https://api.unsplash.com/users/"+username+"/photos?order_by=latest&per_page=12&client_id="+key;

    
    axios.get(url).then((userData) =>{
        setUser(userData.data.results[0]);
           
    })

    axios.get(url2).then((likeData) =>{
        setLike(likeData.data);        
    })
     
   }
console.log(user); 
console.log(like); 
   const deletelocalStorage = () =>{
    localStorage.removeItem('Username');
    history.push("/");
   }

  
    return (
        <>
        <div className="back-button">
           <a className="back-button" onClick={() => {deletelocalStorage()}}><AiIcons.AiOutlineArrowLeft /></a>
        </div>
           {Object.keys(user).length !== 0 ? 
                <div className="User-Info">
                    <img src={user.profile_image.large} />
                    <div className="User-Bio">
                        <h1>{user.username}</h1>
                        <p id="address">{user.location}</p>
                        <p id="bio">{user.bio}</p>
                    </div>
                    <div className="User-total">
                        <div className="total">
                            <p className="num">{user.total_photos}</p>
                            <p className="text-total">photos</p>
                        </div>
                        <div className="total">
                            <p className="num">{user.total_likes}</p>
                            <p className="text-total">likes</p>
                        </div>
                        <div className="total">
                            <p className="num">{user.total_collections}</p>
                            <p className="text-total">collections</p>
                        </div>
                    </div>
                </div>
                
           :null}
                <div className="userimage-layout">
                    {like.map((userimage) =>(
                        <img src={userimage.urls.small} />
                    ))}
                </div>
            

            <h1 className="none">JOJO</h1>
        </>
    )
}


export default Profile