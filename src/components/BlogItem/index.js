import React from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';

import * as styles from './styles';

function BlogItem({ title, author, timeToRead, date, resume, route }) {
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
        <p>{resume}</p>
      </article>
    </styles.BlogItem>
  );
}

BlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  resume: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default BlogItem;
