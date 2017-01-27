import { LOADINGBAR } from '../constants';

let initState = {
  loadingBar: false
}

export default function common(state = initState, action) {
  switch (action.type) {
    case LOADINGBAR:
      return {
        loadingBar: action.play
      };
    default:
      return state;
  }
}
