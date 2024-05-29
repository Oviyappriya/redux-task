import * as types from "./actionType";
export const getCartTotal=()=>({
    type:types.GET_TOTAL,
})
export const Increase=(id)=>({
    type:types.INCREASE,
    payload:id,
})
export const Decrease=(id)=>({
    type:types.DECREASE,
    payload:id,
})
export const Remove=(id)=>({
    type:types.REMOVE,
    payload:id,
})
export const ClearItem=()=>({
    type:types.CLEAR_ITEMS,
})
export const DisplayItem=(id)=>({
    type:types.DISPLAY_ITEMS,
    payload:id,
})