import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styles from "./Load.module.css"

export const LoadComponent = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../99275-pacman-loading.json"),
    });
  }, []);
  return(
    <div>
        <div className={styles.img} ref={container}></div>
    </div>
)
};
