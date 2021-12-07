import PropTypes from "prop-types";
import style from "./FriendList.module.css";
const FriendList = ({ friends }) => {

  return (
    <>
      <section className={style.friendList}>
        <div className={style.conteiner}>
          <ul className={style.list}>
            {friends.map(({ avatar, name, isOnline, id }) => {
              return (
                <li key={id} className={style.item}>
                  <div className={style}>
                    <span className={isOnline ? style.green : style.red}></span>
                    <img className={style.img} src={avatar} alt="User avatar" width="48" />
                    <p className={style.text}>{name}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;