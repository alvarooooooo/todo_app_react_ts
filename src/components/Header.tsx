import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>todo<img
        style={{ width: '60px', height: 'auto' }}
        src='https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg'/>
      </h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
