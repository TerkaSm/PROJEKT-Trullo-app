import { Card } from "../Card/Card"
import { AddCardform } from "../AddCardForm/AddCardForm"
import { useState } from "react"
import { Overlay } from "../Overlay/Overlay"
import { X } from "react-feather"
import { Edit2 } from "react-feather"

export const List = ({id, title, cards, handleDeleteList, handleEditList}) => {
  const [addCards, setAddCards] = useState(cards || [])
  const [iconsVisible, setIconsVisible] = useState(false)
  const [overlayVisible, setOverlayVisible] = useState(false)
  const [titleValue, setTitleValue] = useState(title)
  const [isTitleEditing, setIsTitleEditing] = useState(false)

  const handleAddCard = (item) => {
    const newCard = {
      item, 
      id: Math.random()
    }

    const nextCards = [...addCards, newCard]
    setAddCards(nextCards)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('nový název listu', titleValue)
    setTitleValue(titleValue)
    handleEditList(titleValue)
    setIsTitleEditing(!isTitleEditing)
  }

  return (
    <section 
      
      key={id} className="list relative">
      <header
        onMouseEnter={(e) => setIconsVisible(!iconsVisible)} 
        onMouseLeave={(e) => setIconsVisible(!iconsVisible)} 
      >
        {isTitleEditing ? (
          <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={titleValue} 
            onChange={e => {
              setTitleValue(e.target.value)
            }}
            className="p-2 mb-2"
            />
        </form>
        ) : (
          <h3 className="font-bold p-1 pb-2 leading-none text-gray-100 uppercase">{titleValue}</h3>
        )}
      
        {iconsVisible && (
          <span className="flex absolute top-1 right-1 items-center gap-1">
            <Edit2 onClick={() => setIsTitleEditing(!isTitleEditing)} 
              color="white"
              size={24}/>
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
