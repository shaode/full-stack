import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { loadingBarFn } from '../../actions/common';
import s from './Page.scss';

class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    html: PropTypes.string.isRequired,
  };

  componentDidUpdate() {
    let self = this;
    setTimeout(function () {
      self.props.loadingBarFn(false)
    },1000)
  }

  render() {
    const { title, html } = this.props;
    return (
      <div className={s.container}>
        {title && <h1>{title}</h1>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }
}

const mapState = (state) => ({

});

const mapDispatch = {
  loadingBarFn
};


export default withStyles(s)(connect(mapState, mapDispatch)(Page));
