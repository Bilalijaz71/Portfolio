import { Image } from "react-bootstrap";
import AvatarImg from "../../../assets/avatar.png";
import styles from "./style.module.css";

const Avatar = () => {
  return (
    <>
      <Image
        src={AvatarImg}
        alt="maaz-avatar"
        className={`${styles.avatar} object-fit-cover rounded-circle profileAvatar`}
        style={{ objectPosition: "top" }}
      />
    </>
  );
};

export default Avatar;
