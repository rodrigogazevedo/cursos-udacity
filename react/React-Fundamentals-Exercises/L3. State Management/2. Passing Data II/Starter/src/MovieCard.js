import UserList from "./UserList";

const MovieCard =({ users, usersWhoLikedMovie, movieInfo }) => {
  return (
    <li key={movieInfo.id}>
      <h2>{movieInfo.name}</h2>
      <h3>Liked By:</h3>
      <UserList usersWhoLikedMovie={usersWhoLikedMovie} users={users} />
    </li>
  );
}

export default MovieCard;