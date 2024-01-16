import { Button } from "../Button"
import { Card } from "../Card"
import { data } from "../../../data"

export const List = ({title, id, cards}) => {
  return (
    <section className="list">
      <header>
        <h3 className="font-bold p-1 leading-none text-gray-100 uppercase">{title}</h3>
      </header>

      <ul>
      {cards.map((card, text, id) => {
        console.log(cards);
        <Card text={card.text} key={card.id}/>
      })}
      </ul>

      <footer>
        <a className="flex p-1 pb-2.5 text-gray-200 hover:text-gray-50" href="#">
          <svg className="text-gray-200 fill-current" width="24" height="24" fill="current"><path d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2Z" fill="#fff" /></svg>
          <span className="pl-1">Add a card...</span>
        </a>
        <form action="">
          <textarea className="w-full p-3 border-t border-l outline-none roundered shadow-inner" rows="3"></textarea>
          <div className="mt-1.5">
            <Button>Add card</Button>
          </div>
        </form>
      </footer>
    </section>
  
  )
}


// {/* overlay */}
// <div id="overlay" className="hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-10"></div>
