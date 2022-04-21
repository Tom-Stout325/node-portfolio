import { Link } from "react-router-dom"

export const Clients = () => {
  return (
    <>
    <div>Clients</div>
    <ul>
      <li><Link to='/clients/100'>100</Link></li>
      <li><Link to='/clients/101'>101</Link></li>
      <li><Link to='/clients/102'>102</Link></li>

    </ul>
    </>
  )
}
