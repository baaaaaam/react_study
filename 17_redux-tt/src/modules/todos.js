import {createAction,handleActions} from 'redux-actions'
import produce from 'immer'

//액션타입정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

//액션 생성 함수 
export const changeInput = createAction(CHANGE_INPUT,input =>input);  


let id = 3;
export const insert = createAction(INSERT,text =>({
    id: id++,
    text,
    done: false
}));  

export const toggle = createAction(TOGGLE,id =>id);  

export const remove = createAction(REMOVE,id =>id);  


//초기 상태 및 리듀서 함수 생성
const initialState = {
    input:'',
    todos: [
        {
            id:1,
            text:'리덕스 기초 배우기',
            done: true
        },
        {
            id:2,
            text:'리액트와 리덕스 기초 배우기',
            done: false
        }

    ]
}

const todos = handleActions (
    {
        [CHANGE_INPUT]: (state, {payload:input}) => produce(state, draft => { draft.input = input;}),
        [INSERT]: (state, {payload:todo}) => produce(state, draft => {draft.todos.push(todo);}),
        [TOGGLE]: (state, {payload:id}) => produce(state, draft =>{const todo = draft.todos.find(todo.id === id);
            todo.done = !todo.done
        }),
        [REMOVE]: (state, {payload:id}) => produce(state, draft =>{const index = draft.todos.findIndex(todo => todo.id ===id);
            draft.todos.splice(index ,1);
        }),
    },
    initialState,
);


export default todos;