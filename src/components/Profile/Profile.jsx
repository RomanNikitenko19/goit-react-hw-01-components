import PropTypes from "prop-types";
import style from "./Profile.module.css";

const Profile = ( props ) => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <>
      <section className={style.profile}>
        <div className={style.conteiner}>
          <div className={style.flex}>
            <div className="style.contaiinerImg">
              <img src={avatar} alt="User avatar" className={style.img} />
            </div>
            <p className={style.name}>{username}</p>
            <p className= {style.tag}>{tag}</p>
            <p className={style.location}>{location}</p>
          </div>

          <ul className={style.list}>
            {Object.entries(stats).map(([key, value]) => {
              return (
                <li key={key} className={style.item}>
                  <span className={style.span}>{key}</span>
                  <span className={style.span}>{value}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
