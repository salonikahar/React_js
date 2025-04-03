export const loadState =()=>{
    try{
        let data = localStorage.getItem("employee");
        if (data === null){
            return undefined;
        }
        else {
            return JSON.parse(data);
        }
    }
    catch (err){
        console.log('data not load')
        return undefined;
    }
}

export const saveState = (state) => {
    try{
        localStorage.setItem('employee' , JSON.stringify(state))
    }
    catch (err){
        console.log('data not set ')
    }
}