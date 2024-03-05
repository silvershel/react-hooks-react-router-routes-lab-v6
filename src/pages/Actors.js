import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorCard from "../components/ActorCard"

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then((r) => r.json())
    .then((data) => setActors(data))
  }, []);

  const actorsToDisplay = actors.map((actor) => (
    <ActorCard key={actor.id} name={actor.name} movies={actor.movies}/>
  ))

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorsToDisplay}
      </main>
    </>
  );
};

export default Actors;
