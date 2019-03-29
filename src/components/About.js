import React from "react";
import styles from "../CSS/about.styl";
import { faCode, faTerminal } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNodeJs,
  faGit
} from "@fortawesome/free-brands-svg-icons";
import { faPaintBrush, faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Row, Col } from "react-flexbox-grid";

function About() {
  return (
    <div className={styles["about"]}>
      <div className={styles["about__header"]}>
        <h1>Live. Learn. Code. Practice.</h1>
        <p>
          I enjoy using my creative talents to help others. Its good knowing
          that your talents can help other people acheive their dreams and
          visions. Outside of programming I am a traveler, gardener, minimalist.
        </p>
      </div>
      <article className={styles["about__content"]}>
        <section className={styles["intro"]}>
          <h1 className={styles["about__title"]}>Short History Background</h1>
          <p>
            Hi, and welcome! My name is Erik, and I am glad that you have given
            me an opportunity to share my story with you. It all started
            literally from hard work to be honest with you. The journey began in
            2016 when I decided to make this move as a full stack web developer
            out of inspiration. I like the fact that being a web developer you
            can practically create just about anything. At the time I was
            looking for a new way of expressing my creativity and showcasing it.
            I just didn’t know what field would do. There where a lot of choices
            out there. After I did my research and homework I realized that this
            is it. This is what I want to do. Since then I continue to practice.
            Even to this day I still practice. It wasn’t until I gained the
            confidence that I decided to make the big leap to make this a
            profession. That’s how the journey began. To make it short. I don’t
            want to bore you with long paragraphs of text.
          </p>
        </section>
        <h2 className={styles["about__title"]}>My Proficiencies</h2>
        <section className={styles["skills"]}>
          <Grid fluid>
            <Row center="md">
              <Col xs={12} md={6} lg={4}>
                <div className={styles["skills__box"]}>
                  <div className={styles["skills__box-title"]}>
                    <span>
                      <FontAwesomeIcon icon={faCode} />
                    </span>
                    <h3>Front End Development</h3>
                  </div>

                  <ul>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faHtml5}
                          className={styles["html5"]}
                        />
                      </span>
                      <span>
                        <h2>HTML 5</h2>
                      </span>
                    </li>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faCss3}
                          className={styles["css3"]}
                        />
                      </span>
                      <span>
                        <h2>CSS 3</h2>
                      </span>
                    </li>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faCss3}
                          className={styles["css3"]}
                        />
                      </span>
                      <span>
                        <h2>Stylus</h2>
                      </span>
                    </li>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faCss3}
                          className={styles["css3"]}
                        />
                      </span>
                      <span>
                        <h2>Bootstap</h2>
                      </span>
                    </li>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faJsSquare}
                          className={styles["js"]}
                        />
                      </span>
                      <span>
                        <h2>Javascript</h2>
                      </span>
                    </li>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faReact}
                          className={styles["reactjs"]}
                        />
                      </span>
                      <span>
                        <h2>React Js / Webpack</h2>
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className={styles["skills__box"]}>
                  <div className={styles["skills__box-title"]}>
                    <span>
                      <FontAwesomeIcon icon={faCode} />
                    </span>
                    <h3>Back End Development</h3>
                  </div>
                  <ul>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faNodeJs}
                          className={styles["nodejs"]}
                        />
                      </span>
                      <span>
                        <h2>Node Js</h2>
                      </span>
                    </li>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faNodeJs}
                          className={styles["nodejs"]}
                        />
                      </span>
                      <span>
                        <h2>Restful Apis</h2>
                      </span>
                    </li>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faNodeJs}
                          className={styles["nodejs"]}
                        />
                      </span>
                      <span>
                        <h2>Express Js</h2>
                      </span>
                    </li>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faNodeJs}
                          className={styles["nodejs"]}
                        />
                      </span>
                      <span>
                        <h2>Restify Framework</h2>
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className={styles["skills__box"]}>
                  <div className={styles["skills__box-title"]}>
                    <span>
                      <FontAwesomeIcon icon={faCode} />
                    </span>
                    <h3>Other Skills</h3>
                  </div>
                  <ul>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faBrain}
                          className={styles["brain"]}
                        />
                      </span>
                      <span>
                        <h2>Problem Solver</h2>
                      </span>
                    </li>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faTerminal}
                          style={{ color: "#444" }}
                        />
                      </span>
                      <span>
                        <h2>Command Line</h2>
                      </span>
                    </li>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faGit}
                          style={{ color: "#555" }}
                        />
                      </span>
                      <span>
                        <h2>Version Control</h2>
                      </span>
                    </li>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faBrain}
                          className={styles["brain"]}
                        />
                      </span>
                      <span>
                        <h2>Critical Thinker</h2>
                      </span>
                    </li>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faBrain}
                          className={styles["brain"]}
                        />
                      </span>
                      <span>
                        <h2>Self Learning</h2>
                      </span>
                    </li>
                    <li>
                      <span className={styles["skills__icon"]}>
                        <FontAwesomeIcon
                          icon={faPaintBrush}
                          style={{ color: "#F9F968" }}
                        />
                      </span>
                      <span>
                        <h2>UI/UX Design</h2>
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
      </article>
      <div className={styles["workflow__main"]}>
        <div className={styles["workflow__header"]}>
          <h1>Workflow</h1>
        </div>
        <div className={styles["workflow__grid"]}>
          <Grid fluid>
            <Row center="xs">
              <Col xs={12} md={6} lg={4}>
                <div className={styles["workflow__box"]}>
                  <div className={styles["workflow__header"]}>
                    <h1>
                      <span>.01</span>Plan
                    </h1>
                  </div>
                  <div className={styles["workflow__content"]}>
                    <p>
                      Brainstorm and think of unique ideas based off of the look
                      and feel of the business or existing website. Collaborate
                      with my clients to ensure that ideas are in sync with
                      client
                      {"'"}s intent. Began sketching the website.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className={styles["workflow__box"]}>
                  <div className={styles["workflow__header"]}>
                    <h1>
                      <span>.02</span>Develop
                    </h1>
                  </div>
                  <div className={styles["workflow__content"]}>
                    <p>
                      Development and designing begins. Client recieves email
                      periodically for an update. Changes may still occur when
                      necessary or requested by the client.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className={styles["workflow__box"]}>
                  <div className={styles["workflow__header"]}>
                    <h1>
                      <span>.03</span>Test
                    </h1>
                  </div>
                  <div className={styles["workflow__content"]}>
                    <p>
                      Periodically checks for bugs, glitches, and potential
                      security holes. Multiple testing methods are used
                      depending on the extent of website and what needs to be
                      tested. Tweaks and other changes will occur when bugs are
                      discovered.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <div className={styles["workflow__box"]}>
                  <div className={styles["workflow__header"]}>
                    <h1>
                      <span>.04</span>Deploy
                    </h1>
                  </div>
                  <div className={styles["workflow__content"]}>
                    <p>
                      The web application is now ready to be accessible to
                      everyone. Client will recieve a final run down before
                      deploying. Afterwards it will be online for everybody.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default About;
