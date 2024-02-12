

export const Label = ({color}) => {
  return (
    <span className={`w-8 h-2 mr-2 rounded ${color.color}`}></span>
  )
}

const labely = () => {
  return (
    <aside className="flex mb-1.5">
      <span className="w-8 h-2 mr-2 rounded bg-fuchsia-700"></span>
      <span className="w-8 h-2 mr-2 rounded bg-green-600"></span>
      <span className="w-8 h-2 mr-2 rounded bg-blue-700"></span>
      <span className="w-8 h-2 mr-2 rounded bg-yellow-600"></span>
      <span className="w-8 h-2 mr-2 rounded bg-orange-600"></span>
    </aside>
  )
}
