import React from "react";
import styles from "../CSS/main.styl";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className={styles["main__cover"]}>
      <div className={styles["main__content"]}>
        <Particles
          params={{
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true
                }
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  speed: 1,
                  size_min: 0.3
                }
              },
              line_linked: {
                enable: false
              },
              move: {
                random: true,
                speed: 1,
                direction: "random",
                out_mode: "out"
              }
            },
            modes: {
              bubble: {
                distance: 350,
                duration: 2,
                size: 0,
                opacity: 0
              },
              repulse: {
                distance: 400,
                duration: 4
              }
            }
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            zIndex: 1
          }}
        />
        <div className={styles["main__header"]}>
          <h1>Erik Bridges</h1>
          <h2>Full Stack Web Developer</h2>
          <span />
        </div>
        <div className={styles["main__body"]}>
          <p>
            Greetings and thanks for visiting. My name is Erik. I am a full
            stack web developer who builds complete web applications from
            scratch. I have three years of self driven experience in both
            front-end and back-end development, producing powerful and
            responsive web applications.
          </p>
        </div>
        <div className={styles["main__btn-wrap"]}>
          <Link to="/about">About Me</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
