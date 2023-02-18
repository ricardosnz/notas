const initialTodoState = {
  todos: [],
  searchValue: '',
  deleted: false,
  created: false,
  indexTodo: '',
  newTodo: ''
};

 
function todoReducer(state, action) {
  switch (action.type) {
    case 'SET_TODOS':
      return { ...state, todos: action.payload };
    case 'SET_SEARCH_VALUE':
      return { ...state, searchValue: action.payload };
    case 'SET_DELETED':      
      return { ...state, deleted: !state.deleted };
    case 'SET_CREATED':
      return { ...state, created: action.payload };
    case 'SET_INDEX_TODO':
      return { ...state, indexTodo: action.payload };
    case 'SET_NEW_TODO':
      return { ...state, newTodo: action.payload };
    case 'ADD_TODO':
      const newTodo = {
        id: state.todos.length + 1,
        title: action.payload,
        completed: false,
      }
      return { ...state, todos: [...state.todos, newTodo] };
    case 'DELETE_TODO':
      return { ...state, todos: state.todos.filter((todo) => todo.id !== state.indexTodo) };
    case 'TOGGLE_COMPLETED_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo;
        }),
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const useLocalStorage = (key, initialValue) => {
  const localStorageKey = localStorage.getItem(key);
  let parsedKey;

  if (!localStorageKey) {
    localStorage.setItem(key, JSON.stringify(initialValue));
    parsedKey = initialValue;
  } else {
    parsedKey = JSON.parse(localStorageKey);
  }

  const [content, setContent] = useState(parsedKey);

  const saveContent = (newContent) => {
    const parsedContent = JSON.stringify(newContent);
    localStorage.setItem(key, parsedContent);
    setContent(newContent);
  };

  return [content, saveContent];
};

function TodoApp() {  
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);

  const [toggleModal, setToggleModal] = useState(false)

  useEffect(() => {
    const localStorageTodos = localStorage.getItem("TODOV1");
    if (!localStorageTodos) return
    const parseTodos = JSON.parse(localStorageTodos)
    dispatch({type: 'SET_TODOS', payload: parseTodos })    
  },[])

  const handleChangeSearch = (value) => {
    dispatch({type:'SET_SEARCH_VALUE', payload: value})
  }

  const handle 

  const handleCompletedTodo = (todoCompleted) => {
    dispatch({type:'TOGGLE_COMPLETED_TODO', payload: todoCompleted })
  };  

  const handleConfirmDelete = (todoDelete) => {
    dispatch({type:'SET_DELETED'})
    dispatch({type: 'SET_INDEX_TODO', payload: todoDelete.id})
  };
  const handleDeleteTodo = (confirm) => {
    if (confirm) dispatch({type: 'DELETE_TODO'})
    dispatch({type:'SET_DELETED'})
  };
  
  const handleConfirmTodo = () => {    
    dispatch({type:'SET_CREATED'})
  };
  const handleCreateTodo = () => {
    dispatch({type: 'ADD_TODO', payload: state.newTodo})
    handleConfirmTodo()
  }

  const handleNewTodo = (value) => {
    dispatch({type: 'SET_NEW_TODO', payload: value})
  }

  return {

  }
}





// created, deleted, handleCompletedTodo, handleConfirmDelete, handleConfirmTodo, handleCreateTodo, handleDeleteTodo, indexTodo, listTodos, searchValue, setNewTodo, setSearchValue, setTodos, todos,

