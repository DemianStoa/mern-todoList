export const ACTIONS = {
    SET_LISTS: 'set-lists',
    ADD_LIST: 'add-list',
    EDDIT_LIST: 'edit-list',
    DELETE: 'delete'
  }
  
 export  default (state, { type, payload }) => {
    switch(type) {
      case ACTIONS.SET_LISTS:
        return payload.data 
  
      case ACTIONS.ADD_LIST: 
            state.push(payload.list)
            return state
  
      case ACTIONS.EDDIT_LIST: 
          state.todoLists = state.todoLists.filter((list) => {
                    if(list._id === payload.list._id) return payload.list
                    return list
                })
                return state
      case ACTIONS.DELETE: 
         const index = state.todoLists.indexOf(payload.list)
         delete state.todoLists[index]
         return state
        } 
  }