import React from 'react';

const Profile = ({user}) => {
     console.log(user);//{ avatar: , location: ,name: , stats:{ followers: ,views: ,likes: },tag:} = data
     const { avatar, location, name, stats, tag } = user;
     const {  followers, views, likes } = stats;
     return (
          <div className="profile">
     <div className="description">
     <img
          src={avatar}
          alt={name}

          className="avatar"
     />
     <p className="">{name}</p>
     <p className="">{tag}</p>
     <p className="">{location}</p>
     </div>

     <ul className="stats">
     <li>
          <span className="label">Followers</span>
     <span className="quantity">{followers}</span>
     </li>
     <li>
          <span className="label">Views</span>
     <span className="quantity">{views}</span>
     </li>
     <li>
          <span className="label">Likes</span>
     <span className="quantity">{likes}</span>
     </li>
     </ul>
     </div>
     );
};

export default Profile;