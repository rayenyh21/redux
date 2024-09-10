import{ADD, DELETE,UPDATE, COMPLETE} from './type'


export const addTodo =(input)=> {
    return { type :ADD,
        payload:input 
    };
};

export const deleteTodo =(id)=> {
    return { type :DELETE,
        payload:id
    };
};

export const completeTodo =(id)=> {
    return { type :COMPLETE,
        payload:id
    };
};

export const updateTodo =(edit,id)=> {
    return { type :UPDATE,
        payload:{edit,id}
    };
};
