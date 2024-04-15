import React, { useEffect, useState } from 'react';
import styles from "./CookieConsentBanner.module.css";

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
   
    const acceptedCookies = document.cookie.includes('myCookieConsent=true');
    if (acceptedCookies) {
      setIsVisible(false);
    }
  }, []);

  const handleUnderstand = () => {
    console.log("Cookies understood.");
   
    document.cookie = 'myCookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
    setIsVisible(false); 
  };

  const handleDecline = () => {
    console.log("Cookies declined.");
    setIsVisible(false); 
  };

  return (
    <>
      {isVisible && (
        <div className={styles.bannerContainer}>
          <span>This website uses cookies to enhance user experience. </span>
          <div className={styles.buttonContainer}>
            <button className={`${styles.buttonWrapper} ${styles.cookieBtn}`} onClick={handleUnderstand}>I understand</button>
            <button className={`${styles.buttonWrapper} ${styles.cookieBtn}`} onClick={handleDecline}>I decline</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentBanner;
