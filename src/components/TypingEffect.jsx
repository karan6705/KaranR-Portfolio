import React, { useEffect, useState } from "react";
import { styles } from "../styles"; // Adjust the path as needed

const TypingEffect = () => {
  const phrases = ["Software Engineer", "Backend Developer", "AI/ML Enthusiast", "DevOps Engineer"];
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 80; // typing speed in ms
  const deletingSpeed = 80; // backspacing speed in ms
  const pauseBetweenPhrases = 1000; // pause before the next phrase

  useEffect(() => {
    const handleTypingEffect = () => {
      const currentPhrase = phrases[currentIndex];
      const isAtEnd = displayText === currentPhrase;

      if (isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      }

      if (!isDeleting && isAtEnd) {
        setTimeout(() => setIsDeleting(true), pauseBetweenPhrases);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    };

    const timer = setTimeout(
      handleTypingEffect,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className={`${styles.heroSubText} mt-2 text-eerieBlack typing`}>
      {displayText}
    </span>
  );
};

export default TypingEffect;
