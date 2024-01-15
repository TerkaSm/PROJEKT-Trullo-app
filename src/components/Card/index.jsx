export const Card = ({text}) => {
  return (
    <li className="card">
          <figure className="flex items-center max-h-52 sm:max-h-40 border-b overflow-hidden rounded-t"><img src="./img/godzilla.jpg" alt="" /></figure>
          <div className="p-3">
            <p contentEditable>{text}</p>
          </div>
        </li>
  )
}



// card s foto

{/* <li className="card">
  <figure className="flex items-center max-h-52 sm:max-h-40 border-b overflow-hidden rounded-t"><img src="./img/hachiboy.png" alt="" /></figure>
  <div className="p-3">
    <p> Učit se React </p>
  </div>
</li> */}
