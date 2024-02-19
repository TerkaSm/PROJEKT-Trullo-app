import { Card } from "../Card/Card"
import { AddCardform } from "../AddCardForm/AddCardForm"
import { useState } from "react"
import { Overlay } from "../Overlay/Overlay"
import { X } from "react-feather"

export const List = ({id, title, cards, handleDeleteList}) => {
  const [addCards, setAddCards] = useState(cards || [])
  const [closeIconVisible, setCloseIconVisible] = useState(false)
  const [overlayVisible, setOverlayVisible] = useState(false)

  const handleAddCard = (item) => {
    const newCard = {
      item, 
      id: Math.random()
    }

    const nextCards = [...addCards, newCard]
    setAddCards(nextCards)
  }


  return (
    <section 
      onMouseEnter={(e) => setCloseIconVisible(!closeIconVisible)} 
      onMouseLeave={(e) => setCloseIconVisible(!closeIconVisible)} 
      key={id} className="list relative">
      <header>
        <h3 className="font-bold p-1 leading-none text-gray-100 uppercase">{title}</h3>
        {closeIconVisible && (
          <span className="absolute top-1 right-1">
            <X onClick={() => handleDeleteList(id)} 
            color="white"
            size={36}/>
          </span>)}
      </header>
      {/* {overlayVisible && <Overlay />} */}
      <ul>
      {!addCards ? null : (
        (addCards.map(({item, id, labels, tags}) => (
          <Card overlayVisible={overlayVisible} setOverlayVisible={setOverlayVisible} item={item} key={id} labels={labels} tags={tags}/>
        )))
      )}
      </ul>
      <AddCardform handleAddCard={handleAddCard} />
    </section>
  
  )
}
