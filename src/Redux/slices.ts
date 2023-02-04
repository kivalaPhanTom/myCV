// import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { createSlice} from "@reduxjs/toolkit";
import * as actionCV from './Actions';
import {HOME_MENU} from '../commonParams/commonParams'

interface cvState {
    MenuItemSelected: number
  }
const initialState = {
    MenuItemSelected: HOME_MENU,
} as cvState

const CVSlice = createSlice({
    name: 'cvSlide',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //chuyển qua ts thì phải dùng builder.addCase
      builder.addCase(actionCV.selectMenuItem, (state:any, action:any) => {
        return {...state, MenuItemSelected:action.payload}
      })
    },
  })
  const { reducer } = CVSlice;
  export default reducer;