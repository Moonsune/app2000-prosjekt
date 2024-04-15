import React, { useEffect, useState } from 'react';
import styles from "./CookieConsentBanner.module.css"; // Import CSS module

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Remove the cookie
      document.cookie = 'myCookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      // Trigger a reload to show the banner again
      window.location.reload();
    }, 10000); // 10 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handleUnderstand = () => {
    // Logic for understanding cookies
    console.log("Cookies understood.");
    setIsVisible(false); // Hide the banner
  };

  const handleDecline = () => {
    // Logic for declining cookies
    console.log("Cookies declined.");
    setIsVisible(false); // Hide the banner
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
