import { useState, useEffect, useContext } from "react";
import GridSize from "../startGame/gridSize";
import { Data } from "../../App";
import { PlayersSuccess } from "./game";

export default function PlayGround() {
  let icons = [
    {
      el: <i className="fa-solid fa-bookmark"></i>,
      id: Math.random(),
    },
    {
      el: <i className="fa-brands fa-atlassian"></i>,
      id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-bicycle"></i>,

      id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-book"></i>,
      id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-bell"></i>,
      id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-building-columns"></i>,
      id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-car"></i>,
      id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-futbol"></i>,
      id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-flag"></i>,

      id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-horse"></i>,

      id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-jet-fighter-up"></i>,

      id: Math.random(),
    },
    {
      el: <i class="fa-brands fa-black-tie"></i>,

      id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-person"></i>,

      id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-mountain-sun"></i>,
      id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-lemon"></i>,
      id: Math.random(),
    },
    {
      el: <i className="fa-solid fa-apple-whole"></i>,
      id: Math.random(),
    },
  ];
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
