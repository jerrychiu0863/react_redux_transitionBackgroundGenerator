import C from '../constants/action-types';

export default function colorLists(state=[], action) {
    switch(action.type) {
        case C.SAVE_DESIGN:
            const {color, colorDegree, fontFamily, fontSize, fontColor, typing, id, date, timestamp} = action.payload;
            
            return [...state, {color, colorDegree, fontFamily, fontSize, fontColor, typing, id, date, timestamp, isActive: false}]
            
        case C.ACTIVE_COLOR_LIST:
            const { colorId } = action.payload;
            return state.map( s => (
                s.id !== colorId ? {...s, isActive: false} : {...s, isActive: true}))
            
        case C.DELETE_DESIGN:
            const updatedLists = state.filter(s => s.id !== action.payload);
            return updatedLists
            
        default:
            return state
    }
}