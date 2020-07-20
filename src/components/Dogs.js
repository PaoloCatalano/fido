import React from "react"
import Dog from "../components/Dog"
import Title from "../components/Title"

const Dogs = ({ dogs }) => {
  return (
    <section className="section projects">
      <Title title="vi presento i cagnolini di cui mi prendo cura!" />
      <div className="section-center project-center">
        {dogs.map((dog, index) => {
          return <Dog key={dog.strapiId} index={index} {...dog} />
        })}
      </div>
    </section>
  )
}

export default Dogs



