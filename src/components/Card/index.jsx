import { CardImage } from "../CardImage"
import { EditationCard } from "../EditationCard"
import { Label } from "../Label"
import { Tag } from "../Tag"

export const Card = ({item, id, editCard}) => {
  const className = !editCard ? 'card relative z-20' : 'card';

  console.log(editCard)

  return (
    <li key={id} className={className}>
      <figure className="flex items-center max-h-52 sm:max-h-40 border-b overflow-hidden rounded-t">
        <CardImage />
      </figure>
      <div className="p-3">
        <aside className="flex mb-1.5">
          <Label />
        </aside>
        <p>{item}</p>
      </div>
      <footer className="flex m-2 text-white">
        <Tag>tag</Tag>
      </footer>
      {!editCard ? null : <EditationCard />}
    </li>
  )
}

