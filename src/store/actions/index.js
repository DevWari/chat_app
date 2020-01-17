
// inviting data
import {INVITING_DATA} from './actionType'

//one to one chat
import {SEND_MESSAGE} from './actionType'
import {SEND_GROUP_MESSAGE} from './actionType'



//test saga
export function fetchData() {
  return {
    type: FETCHING_DATA
  }
}

//invite action
export function inviteData (a, b) {  

  return {
    type: INVITING_DATA,
    a,
    b,
  }
}


//one to one chat action

export function sendMessage () {

  return {
    type: SEND_MESSAGE
  }
}

// group chat action 

export function sendGroupMessage () {

  return {
      type:SEND_GROUP_MESSAGE
  }
}