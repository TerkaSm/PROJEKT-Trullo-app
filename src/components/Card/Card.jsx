import { CardImage } from "../CardImage/CardImage"
import { EditationCard } from "../EditationCard/EditationCard"
import { Label } from "../Label/Label"
import { Tag } from "../Tag/Tag"

export const Card = ({item, id, labels, tags, editCard, handleClick}) => {
  const className = !editCard ? 'card' : 'card relative z-20';
  console.log(labels)
  console.log(tags)
  return (
    <li onClick={handleClick} key={id} className={className}>
      <figure className="flex items-center max-h-52 sm:max-h-40 border-b overflow-hidden rounded-t">
        <CardImage />
      </figure>
      <div className="p-3">
        <aside className="flex mb-1.5">
          {labels && (
            labels.map((color, index) => (
              <Label key={index} color={color} />
            ))
          )}
        </aside>
        <p>{item}</p>
      </div>
      <footer className="flex m-2 text-white">
        {tags && (
          tags.map((text, index) => (
            <Tag key={index} text={text} />
          ))
        )}
      </footer>
      {editCard && <EditationCard />}
    </li>
  )
}

