import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Repositories() {
  const { repos } = useSelector((state: RootState) => state.counter);

  return (
    <div>
      <ul>
        {
          repos.map( ( repo, index ) => {
            return <li key={index}>{repo.name}</li>
          } )
        }
      </ul>
    </div>
  )
}