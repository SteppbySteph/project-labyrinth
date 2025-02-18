import React from "react";
import Start from "./Start";
import Game from "./Game";
import { useSelector } from "react-redux";

const Home = () => {
  const gameStarted = useSelector((store) => store.game.started);
  

  return (
    <>
      {!gameStarted && <Start />}
      {gameStarted && <Game />}
    </>
  );
};

export default Home;
