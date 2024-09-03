import { useParams } from "react-router-dom";


export const DetailView = () => {
  const { id } = useParams();
 
  return (
    <div>
      <h1>DetailView</h1>

      <p>{id} del Evento</p>
    </div>
  )
}
