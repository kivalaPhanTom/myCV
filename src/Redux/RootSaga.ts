import { all } from "redux-saga/effects";
import {cvSagaList} from './CvSaga'

const sagasList = [
    cvSagaList(),
]
export default function* () {
    yield all(sagasList);
}
  