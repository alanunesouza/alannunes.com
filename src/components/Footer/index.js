import { graphql, useStaticQuery } from 'gatsby';
import { Twitter, Github, LinkedinIn } from 'styled-icons/fa-brands';
import React from 'react';
import ReactGA from 'react-ga';

import * as styles from './styles';

function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              linkedin
              github
              twitter
            }
          }
        }
      }
    `
  );

  const handleClick = (socialName) => {
    ReactGA.event({
      category: 'Footer',
      action: 'Click in social network Icon',
      label: socialName,
    });
  };

  return (
    <styles.Footer>
      <styles.SocialItem
        key={site.siteMetadata.social.github}
        href={site.siteMetadata.social.github}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleClick('github')}
      >
        <Github />
      </styles.SocialItem>

      <styles.SocialItem
        key={site.siteMetadata.social.linkedin}
        href={site.siteMetadata.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleClick('linkedin')}
      >
        <LinkedinIn />
      </styles.SocialItem>

      <styles.SocialItem
        key={site.siteMetadata.social.twitter}
        href={site.siteMetadata.social.twitter}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleClick('twitter')}
      >
        <Twitter />
      </styles.SocialItem>
    </styles.Footer>
  );
}

export default Footer;
