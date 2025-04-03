import { ADD_EMP, DELETE_EMP, VIEW_EMP } from "./Action";

const intialState = {
    employee: [{
        name: 'saloni',
        age: 18,
    },
    {
        name: 'sam',
        age: 20,
    }],
}

const EmpReducer = (state = intialState, action) => {
    switch (action.type) {
        case DELETE_EMP:
            return {
                ...state.employee,
                employee: state.employee.filter((v, i) => i !== action.payload),
            };
        case ADD_EMP:
            return {
                ...state.employee,
                employee: [...state.employee, action.payload],
            };
        case VIEW_EMP:
            return state;
       
        default:
            return state;
    }
}

export default EmpReducer;

