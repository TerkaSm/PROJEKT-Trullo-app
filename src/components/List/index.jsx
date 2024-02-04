import { Card } from "../Card"
import { AddCardform } from "../AddCardForm"
import { useState } from "react"

export const List = ({id, title}) => {
  const [cards, setCards] = useState([])

  const handleAddItem = (item) => {
    const newCard = {
      item, 
      id: Math.random()
    }

    const nextCards = [...cards, newCard]
    setCards(nextCards)
  }

  return (
    <section key={id} className="list">
      <header>
        <h3 className="font-bold p-1 leading-none text-gray-100 uppercase">{title}</h3>
      </header>

      <ul>
      {cards.map(({item, id}) => (
        <Card item={item} key={id} />
      ))}
      </ul>
      <AddCardform handleAddItem={handleAddItem} />
    </section>
  
  )
}


// {/* overlay */}
// <div id="overlay" className="hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-10"></div>
