 /*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.HomePage.header',
    defaultMessage: 'Hi, I\'m Jessica.',
  },

  about: {
    header: {
      id: 'app.components.HomePage.about.header',
      defaultMessage: 'Apps I\'ve built:',
    },
    projects: {
      titles:
        [{
          id: 'app.components.HomePage.about.projects.CloudCollab',
          defaultMessage: 'CloudCollab',
        }, {
          id: 'app.components.HomePage.about.projects.ReelTime',
          defaultMessage: 'ReelTime',
        }, {
          id: 'app.components.HomePage.about.projects.LaughAboutIt',
          defaultMessage: 'LaughAboutIt',
        }, {
          id: 'app.components.HomePage.about.projects.Unilance',
          defaultMessage: 'Unilance',
        }],
      oneliners: 
        [{
          id: 'app.components.HomePage.about.oneliners.CloudCollab',
          defaultMessage: 'Real-time code collaboration',
        }, {
          id: 'app.components.HomePage.about.oneliners.ReelTime',
          defaultMessage: 'Webcam with friends while watching videos'
        }]
      desc:
        [{
          id: 'app.components.HomePage.about.projects.desc.CloudCollab',
          defaultMessage: 'Designed and built React components, Redux containers, actions, and selectors. Enhanced user experience with real time video, messaging. Added extra security layer by sandboxing read-evaluate-print-loop execution.',
        }, {
          id: 'app.components.HomePage.about.projects.desc.ReelTime',
          defaultMessage: 'Increased interactivity by implementing multi-peer P2P calls through a mesh peer network and set up peer server to broker connections securely for deployment',
        }, {
          id: 'app.components.HomePage.about.projects.desc.LaughAboutIt',
          defaultMessage: 'Architected backend REST APIs with integration with PostgreSQL for easy querying into database. Structured database schemas and relationships.',
        }, {
          id: 'app.components.HomePage.about.projects.desc.Unilance',
          defaultMessage: 'Built full stack application using React and Node for rapid prototyping and seamless rendering',
        }],
      technologies:
        [{
          id: 'app.components.HomePage.about.projects.technologies.CloudCollab',
          defaultMessage: ['React', 'Redux', 'Github API', 'Socket.io', 'WebRTC'],
        }, {
          id: 'app.components.HomePage.about.projects.technologies.ReelTime',
          defaultMessage: ['WebRTC', 'Peer.js', 'React', 'Node.js', 'Bootstrap'],
        }, {
          id: 'app.components.HomePage.about.projects.technologies.LaughAboutIt',
          defaultMessage: ['Node.js', 'React Native', 'PostgreSQL', 'Sequelize', 'Heroku'],
        }, {
          id: 'app.components.HomePage.about.projects.technologies.Unilance',
          defaultMessage: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
        }],
    },
  },

});
