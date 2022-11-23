import {useParams} from 'react-router-dom'

const Hero = () => {

  const params = useParams()

  return (
    <div> Hero {params.id}   </div>
  )
}

export default Hero