import { Card } from "../Card/Card"
import { AddCardform } from "../AddCardForm/AddCardForm"
import { useState } from "react"
import { Overlay } from "../Overlay/Overlay"

export const List = ({id, title, cards}) => {
  const [addCards, setAddCards] = useState(cards || [])
  
  const [overlayVisible, setOverlayVisible] = useState(false)

  const handleAddItem = (item) => {
    const newCard = {
      item, 
      id: Math.random()
    }

    const nextCards = [...addCards, newCard]
    setAddCards(nextCards)
  }



  return (
    <section key={id} className="list">
      <header>
        <h3 className="font-bold p-1 leading-none text-gray-100 uppercase">{title}</h3>
      </header>
      {/* {overlayVisible && <Overlay />} */}
      <ul>
      {!addCards ? null : (
        (addCards.map(({item, id, labels, tags}) => (
          <Card overlayVisible={overlayVisible} setOverlayVisible={setOverlayVisible} item={item} key={id} labels={labels} tags={tags}/>
        )))
      )}
      </ul>
      <AddCardform handleAddItem={handleAddItem} />
    </section>
  
  )
}
