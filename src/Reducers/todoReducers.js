const initialData={
    list:[]
}

const todoReducers=(state=initialData,action)=>{
    switch(action.type){
        case "ADD_TODO":
        
            const {id,data}=action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                    id:id,
                    data:data
                }]
            }

            case "DELETE_TODO":
                const NewList=state.list.filter((elem)=>elem.id !== action.id)
                return{
                    ...state,
                    list:NewList
                }
                case "REMOVE_TODO":
                    return{
                        ...state,
                        list:[]

                    }
                   

            default:return state;
        }
    }


export default todoReducers;