import { createAction } from '@reduxjs/toolkit';
import * as ACTION_TYPES from './ActionTypes';

type listExperienceObject={
    key:string;
    company:string;
    fromTime:string;
    toTime:string;
    role:string;
}
type listSkillsObject={
    key:string;
    name:string;
    img:string;
}
type listPortfolioObject={
    key:string;
    name:string;
    img:string;
    link:string;
}

export const selectMenuItem = createAction<number>(ACTION_TYPES.SELECT_MENU_ITEM)
export const setNameOwner = createAction<string>(ACTION_TYPES.SET_NAME_OWNER)
export const setPhoneNumber = createAction<string>(ACTION_TYPES.SET_PHONE_NUMBER)
export const setEmail = createAction<string>(ACTION_TYPES.SET_EMAIL)
export const setAbout = createAction<string>(ACTION_TYPES.SET_ABOUT)
export const setLoading = createAction<boolean>(ACTION_TYPES.SET_LOADING)
export const setAvatar = createAction<string>(ACTION_TYPES.SET_AVATAR)
export const setID = createAction<string>(ACTION_TYPES.SET_ID)
export const setLinkCV = createAction<string>(ACTION_TYPES.SET_LINK_CV)
export const setTypingKeyword = createAction<string[]>(ACTION_TYPES.SET_TYPING_KEYWORD)
export const setListExperience = createAction<listExperienceObject[]>(ACTION_TYPES.SET_LIST_EXPERIENCE)
export const setListSkills = createAction<listSkillsObject[]>(ACTION_TYPES.SET_LIST_SKILLS)
export const setListPortfolio = createAction<listPortfolioObject[]>(ACTION_TYPES.SET_LIST_PORTFOLIO)
export const getCVInfo = createAction<{}>(ACTION_TYPES.GET_CV_INFO)
export const setListEducation = createAction<{}>(ACTION_TYPES.SET_LIST_EDUCATION)