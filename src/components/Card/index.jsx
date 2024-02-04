export const Card = ({item, id}) => {
  return (
    <li key={id} className="card">
      <figure className="flex items-center max-h-52 sm:max-h-40 border-b overflow-hidden rounded-t"><img src="./img/godzilla.jpg" alt="" /></figure>
      <div className="p-3">
        <p contentEditable>{item}</p>
      </div>
    </li>
  )
}



// různé varianty karet 

const xxx = () => {
  return (
    <section className="list">
      <header>
        <h3 className="font-bold p-1 leading-none text-gray-100 uppercase">{title}</h3>
      </header>
      <ul>
        {/* card with foto */}
        <li className="card">
          <figure className="flex items-center max-h-52 sm:max-h-40 border-b overflow-hidden rounded-t"><img src="./img/hachiboy.png" alt="" /></figure>
          <div className="p-3">
            <p> Učit se React </p>
          </div>
        </li>

        {/* popup */}
        <li className="card relative z-20">
          <div className="p-3">
            <p> Kouknout na tutoriál o TypeScript </p>
          </div>
          {/* editation */}
          <ul className="hidden w-40 text-sm ml-2 text-white font-semibold sm:absolute top-0 left-80 sm:m-0" id="popup">
            <li className="flex">
              <a className="flex items-center px-3 py-2 mb-1.5 bg-black bg-opacity-60 hover:bg-opacity-100 rounded transform hover:translate-x-1 transition duration-75 ease-in" href="#">
                <svg className="w-6 h-6 mr-1.5"><path className="fill-current" d="m19.71 8.04-2.34 2.33-3.75-3.75 2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41ZM3 17.25 13.06 7.18l3.75 3.75L6.75 21H3v-3.75ZM16.62 5.04l-1.54 1.54 2.34 2.34 1.54-1.54-2.34-2.34ZM15.36 11 13 8.64l-9 9.02V20h2.34l9.02-9Z" fill="#fff" /></svg>
                Editovat labely
              </a>
            </li>
            <li className="flex">
              <a className="flex items-center px-3 py-2 mb-1.5 bg-black bg-opacity-60 hover:bg-opacity-100 rounded transform hover:translate-x-1 transition duration-75 ease-in" href="#">
                <svg className="w-6 h-6 mr-1.5"><path className="fill-current" d="m19.71 8.04-2.34 2.33-3.75-3.75 2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41ZM3 17.25 13.06 7.18l3.75 3.75L6.75 21H3v-3.75ZM16.62 5.04l-1.54 1.54 2.34 2.34 1.54-1.54-2.34-2.34ZM15.36 11 13 8.64l-9 9.02V20h2.34l9.02-9Z" fill="#fff" /></svg>
                Editovat tagy
              </a>
            </li>
            <li className="flex">
              <a className="flex items-center px-3 py-2 mb-1.5 bg-black bg-opacity-60 hover:bg-opacity-100 rounded transform hover:translate-x-1 transition duration-75 ease-in" href="#">
                <svg className="w-6 h-6 mr-1.5"><path className="fill-current" d="m19.71 8.04-2.34 2.33-3.75-3.75 2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41ZM3 17.25 13.06 7.18l3.75 3.75L6.75 21H3v-3.75ZM16.62 5.04l-1.54 1.54 2.34 2.34 1.54-1.54-2.34-2.34ZM15.36 11 13 8.64l-9 9.02V20h2.34l9.02-9Z" fill="#fff" /></svg>
                Editovat kartu
              </a>
            </li>
          </ul>
        </li>

        <li className="card">
          <div className="p-3">
            {/* labels */}
            <aside className="flex mb-1.5">
              <span className="w-8 h-2 mr-2 rounded bg-fuchsia-700"></span>
              <span className="w-8 h-2 mr-2 rounded bg-green-600"></span>
              <span className="w-8 h-2 mr-2 rounded bg-blue-700"></span>
              <span className="w-8 h-2 mr-2 rounded bg-yellow-600"></span>
              <span className="w-8 h-2 mr-2 rounded bg-orange-600"></span>
            </aside>
            <p> Kouknout na tutoriál o DaisyUI </p>
          </div>
        </li>

        <Card text="Zprovoznit pnpm"/>
        <Card text="Učit se React"/>
        <li className="card">
          <div className="p-3">
            <p> Zjistit jak použít Firebase </p>
          </div>
          {/* tags */}
          <footer className="flex m-2 text-white">
            <a className="px-2 py-0.5 mr-1.5 bg-gray-500 opacity-50 hover:opacity-100 rounded" href="#">učení</a>
            <a className="px-2 py-0.5 mr-1.5 bg-gray-500 opacity-50 hover:opacity-100 rounded" href="#">backend</a>
          </footer>
        </li>

        <Card text="Učit se JavaScript"/>
      </ul>
      <footer>
        <a className="flex p-1 pb-2.5 text-gray-200 hover:text-gray-50" href="#">
          <svg className="text-gray-200 fill-current" width="24" height="24" fill="current"><path d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2Z" fill="#fff" /></svg>
          <span className="pl-1">Add a card...</span>
        </a>
        <form action="">
          <textarea className="w-full p-3 border-t border-l outline-none roundered shadow-inner" rows="3"></textarea>
          <div className="mt-1.5">
            <Button>+ Add card</Button>
          </div>
        </form>
      </footer>
    </section>
  
  )
}
// card s foto

{/* <li className="card">
  <figure className="flex items-center max-h-52 sm:max-h-40 border-b overflow-hidden rounded-t"><img src="./img/hachiboy.png" alt="" /></figure>
  <div className="p-3">
    <p> Učit se React </p>
  </div>
</li> */}
