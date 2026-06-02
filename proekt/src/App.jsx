import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
const App = () => {
  return (
    <div className='Hero'>
      <div>
      <Header />      
      </div>
         <div className="cards-container">
      <Card
        image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454"
        title="Coffee"
        text="9.99$ "
      />
      <Card
        image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454"
        title="Coffee"
        text="9.99$ "
      />

       <Card
        image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454"
        title="Coffee"
        text="9.99$ "
      />
         <Card
        image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454"
        title="Coffee"
        text="9.99$ "
      />
    </div>
    </div>
  )
}

export default App