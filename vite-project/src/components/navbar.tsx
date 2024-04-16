import React from 'react';
import data from '../data.json';
import { router } from '../main';

interface Route {
  path: string;
}

function Navbar(props: {
  Mercury: string;
  Venus: string;
  Earth: string;
  Mars: string;
  Jupiter: string;
  Saturn: string;
  Uranus: string;
  Neptune: string;
}): JSX.Element {
  return (
    <div className="Navbar">
      <div className="logo">THE PLANETS</div>
      <div className="paths">
        <div className="Mercury-navbar navbarlink">
          <a href={props.Mercury} className="navbarlink">Mercury</a>
        </div>
        <div className="Venus-navbar navbarlink">
          <a href={props.Venus} className="navbarlink">Venus</a>
        </div>
        <div className="Earth-navbar navbarlink">
          <a href={props.Earth} className="navbarlink">Earth</a>
        </div>
        <div className="Mars-navbar navbarlink">
          <a href={props.Mars} className="navbarlink">Mars</a>
        </div>
        <div className="Jupiter-navbar navbarlink">
          <a href={props.Jupiter} className="navbarlink">Jupiter</a>
        </div>
        <div className="Saturn-navbar navbarlink">
          <a href={props.Saturn} className="navbarlink">Saturn</a>
        </div>
        <div className="Uranus-navbar navbarlink">
          <a href={props.Uranus} className="navbarlink">Uranus</a>
        </div>
        <div className="Neptune-navbar navbarlink">
          <a href={props.Neptune} className="navbarlink">Neptune</a>
        </div>
      </div>
    </div>
  );
}

function MainNavbar(): JSX.Element {
  const paths = router.routes.map((route: Route) => route.path);

  // Ensure paths has at least 8 elements
  const paddedPaths = paths.concat(Array(Math.max(0, 8 - paths.length)).fill('/'));

  return (
    <Navbar
      Mercury={paddedPaths[0]}
      Venus={paddedPaths[1]}
      Earth={paddedPaths[2]}
      Mars={paddedPaths[3]}
      Jupiter={paddedPaths[4]}
      Saturn={paddedPaths[5]}
      Uranus={paddedPaths[6]}
      Neptune={paddedPaths[7]}
    />
  );
}

export default MainNavbar;
