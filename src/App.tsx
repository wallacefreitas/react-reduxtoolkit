import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Repositories from "./components/Repositories";
import { AppDispatch, RootState } from "./store/";
import { increment, loadRepos } from "./store/Counter.store";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { counter } = useSelector((state: RootState) => state.counter);
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>{counter}</h1>

      <input type="text" value={username} onChange={(evt) => setUsername(evt.target.value)} />
      <button onClick={() => dispatch(loadRepos(username))}>Search Repos for User</button>
      
      <Repositories />
    </div>
  )
}
