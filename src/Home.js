import React from 'react'
import HomeAuth from './HomeAuth'
import HomeOrg from './HomeOrg'

export default function Home(props) {

  
  // function HomeChoose(use) {
  //   const isLoggedIn = use
  //   if (isLoggedIn) {
  //     return <HomeAuth toggleFun={props.toggleFun} />;
  //   }
  //   return <HomeOrg toggleFun={props.toggleFun} />;
  // }
  // const user = auth.currentUser;

  // useEffect(()=> {
  //   HomeChoose(user)
  // },[user])
    if (props.isLoggedIn != null) {
      return <HomeAuth toggleFun={props.toggleFun} isLoggedIn={props.isLoggedIn}/>
    } else {
      return (<HomeOrg toggleFun={props.toggleFun} />)
    }
  
}
