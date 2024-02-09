import { Card } from "../Card"
import { AddCardform } from "../AddCardForm"
import { useState } from "react"
import { Overlay } from "../Overlay"

export const List = ({id, title, cards, editcard, setEditcard}) => {
  const [addCards, setAddCards] = useState(cards)
  const [editCard, setEditCard] = useState(false)
  const [overlayVisible, setOverlayVisible] = useState(false)

  console.log(cards)

  const handleAddItem = (item) => {
    const newCard = {
      item, 
      id: Math.random()
    }

    const nextCards = [...addCards, newCard]
    setAddCards(nextCards)
  }

  const handleClick = () => {
    setEditCard(!editCard)
    setOverlayVisible(!overlayVisible)
  }

  return (
    <section key={id} className="list">
      <header>
        <h3 className="font-bold p-1 leading-none text-gray-100 uppercase">{title}</h3>
      </header>
      {!overlayVisible ? null : <Overlay />}
      <ul>
      {addCards.map(({item, id}) => (
        <Card onClick={handleClick} item={item} key={id} editCard={editCard}/>
      ))}
      </ul>
      <AddCardform handleAddItem={handleAddItem} />
    </section>
  
  )
}
