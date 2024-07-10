import React from 'react'
import Header from './Header';

 export interface ITabs {
  name:string;
 
}

const tabs: ITabs[] = [
  {
    name:'Pizza',
  },
  {
    name:'Drinks',
  },
  {
    name:'Desserts',
  },
]

const App: React.FC = () => {
  return (
    <div>
      <Header tabs={tabs}/>
    </div>
  )
}

export default App
