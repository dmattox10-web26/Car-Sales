export const removeFeature = id => {
    console.log(id)
    return { type: 'REMOVE_FEATURE', payload: id }
}

export const buyItem = id => {
    console.log(id)
    return { type: 'BUY_ITEM', payload: id }
}