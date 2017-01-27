import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ErrorPage.css';
import { loadingBarFn } from '../../actions/common';

class ErrorPage extends React.Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
  };

  componentDidMount() {

  }

  render() {
    if (process.env.NODE_ENV !== 'production') {
      const { error } = this.props;
      return (
        <div>
          <h1>{error.name}</h1>
          <p>{error.message}</p>
          <pre>{error.stack}</pre>
        </div>
      );
    }

    return (
      <div>
        <h1>Error</h1>
        <p>Sorry, a critical error occurred on this page.</p>
      </div>
    );
  }
}

const mapState = (state) => ({

});

const mapDispatch = {
  loadingBarFn
};

export { ErrorPage as ErrorPageWithoutStyle };
export default withStyles(s)(connect(mapState, mapDispatch)(ErrorPage));
