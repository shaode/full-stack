import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.scss';
import antd from '!!isomorphic-style!css?modules=false!antd/dist/antd.min.css';
import Header from '../Header';
import Aside from '../Aside';
import Breadcrumb from '../Breadcrumb';
import Footer from '../Footer';

import history from '../../core/history';
import { mainMenu } from '../Aside';
import { subMenuKeyFn } from '../../actions/common';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  componentDidMount() {
    //复原菜单记录
    let self = this
    mainMenu.forEach((a, b) => a.subMenu.forEach((c, d) => {
      if (c.to === history.location.pathname) {
        self.props.subMenuKeyFn([a.key, c.key])
        return
      }
    }))
  }

  render() {
    return (
      <div className={s.wrap + ' ' + (this.props.menuToggle ? s.menuClose : '')}>
        <Header/>
        <Aside/>
        <div className={s.root}>
          <Breadcrumb/>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapState = (state) => ({
  menuToggle: state.common.menuToggle
});

const mapDispatch = {
  subMenuKeyFn
};

export default withStyles(s, antd)(connect(mapState, mapDispatch)(Layout));
