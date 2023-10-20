import { type TODO_FILTERS } from './consts'

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

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS] // keyof typeof TODO_FILTERS: utiliza unas de las keys del tipo del TODO_FILTER

/**
 * Union of literal types:
 * type Greeting = "Hello" | "Hi" | "Welcome"
 *
 * -> typeof operator works on a value (such as a variable, constant, parameter, function, class declaration, or enum) to infer the type of a value
 *
 * -> keyof operator works on the resulting object type and provides a union of all string literals that make up its property names
 *
 *
 *    const person = {
 *      name: 'John Doe',
 *      age: 29,
 *      status: 'active'
 *    }
 *
 *    type Person = typeof person // { name: string, age: number, status: string}
 *    type PersonProps = keyof Person // "name" | "age" | "status"
 *
 *    // the same as
 *    type PersonProps = keyof typeof person // "name" | "age" | "status"
 *
 * Using the keyof operator alone won't work in this instance, because it cannot be used directly on a value.
 *
 *    type PersonProps = keyof person // Compiling error
 *
 * However, if the type of the obj is already known
 *
 *    type Person = {
 *      name: string,
 *      age: number,
 *      status: string
 *    }
 *
 *    type PersonProps = keyof Person // "name" | "age" | "status"
 *
 */
