import { createAction } from '@reduxjs/toolkit';
import * as ACTION_TYPES from './ActionTypes';

export const selectMenuItem = createAction<number>(ACTION_TYPES.SELECT_MENU_ITEM)