import { LOADINGBAR, MENUTOGGLE } from '../constants';

let initState = {
  loadingBar: false,
  menuToggle: false
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
    default:
      return state;
  }
}
