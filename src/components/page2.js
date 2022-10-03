import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


function Page1() {

    const [profiles, setProfiles] = useState([])
    let navigate = useNavigate()
  
    useEffect(() => {
      fetch();
  
    }, [])
  
  
  const fetch = async () => {
    const url = "https://reqres.in/api/users?page=2"
  
    axios.get(url)
      .then((res) => {
        console.log(res.data.data)
        setProfiles(res.data.data)
    
      })
      .catch((error) => {
          console.log(error)
      })
    }
  
  const handleClick = () => {
      navigate("/")
  }
  
    return (
  
    <div className="Apps">
      <div className="App">
  
        {profiles.map((profile, index) => {
            return (
              <div key={index} className="profileCard">
                  <img src={profile.avatar} className="avatar" alt="vendre-data"></img>
                  <h3>{profile.first_name} {profile.last_name} </h3>
                  <a href="mailto:"{...profile.email}>{profile.email}</a>
              </div>
            )
          })}
  
      </div>

        <button className="PrevBtn2" onClick={() => {handleClick()}}>Previous</button>
        <button className="NextBtn2">Next</button>
  
    </div>
    );
  }
  
  export default Page1;