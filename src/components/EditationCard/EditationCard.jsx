export const EditationCard = () => {
    return (
      <div className="max-w-4/5 max-h-4/5 p-7 bg-slate-200 rounded absolute top-auto left-auto z-50">
        <h1 className="pb-3">Změnit text</h1>
        <form >
          <input className="p-3" type="text" placeholder="ukol 1" />
        </form>
        <h1 className="pt-3 pb-2">Editovat štítky</h1>
        <aside className="flex mb-1.5">
          <span className="w-8 h-2 mr-2 rounded bg-fuchsia-700"></span>
          <span className="w-8 h-2 mr-2 rounded bg-green-600"></span>
          <span className="w-8 h-2 mr-2 rounded bg-blue-700"></span>
          <span className="w-8 h-2 mr-2 rounded bg-yellow-600"></span>
          <span className="w-8 h-2 mr-2 rounded bg-orange-600"></span>
          <span className="w-8 h-2 mr-2 rounded bg-red-700"></span>
        </aside>
        <h1 className="py-3">Editovat tagy</h1>
        <form className="pb-3">
          <label htmlFor="">
            <input className="p-3" type="text" placeholder="+ přidat tag" />
          </label>
        </form>
        <div className="flex gap-1">
          <span className="text-white px-2 py-0.5 mr-1.5 bg-gray-500 opacity-50 hover:opacity-100 rounded">tag 1</span>
          <span className="text-white px-2 py-0.5 mr-1.5 bg-gray-500 opacity-50 hover:opacity-100 rounded">tag 2</span>
          <span className="text-white px-2 py-0.5 mr-1.5 bg-gray-500 opacity-50 hover:opacity-100 rounded">tag 3</span>
        </div>
      </div>
    )
}

const xxx = () => {
  return (
    <ul className="w-40 text-sm ml-2 text-white font-semibold sm:absolute top-0 left-80 sm:m-0" id="popup">
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
  )
}