import React from "react"
import Dog from "../components/Dog"
import Title from "../components/Title"

const RandomDog = ({ dogs }) => {

    var rand = Math.floor(Math.random() * 8 ); //7 cani in Strapi
    var dog = dogs[rand];
    console.log(rand);

    return (
        <section className="section projects">
            <Title title="vi presento i cagnolini di cui mi prendo cura !" />
            <div className="section-center project-center">
                <Dog {...dog} />
            </div>
        </section>
    )
}

export default RandomDog