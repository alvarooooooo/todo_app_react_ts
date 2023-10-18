export interface Todo { // más fácil para extender interface en comparacion con type
  id: string
  title: string
  completed: boolean
}

// Buena práctica por si los campos en Todo cambian de tipo
export type TodoId = Pick<Todo, 'id'> // PREGUNTA: Pick devuelve un objeto TodoId con solo el campo id? Por eso más adelante debemos usar { id } = TodoId ???
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]
