import React, {useReducer} from 'react'


//what types of actions can happen top change our state 

const CHANGE_Label = 'CHANGE_ LABEL'
const CHANGE_IS_COMPLETE="CHANGE_IS_COMPLETE"

//inital state value /when actions of out form get fires up (clicked)
const initalState = {
  todoLabel: '',
  todoIsComplete: false
}
//ex.{type:CHNAGE_LABEL, payload:foo} //action
//ex.{type: CHANGE_ISCOMPLETED, payload:true}//action
const reducer = (state, action) => {

switch (action.type){
case CHANGE_Label:
  return {...state, todoLabel: action.payload}
case CHANGE_IS_COMPLETE:
  return{...state, todoIsComplete: action.payload  }

default: 
        return state
}
}

export default function TodoForm() {
  const [state, dispatch] = useReducer(reducer,initialState)
  
  return (
    <form id="todoForm">
      <h3>New Todo Form</h3>
      <label><span>Todo label:</span>
        <input
          type='text'
          name='todoLabel'
          placeholder='Type label'
        />
      </label>
      <label><span>Is completed:</span>
        <input
          type='checkbox'
          name='todoIsCompleted'
        />
      </label>
      <label><span>Create todo:</span>
        <input
          type='submit'
          value='Do it!'
        />
      </label>
    </form>
  )
}
