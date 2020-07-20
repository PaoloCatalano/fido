import React from "react"
import { FaBone, FaDog, FaCat } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaDog className="service-icon" />,
    title: "Dog walker",
    text: `Servizio nato per venire incontro a tutti i proprietari che non riescono per vari motivi a passeggiare il proprio amico a 4 zampe. Il servizio consiste in passeggiate da 15 fino a 50 minuti. Il servizio si svolge a Catania e d'intorni.`,
  },
  {
    id: 2,
    icon: <FaBone className="service-icon" />,
    title: "Dog sitter",
    text: `Servizio nato per accudire il vostro cane direttamente a casa vostra invece di lasciarlo dentro una fredda gabbia di una pensione. Il servizio include: Passeggiate e accudirlo nel cibo e nell' acqua. Il servizio si svolge a Catania e d'intorni.`,
  },
  {
    id: 3,
    icon: <FaCat className="service-icon" />,
    title: "Animal care",
    text: `Previo accordo col proprietario, ci prendiamo cura anche di altri animali da compagnia quali gatti, uccellini, conigli, e tanti altri. Il servizio si svolge a Catania e d'intorni`,
  },
]

const tempServices = data.map(service => {
  const { id, icon, title, text } = service

  return (
    <article key={id} className="service">
      {icon}
      <h4>{title}</h4>
      <div className="underline"></div>
      <p>{text}</p>
    </article>
  )
})

export default () => {
  return tempServices
}
