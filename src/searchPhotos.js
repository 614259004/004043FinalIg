import React,{ useState } from "react";
import axios from "axios";
import './Search.css';
import { Link, Redirect,useHistory } from 'react-router-dom'; 

const SearchPhotos = () => {
    

    const history = useHistory();
    const [keyword , setKeyword] = useState();
    

    const [result , setResult] = useState([ ]);
    const [userName , setUserName] = useState();

    const handelChange = (e) =>{
        setKeyword(e.target.value);
    }

    const sendData = (photo) =>{
        localStorage.setItem('Username',photo);
        history.push("/Profile");
    }
const key=(process.env.REACT_APP_UNSPLASH_KEY);
    const searchPhoto = (e) =>{
        const url = "https://api.unsplash.com/search/photos?page=1&query="+keyword+"&orientation=portrait&per_page=12&color=black&client_id="+key;

        

        axios.get(url).then((photoData) =>{
            console.log(photoData);

            setResult(photoData.data.results);
        })
    }
  return (
    <>
    <div className="header-web">
        <h1 className="title-web">iMake</h1>
        <div className="Input-search">
            <input type="text" name="InputKeyword" className="search-key" onChange={handelChange} />
            <input type="submit" onClick={searchPhoto} className="search-button" value="search"/>
        </div>
    </div>

    <div className="card-layout">
        {result.map((photo) => (
            <div className="Card-photo">
                
                <div className="User-card">
                    <img className="user-img" src= {photo.user.profile_image.small}/>
                    <a  onClick={() => {sendData(photo.user.username)}}>{photo.user.username}</a>
                </div>
                <img className="keyword-img" src= {photo.urls.small} />
                <div className="caption">
                    <p>{photo.alt_description}</p>
                </div>
            </div>
           
        ))}
    </div>
    <div className="br-text">
        <h1>Hello</h1>
    </div>
    </>
  );
}

export default SearchPhotos