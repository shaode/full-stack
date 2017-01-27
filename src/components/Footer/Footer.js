import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import Link from '../Link';
import { BackTop } from 'antd';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.footer}>
        <BackTop />
        <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>回到顶部</strong>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
