import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './styles';

function Container({ children }) {
  return <styles.Container>{children}</styles.Container>;
}

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
