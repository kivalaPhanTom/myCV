import { notification } from 'antd'

export const MessageCommon = {
    openNotificationSuccess,
    openNotificationError
}

function openNotificationSuccess(title:string) {
    notification.success({
      message: title,
      description:'',
      className: 'success-mess',
      duration: 4,
    })
}

function openNotificationError(title:string) {
    notification.error({
      message: title,
      description:'',
      className: 'success-mess',
      duration: 4,
    })
}