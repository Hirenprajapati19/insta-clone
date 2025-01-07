
import React, { useEffect, useState } from 'react'
import "./Profile.css"
import PostDetail from './PostDetail'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
  const { userid } = useParams();
  console.log(userid)
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("")
  const [show, setShow] = useState(false)
  // const [changePic, setChangePic] = useState(false)



  useEffect(() => {
    fetch(`http://localhost:5339/user/${userid}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result.user);
        setPosts(result.post);
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
          <div style={{ display: "flex", alignItems: "center" , justifyContent:"space-between"}}>
            <h1>{user.name}</h1>
            <button className='followBtn'>Follow</button>
          </div>
          <div className="profile-info ">
            <p>{posts.length} posts</p>
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
        {posts.map((pics) => {
          return <img key={pics._id} src={pics.photo}
            // onClick={() => {
            //   toggleDetails(pics)
            // }}
            className="item"></img>;
        })}
      </div>
      {/* {show &&
        <PostDetail item={posts} toggleDetails={toggleDetails} />
      } */}
      {/* {
        changePic &&
        <ProfilePic changeprofile={changeprofile} />
      } */}

    </div>
  )
}

export default UserProfile
