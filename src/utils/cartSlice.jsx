import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{              //mutating the state here
            state.items.push(action.payload);
        },
        removeIem:(state)=>{             //here writing action is optional
            state.items.pop();           // top item is being popped here
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
    },
});

export const{addItem,removeItem,clearCart}=cartSlice.actions;     //actions that are being wanted are exported from here 
 
export default cartSlice.reducer;           //reducers is being exported