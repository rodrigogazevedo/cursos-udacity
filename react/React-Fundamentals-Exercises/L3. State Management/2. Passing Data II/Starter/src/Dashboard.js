import MovieCard from './MovieCard';

const Dashboard = ({ usersByMovie, users, movies }) => {
  const movieCards = Object.keys(movies).map((id) => (
    <MovieCard 
      key={id}
      users={users}
      usersWhoLikedMovie={usersByMovie[id]}
      movieInfo={movies[id]}
    />
  ));

  return <ul>{movieCards}</ul>;
};

export default Dashboard;