import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    toDoArray : [],
    nexId : 1
}

const ToDoList = createSlice({
    name:'TO_DO_LIST',
    initialState,
    reducers : {
        addItem : (state,action) => {
            state.toDoArray.push({
                id:state.nexId,
                text:action.payload,
                complated:false
            })
            state.nexId = state.nexId + 1
        },
        deleteItem : (state,action) => {
            state.toDoArray = state.toDoArray.filter((item)=>item.id!==action.payload)
        },
        updateItem : (state,action)=>{
            state.toDoArray = state.toDoArray.map((item)=>item.id===action.payload?{...item,complated:!item.complated}:item)
        }
        
    }
})

export const {addItem,deleteItem,updateItem} = ToDoList.actions
export default ToDoList.reducer