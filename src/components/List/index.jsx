import { Card } from "../Card"
import { AddCardform } from "../AddCardForm"
import { useState } from "react"
import { Overlay } from "../Overlay"

export const List = ({id, title, cards}) => {
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
    console.log('kliknuto')
    setOverlayVisible(!overlayVisible)
    setEditCard(!editCard)
  }

  return (
    <section key={id} className="list">
      <header>
        <h3 className="font-bold p-1 leading-none text-gray-100 uppercase">{title}</h3>
      </header>
      {overlayVisible && <Overlay />}
      <ul>
      {addCards.map(({item, id, labels}) => (
        <Card handleClick={handleClick} item={item} key={id} labels={labels} editCard={editCard}/>
      ))}
      </ul>
      <AddCardform handleAddItem={handleAddItem} />
    </section>
  
  )
}
