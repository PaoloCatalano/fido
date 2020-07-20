import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "informazioni",
    url: "/about/",
  },
  {
    id: 3,
    text: "dogs",
    url: "/dogs/",
  },
]
//mappare ogni elemento dell'array data
const tempLinks = data.map( link => {
    return (
        <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
        </li>
    )
})

export default ({styleClass}) => {
    return (
        <ul className={`page-links ${styleClass ? styleClass : ""}`}>
            {tempLinks}
        </ul>
    )
}