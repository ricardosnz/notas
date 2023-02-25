interface Objecto<T>{
  name: T
  getName(): T
}


const retornTipo<T> = (msg:T, nombre:T) => {
  
  return 'Un mensaje' + msg
}

