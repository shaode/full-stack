import { LOADINGBAR, MENUTOGGLE, SUBMENUKEY } from '../constants';
import { mainMenu } from '../components/Aside';

let initState = {
  loadingBar: false,
  menuToggle: false,
  subMenuKey: [mainMenu[0].key, mainMenu[0].subMenu[0].key]
}

export default function common(state = initState, action) {
  switch (action.type) {
    case LOADINGBAR:
      return Object.assign({}, state, {
        loadingBar: action.play
      });
    case MENUTOGGLE:
      return Object.assign({}, state, {
        menuToggle: !state.menuToggle
      });
    case SUBMENUKEY:
      return Object.assign({}, state, {
        subMenuKey: action.key
      });
    default:
      return state;
  }
}
