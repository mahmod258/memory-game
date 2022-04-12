import { useState, useEffect, useContext } from "react";
import GridSize from "../startGame/gridSize";
import { Data } from "../../App";
import { PlayersSuccess } from "./game";

export default function PlayGround() {
  const data = useContext(Data);
  const playersSuccess = useContext(PlayersSuccess);
  const [divs, setDivs] = useState([]);
  let icons = [
    {
      el: <i className="fa-solid fa-bookmark"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i className="fa-brands fa-atlassian"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-bicycle"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-book"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-bell"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-building-columns"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-car"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-futbol"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-flag"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-horse"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-jet-fighter-up"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i class="fa-brands fa-black-tie"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-person"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-mountain-sun"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-lemon"></i>,
      odd_id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-apple-whole"></i>,
      odd_id: Math.random(),
    },
  ];

  useEffect(() => {
    const toPutOnDivs = [...icons, ...icons].sort(() => 0.5 - Math.random());
    toPutOnDivs.forEach((el) => (el.unique_id = Math.random() + 1));

    setDivs(toPutOnDivs);
  }, []);
  return (
    <div className="playGround">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
    </div>
  );
}
