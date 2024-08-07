import {FC, useState} from 'react'
import { ITabs } from './App'
import PizzaContent from './PizzaContent'

interface IHeaderProps {
    tabs:ITabs []
}
// any, unknown, void - tybescript type
// <> - generic type (number, boolean, T,K)
const Header: FC<IHeaderProps> = (props) => {
    const [content, setContent] = useState<string>("Pizza")

    const handleClick = (text: string) => {
        setContent(text)
    }
  return (
    <div>
      {props.tabs.map(el => {
        return <a onClick={() => {handleClick(el.name)}} href='#'>{el.name}</a>
      })}
      <br />
      <br />
      <div>
        {content == 'Pizza' && <PizzaContent/>}
        {content == 'Drinks' && <h2>Drinks Content</h2>}
        {content == 'Desserts' && <h2>Desserts Content</h2>}
      </div>
    </div>
  )
}

export default Header
