import { useState, useEffect } from "react";
import GridSize from "../startGame/gridSize";
export default function PlayGround() {
  let icons = [
    <i className="fa-solid fa-apple-whole"></i>,
    <i className="fa-brands fa-atlassian"></i>,
    <i className="fa-solid fa-bicycle"></i>,
    <i className="fa-solid fa-book"></i>,
    <i className="fa-solid fa-bell"></i>,
    <i className="fa-solid fa-building-columns"></i>,
    <i className="fa-solid fa-car"></i>,
    <i className="fa-solid fa-futbol"></i>,
    <i className="fa-solid fa-flag"></i>,
    <i className="fa-solid fa-horse"></i>,
    <i className="fa-solid fa-jet-fighter-up"></i>,
    <i class="fa-brands fa-black-tie"></i>,
    <i className="fa-solid fa-person"></i>,
    <i className="fa-solid fa-mountain-sun"></i>,
    <i className="fa-solid fa-lemon"></i>,
    <i className="fa-solid fa-gamepad"></i>,
    <i className="fa-solid fa-bookmark"></i>,
    <i className="fa-solid fa-house"></i>,
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
