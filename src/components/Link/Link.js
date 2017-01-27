import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import history from '../../core/history';
import { loadingBarFn, subMenuKeyFn } from '../../actions/common';
import { mainMenu } from '../Aside';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func
  };

  handleClick = (event) => {

    if (this.props.onClick) {
      this.props.onClick(event);
    }
    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }
    if (event.defaultPrevented === true) {
      return;
    }
    event.preventDefault();

    if (history.location.pathname !== this.props.to) {
      //监听所以路由链接的开始，在page.js里结束
      this.props.loadingBarFn(true)

      //监听所有菜单链接,并分发 key
      let self = this
      mainMenu.forEach((a, b) => a.subMenu.forEach((c, d) => {
        if (c.to === this.props.to) {
          self.props.subMenuKeyFn([a.key, c.key])
          return
        }
      }))

    }

    history.push(this.props.to);
  };

  render() {
    const {
      to,
      children,
      loadingBarFn,
      subMenuKeyFn,
      ...props
    } = this.props;
    return <a href={to} {...props} onClick={this.handleClick}>{children}</a>;
  }
}

const mapState = (state) => ({

});

const mapDispatch = {
  loadingBarFn,
  subMenuKeyFn
};

export default connect(mapState, mapDispatch)(Link);
