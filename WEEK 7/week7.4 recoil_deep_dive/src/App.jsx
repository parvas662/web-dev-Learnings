import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { NetworkAtom ,jobAtom ,messagingAtom, NotiAtom,totalNotificationSelector} from './atoms'
  
function App() {  
  return (
    <RecoilRoot>
      <Navbar/>
      <br /> <br />   
    </RecoilRoot>
  )
}

function Navbar(){
  const networkNotificationCount = useRecoilValue(NetworkAtom)
  const jobNotificationCount = useRecoilValue(jobAtom)
  const messagingNotificationCount = useRecoilValue(messagingAtom)
  const NotificationCount = useRecoilValue(NotiAtom)
  //  now we want to add all of notifications and show them in me button.
  // selectors are those in which we want to calculate a value and that value is depend on other atoms, so need to extract that value and use it myselector and then return the calculated value \
  /* 
   for calculations we can use useMemo and in recoil we can use selectors. but usememo is not for global  
  const totalNotifications = useMemo(()=>{
    return networkNotificationCount + jobNotificationCount + messagingNotificationCount + NotificationAtom;
  },[networkNotificationCount,jobNotificationCount,messagingNotificationCount,NotificationAtom])  */ 
  const totalNotifications = useRecoilValue(totalNotificationSelector)
  return <>
      <button>Home</button>
      <button>Mynetwork({ networkNotificationCount >=100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs({ jobNotificationCount >=100 ? "99+" : jobNotificationCount})</button>
      <button>Messaging({ messagingNotificationCount >=100 ? "99+" : messagingNotificationCount})</button>
      <button>Notification({ NotificationCount >=100 ? "99+" : NotificationCount})</button>

      <button>me ({totalNotifications}) </button>
      <br /><br />
      <IncrementMessage/>
    </>
  }

function IncrementMessage(){
  const setMessageCount = useSetRecoilState(messagingAtom) 
  return <button  onClick={()=>{
    setMessageCount(c=>c+1)
  }}> 
  Increase Message
  </button>
}
export default App
