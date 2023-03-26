// import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { createSlice} from "@reduxjs/toolkit";
import * as actionCV from './Actions';
import {HOME_MENU} from '../commonParams/commonParams'

interface cvState {
    MenuItemSelected: number
  }
const initialState = {
    MenuItemSelected: HOME_MENU,
    isLoading: false,
    ownerName:'',
    phoneNumber:'',
    email:'',
    about:'',
    linkAvatar:'',
    linkCV:'',
    typingKeyword:[],
    listSkills:[],
    listExperience:[],
    listPortfolio:[],
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
      builder.addCase(actionCV.setNameOwner, (state:any, action:any) => {
        return {...state, ownerName:action.payload}
      })
      builder.addCase(actionCV.setPhoneNumber, (state:any, action:any) => {
        return {...state, phoneNumber:action.payload}
      })
      builder.addCase(actionCV.setEmail, (state:any, action:any) => {
        return {...state, email:action.payload}
      })
      builder.addCase(actionCV.setAbout, (state:any, action:any) => {
        return {...state, about:action.payload}
      })
      builder.addCase(actionCV.setAvatar, (state:any, action:any) => {
        return {...state, linkAvatar:action.payload}
      })
      builder.addCase(actionCV.setID, (state:any, action:any) => {
        return {...state, id:action.payload}
      })
      builder.addCase(actionCV.setTypingKeyword, (state:any, action:any) => {
        return {...state, typingKeyword:action.payload}
      })
      builder.addCase(actionCV.setListSkills, (state:any, action:any) => {
        return {...state, listSkills:action.payload}
      })
      builder.addCase(actionCV.setListExperience, (state:any, action:any) => {
        return {...state, listExperience:action.payload}
      })
      builder.addCase(actionCV.setListPortfolio, (state:any, action:any) => {
        return {...state, listPortfolio:action.payload}
      })
      builder.addCase(actionCV.setLoading, (state:any, action:any) => {
        return {...state, isLoading:action.payload}
      })
    },
  })
  const { reducer } = CVSlice;
  export default reducer;