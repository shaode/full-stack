/* eslint-disable import/prefer-default-export */

import { LOADINGBAR } from '../constants';

export function loadingBarFn(play) {
  return {
    type: LOADINGBAR,
    play
  };
}
