import React, { useEffect } from 'react'
import "./Profile.css"
import { useState } from 'react'

const Profile = () => {
  const [pic, setPic] = useState([])

  useEffect(() => {
    fetch("http://localhost:5339/myposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(res => res.json())
      .then(result => {
        setPic(result)
        console.log(pic)
      })

  }, [])


  return (
    <div className='profile'>
      <div className="profile-frame">
        <div className="profile-pic">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWZyY2h8MXx8GVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Image Description"
          />
        </div>

        <div className="profile-data">
          <h1>{JSON.parse(localStorage.getItem("user")).name}</h1>
          <div className="profile-info ">
            <p>40 postss</p>
            <p>40 followers</p>
            <p>40 following</p>
          </div>
        </div>


      </div>


      <hr style={{
        width: "90%",
        margin: "auto",
        opacity: "0.8",
        margin: "25px auto"
      }} />

      <div className="gallery">
        {pic.map((pics) => {
          return (
            <img key={pics._id} src={pics.photo} alt="" />
          )
        })}
      </div>

    </div>
  )
}

export default Profile
