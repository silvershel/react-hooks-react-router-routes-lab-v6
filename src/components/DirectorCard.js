function DirectorCard({name, movies}) {
  
    return (
      <article>
          <h2>{name}</h2>
          <h3>Movies:</h3>
          <ul>
          {movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
          </ul>
      </article>
    );
  };
  
  export default DirectorCard;