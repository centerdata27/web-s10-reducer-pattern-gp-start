import React, { useReducer } from 'react'


//what types of actions can happen top change our state 
const CHANGE_LABEL = 'CHANGE_LABEL'
const CHANGE_IS_COMPLETE = "CHANGE_IS_COMPLETE"






//inital state value /when actions of out form get fires up (clicked)
const initialState = {
  todoLabel: '',
  todoIsComplete: false
}




//ex.{type:CHNAGE_LABEL, payload:foo} //action
//ex.{type: CHANGE_ISCOMPLETED, payload:true}//action
const reducer = (state, action) => {

  switch (action.type) {
    case CHANGE_LABEL:
      return { ...state, todoLabel: action.payload }
    case CHANGE_IS_COMPLETE:
      return { ...state, todoIsComplete: action.payload }

    default:
      return state
  }
}

export default function TodoForm({ createNewTodo }) {
  const [state, dispatch] = useReducer(reducer, initialState)


  const onLabelChange = ({ target: { value } }) => {
    dispatch({ type: CHANGE_LABEL, payload: value })
  }


  const onIsCompleteChange = ({ target: { checked } }) => {

    dispatch({ type: CHANGE_IS_COMPLETE, payload: checked })
  }


  const resetForm = () => {
    dispatch({ type: CHANGE_LABEL, payload: "" })
    dispatch({ type: CHANGE_IS_COMPLETE, payload: false })
  }

  const onNewToDo = evt => {
    evt.preventDefault()
    createNewTodo(state.todoLabel, state.todoIsComplete)
    resetForm()


  }

  return (
    <form id="todoForm" onSubmit={onNewToDo} >
      <h3>New Todo Form</h3>
      <label><span>Todo label:</span>
        <input
          onChange={onLabelChange}
          value={state.todoLabel}
          type='text'
          name='todoLabel'
          placeholder='Type label'
        />
      </label>
      <label><span>Is completed:</span>
        <input
          onChange={onIsCompleteChange}
          checked={state.todoIsComplete}
          type='checkbox'
          name='todoIsCompleted'
        />
      </label>
      <label><span>Create todo:</span>
        <input
          type='submit'
          value='Do it!'
        // disabled={!state.todoLabel.trim()}
        />
      </label>
    </form>
  )
}
