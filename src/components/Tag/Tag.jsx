export const Tag = ({children}) => {
  return (
    <a className="px-2 py-0.5 mr-1.5 bg-gray-500 opacity-50 hover:opacity-100 rounded" href="#">
      {children}
    </a>
  )
}

const Ttag = ({text}) => {
  return (
    <a className="px-2 py-0.5 mr-1.5 bg-gray-500 opacity-50 hover:opacity-100 rounded" href="#">
      {text.text}
    </a>
  )
}

const tagy = () => {
  return (
    <footer className="flex m-2 text-white">
      <a className="px-2 py-0.5 mr-1.5 bg-gray-500 opacity-50 hover:opacity-100 rounded" href="#">učení</a>
      <a className="px-2 py-0.5 mr-1.5 bg-gray-500 opacity-50 hover:opacity-100 rounded" href="#">backend</a>
    </footer>
  )
}
