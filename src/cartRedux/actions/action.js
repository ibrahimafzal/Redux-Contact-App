export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }     
}

export const DELETE = (id) => {
    return {
        type: "REMOVE_CART",
        payload: id
    }     
}

// Decrease quantity from "Items detail page"

export const REMOVE = (item) => {
    return {
        type: "REMOVE_ONE",
        payload: item
    }     
}


