import ServiceCard from '../components/ServiceCard'
import { services} from '../constants'

const Services = () => {
  return (
    <section className='max-container gap-9 flex justify-center flex-wrap'>
         {services.map((service) => (
          <ServiceCard key = {service.label} {...service}/>
         ))}
    </section>
  )
}

export default Services