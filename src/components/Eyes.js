import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Eyes.module.css";

const Eyes = () => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      movePupil(leftEyeRef.current, leftPupilRef.current, clientX, clientY);
      movePupil(rightEyeRef.current, rightPupilRef.current, clientX, clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const movePupil = (eye, pupil, mouseX, mouseY) => {
    if (!eye || !pupil) return;

    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
    const maxDistance = eyeRect.width / 4.5 - pupil.offsetWidth / 2;

    const distanceX = mouseX - eyeCenterX;
    const distanceY = mouseY - eyeCenterY;
    const distance = Math.min(
      maxDistance,
      Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    );

    const pupilX = eyeCenterX + distance * Math.cos(angle);
    const pupilY = eyeCenterY + distance * Math.sin(angle);

    pupil.style.left = `${pupilX - eyeRect.left - pupil.offsetWidth / 2}px`;
    pupil.style.top = `${pupilY - eyeRect.top - pupil.offsetHeight / 2}px`;
  };

  return (
    <div className={styles.eyes}>
      <div className={styles.eye} ref={leftEyeRef}>
        <Image
          src="/left_eye.svg"
          alt="Left Eye"
          layout="fill"
          objectFit="cover"
        />
        <div
          className={`${styles.pupil} ${styles.leftPupil}`}
          ref={leftPupilRef}
        >
          <Image
            src="/pupil-left.svg"
            alt="Left Pupil"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.eye} ref={rightEyeRef}>
        <Image
          src="/right_eye.svg"
          alt="Right Eye"
          layout="fill"
          objectFit="cover"
        />
        <div
          className={`${styles.pupil} ${styles.rightPupil}`}
          ref={rightPupilRef}
        >
          <Image
            src="/pupil-right.svg"
            alt="Right Pupil"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Eyes;
