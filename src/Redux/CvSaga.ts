import { call, put, takeEvery, all} from 'redux-saga/effects'
import * as cvAction from './Actions'
import { Service } from '../Services/Services'
import { MessageCommon } from '../Messages/Messages'

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}
function* handleFecthCVInfo(action:any){
    try {
        yield put(cvAction.setLoading(true))
        const res:ResponseGenerator = yield call(Service.getCVInfoFromApi)
        yield put(cvAction.setLoading(false))
        const {data, error} = res.data
        if(error){
            MessageCommon.openNotificationError("Lỗi hệ thống")
        }else{
            if(data.length === 0){
                MessageCommon.openNotificationError("Chưa có dữ liệu trong hệ thống")
            }else{
                const { linkAvatar, _id, about, email, listExperience, listPortfolio, listSkills, ownerName, phoneNumber, typingKeyword, linkCV, listEducation } = data[0]
                yield put(cvAction.setID(_id))
                yield put(cvAction.setAvatar(linkAvatar))
                yield put(cvAction.setEmail(email))
                yield put(cvAction.setAbout(about))
                yield put(cvAction.setNameOwner(ownerName))
                yield put(cvAction.setPhoneNumber(phoneNumber))
                yield put(cvAction.setListExperience(listExperience))
                yield put(cvAction.setListSkills(listSkills))
                yield put(cvAction.setListPortfolio(listPortfolio))
                yield put(cvAction.setTypingKeyword(typingKeyword))
                yield put(cvAction.setListEducation(listEducation))
                yield put(cvAction.setLinkCV(linkCV))
            }
        }
     }catch (error) {
        yield put(cvAction.setLoading(false))
        MessageCommon.openNotificationError("Lỗi hệ thống")
     }
}

function* fecthCVInfoSaga() {
    yield takeEvery(cvAction.getCVInfo, handleFecthCVInfo);
}
export function* cvSagaList() {
    yield all([
        fecthCVInfoSaga(),
    ]);   
  }