import {atom, selector} from 'recoil'

export const NetworkAtom = atom({
    key : "NetworkAtom",
    default : 120
})

export const jobAtom = atom({
    key :  "jobAtom",
    default :  12
})

export const messagingAtom = atom({
    key :  "messagingAtom",
    default :  10   
})

export const NotiAtom = atom({
    key :  "NotiAtom",
    default :  120
})
 

export const totalNotificationSelector  = selector({
    key :" totalNotifications",
    get : ({get}) =>{
        const  networkNotificationCount = get(NetworkAtom)   // this variable store the current value .
        const jobNotificationCount = get(jobAtom)
        const messagingNotificationCount = get(messagingAtom)
        const NotificationCount = get(NotiAtom)  
        return   networkNotificationCount +jobNotificationCount+ messagingNotificationCount+NotificationCount
    }
})