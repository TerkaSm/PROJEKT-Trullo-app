import { CardImage } from "../CardImage"
import { EditationCard } from "../EditationCard"
import { Label } from "../Label"
import { Tag } from "../Tag"

export const Card = ({item, id, labels, editCard, handleClick}) => {
  const className = !editCard ? 'card' : 'card relative z-20';
  console.log(labels)
  return (
    <li onClick={handleClick} key={id} className={className}>
      <figure className="flex items-center max-h-52 sm:max-h-40 border-b overflow-hidden rounded-t">
        <CardImage />
      </figure>
      <div className="p-3">
        <aside className="flex mb-1.5">
          {/* {labels.map((className, index) => (
            <Label key={index} className={className} />
          ))} */}
          <Label className={className} />
        </aside>
        <p>{item}</p>
      </div>
      <footer className="flex m-2 text-white">
        <Tag>tag</Tag>
      </footer>
      {editCard && <EditationCard />}
    </li>
  )
}

