import React from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';

import * as styles from './styles';

function BlogItem({ hit }) {
  const { title, author, timeToRead, date, excerpt, route } = hit;

  const handleClick = () => {
    ReactGA.event({
      category: 'Blog',
      action: 'Open Post',
      label: route,
    });
  };

  return (
    <styles.BlogItem to={`/${route}`} cover direction="down" duration={1} onClick={() => handleClick()}>
      <article>
        <h2>{title}</h2>
        <small>
          {author} · {date} · Leitura de {timeToRead} min
        </small>
        <p>{excerpt}</p>
      </article>
    </styles.BlogItem>
  );
}

BlogItem.propTypes = {
  hit: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogItem;
