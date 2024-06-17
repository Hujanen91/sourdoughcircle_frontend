import React from "react";
import styles from "../styles/Avatar.module.css";
import PropTypes from 'prop-types';

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src || "src/assets/images/user (6).png"}
        height={height}
        width={height}
        alt="avatar profilepicture"
      />
      {text}
    </span>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.number,
  text: PropTypes.string, 
};

export default Avatar;