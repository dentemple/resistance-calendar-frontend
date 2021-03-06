import React, { PropTypes } from 'react';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitter from 'react-icons/lib/fa/twitter';
import styles from './SocialBtns.sass';

const SocialBtns = ({
  fbLink = 'https://www.facebook.com',
  twitterLink = 'https://twitter.com',
  iconSize = '25'
}) => {
  return (
    <div className={styles.socialBtns}>
      <a
        href={fbLink}
        className={styles.facebookBtn}
      >
        <FaFacebookSquare size={iconSize} />
        <span>Share on Facebook</span
      >
      </a>
      <a href={twitterLink} className={styles.twitterBtn}>
        <FaTwitter size={iconSize} />
        <span>Share on Twitter</span>
      </a>
    </div>
  );
};

SocialBtns.propTypes = {
  fbLink: PropTypes.string,
  twitterLink: PropTypes.string,
  iconSize: PropTypes.number,
};

export default SocialBtns;
