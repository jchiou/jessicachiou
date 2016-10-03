/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from '../App/styles.css';
import animateCSS from 'animate.css';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        {/*

            Section: Splash page

        */}

        <section className={styles.home}>
          <div className={`container ${styles.homecontainer}`}>
            <div className={styles.wrapper}>
              <div className="row">
                <div className="col-sm-offset-2 col-md-8 text-center">
                  <div className={`wow ${styles.fadeInDown} ${styles.animated}`} data-wow-delay="2s">
                    <h1 className={styles.contrast}>
                      <FormattedMessage {...messages.header} />
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.scrolldown} wow ${styles.fadeInDown} ${styles.animated}`}>
            <a href="#about">
              <i className="glyphicon glyphicon-chevron-down"></i>
            </a>
          </div>

          <div className={styles.backstretch}>
            <img
              role="presentation"
              className={styles.backgroundpic}
              src="http://androidwallpape.rs/content/02-wallpapers/154-purplerock/purple-rock-stone-texture-pattern-9-wallpaper.jpg"
            />
          </div>
        </section>

        {/*

            Section: About Me

        */}

        <section className="about-me" id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className={`${styles.sectionheading} wow zoomIn ${styles.animated}`} data-wow-delay="0.5">
                  <h1 className={styles.title}>
                    <FormattedMessage {...messages.about.header} />
                  </h1>
                </div>


                <div className="row">
                  <div className="col-md-6 text-center">
                    <div className={`${styles.singleabout} wow fadeInUp ${styles.animated} animated`}>
                      <h3><FormattedMessage {...messages.about.projects.titles[0]} /></h3>
                      <i><FormattedMessage {...messages.about.projects.oneliner} /></i>
                      <p>
                        <FormattedMessage {...messages.about.projects.desc[0]} />

                      </p>
                      <p className={styles.tags}>
                        {messages.about.projects.technologies[0].defaultMessage.map((tech) =>
                          <span>{tech}</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 text-center">
                    <div className={`${styles.singleabout} wow fadeInUp ${styles.animated} animated`}>
                      <h3><FormattedMessage {...messages.about.projects.titles[1]} /></h3>
                      <p>
                        <FormattedMessage {...messages.about.projects.desc[1]} />
                      </p>
                      <p className={styles.tags}>
                        <span>WebRTC</span> <span>Peer.js</span> <span>React</span> <span>Node.js</span> <span>Bootstrap</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 text-center">
                    <div className={`${styles.singleabout} wow fadeInUp ${styles.animated} animated`}>
                      <h3><FormattedMessage {...messages.about.projects.titles[2]} /></h3>
                      <p>
                        <FormattedMessage {...messages.about.projects.desc[2]} />
                      </p>
                      <p className={styles.tags}>
                        <span>React.js</span> <span>Node.js</span> <span>MongoDB</span> <span>Bootstrap</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 text-center">
                    <div className={`${styles.singleabout} wow fadeInUp ${styles.animated} animated`}>
                      <h3><FormattedMessage {...messages.about.projects.titles[3]} /></h3>
                      <p>
                        <FormattedMessage {...messages.about.projects.desc[3]} />
                      </p>
                      <p className={styles.tags}>
                      <span>Node.js</span> <span>React Native</span> <span>PostgreSQL</span> <span>Sequelize</span> <span>Heroku</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}
