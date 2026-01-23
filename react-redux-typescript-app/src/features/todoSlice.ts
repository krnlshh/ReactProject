import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Todo { id: number; text: string; completed: boolean; } // added type of properties

const initialState = { todo: [] as Todo[] } // provided array type 

export const todoSlice = createSlice({
    name:'todoApp',
    initialState,
    reducers : {
        addToDo : (state,action:PayloadAction<string>) => {// give me understanding of payloadAction<string>
            state.todo.push({ // we are pushing properites in to array 
                id:Date.now(), // id is static 
                text:action.payload, // text will come from ui
                completed:false // completed default false 
            }) 
        },
        toggleToDo: (state, action: PayloadAction<number>) => {// give me understanding of PayloadAction<number>
            const todo = state.todo.find(todo => todo.id === action.payload);// checking id match then collect that todo item
            if (todo) { 
             todo.completed = !todo.completed; // if status is completed then toggle it 
            }
        },
        removeToDo : (state,action: PayloadAction<number>) => {
            state.todo = state.todo.filter(item=> item.id !== action.payload); //if id not match that items should be filter in todolist 
             
        }


    }
})
export const {addToDo,toggleToDo,removeToDo} = todoSlice.actions
export default todoSlice.reducer