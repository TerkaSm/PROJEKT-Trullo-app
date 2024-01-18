import { Card } from "../Card"
import { AddCardform } from "../AddCardForm"

export const List = ({title, id, cards}) => {
  return (
    <section key={id} className="list">
      <header>
        <h3 className="font-bold p-1 leading-none text-gray-100 uppercase">{title}</h3>
      </header>

      <ul>
      {cards.map((card, text, id) => {
        return <Card text={card.text} key={card.id}/>
      })}
      </ul>
      <AddCardform />
    </section>
  
  )
}


// {/* overlay */}
// <div id="overlay" className="hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-10"></div>
