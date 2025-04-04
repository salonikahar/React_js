export const ADD_EMP = 'ADD-EMP';
export const VIEW_EMP = 'VIEW_EMP';
export const DELETE_EMP = 'DELETE_EMP';
export const EDIT_EMP = 'EDIT_EMP';

export const View_emp = () => ({
    type: VIEW_EMP,
})

export const addEmp = (empData) => ({
    type: ADD_EMP,
    payload : empData,
})

export const deleteEmpData = (pos) => ({
    type : DELETE_EMP,
    payload : pos
})

export const editEmpData = (employeeData,pos) =>({
    type : EDIT_EMP,
    payload : {
        pos , employeeData
    }
})