"use client";
// Laget av Kaisa Lien
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
    window.location.href = 'https://www.google.com';
    setIsVisible(false); 
  };

  return (
    <>
      {isVisible && (
        <div className={styles.bannerContainer}>
          <span>Denne nettsiden bruker cookies for å forbedre brukeropplevelsen din.</span>
          <div className={styles.buttonContainer}>
            <button className={`${styles.buttonWrapper} ${styles.cookieBtn}`} onClick={handleUnderstand}>Jeg forstår</button>
            <button className={`${styles.buttonWrapper} ${styles.cookieBtn}`} onClick={handleDecline}>Jeg avviser</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentBanner;
