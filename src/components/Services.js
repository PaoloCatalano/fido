import React from 'react'
import Servizi from "../constants/services"
import Title from "../components/Title"

const Services = ({title}) => {
    return (
        <section className="bg-grey">
            <Title title={title} />
        <div className="services-center">
            <Servizi/>
        </div>
        </section>
    )
}

export default Services
