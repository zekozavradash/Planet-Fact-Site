import { Router } from '../main';

interface Route {
  path: string;
}

interface RouterType {
  routes?: Route[];
}

interface NavbarProps {
  Mercury?: string;
  Venus?: string;
  Earth?: string;
  Mars?: string;
  Jupiter?: string;
  Saturn?: string;
  Uranus?: string;
  Neptune?: string;
}

const Navbar = (props: NavbarProps): JSX.Element => {
  return (
    <div className="Navbar">
      <div className="logo">THE PLANETS</div>
      <div className="paths">
        <div className="Mercury-navbar navbarlink">
          <a href={props.Mercury || '/'} className="navbarlink">Mercury</a>
        </div>
        <div className="Venus-navbar navbarlink">
          <a href={props.Venus || '/'} className="navbarlink">Venus</a>
        </div>
        <div className="Earth-navbar navbarlink">
          <a href={props.Earth || '/'} className="navbarlink">Earth</a>
        </div>
        <div className="Mars-navbar navbarlink">
          <a href={props.Mars || '/'} className="navbarlink">Mars</a>
        </div>
        <div className="Jupiter-navbar navbarlink">
          <a href={props.Jupiter || '/'} className="navbarlink">Jupiter</a>
        </div>
        <div className="Saturn-navbar navbarlink">
          <a href={props.Saturn || '/'} className="navbarlink">Saturn</a>
        </div>
        <div className="Uranus-navbar navbarlink">
          <a href={props.Uranus || '/'} className="navbarlink">Uranus</a>
        </div>
        <div className="Neptune-navbar navbarlink">
          <a href={props.Neptune || '/'} className="navbarlink">Neptune</a>
        </div>
      </div>
    </div>
  );
};

const MainNavbar = (): JSX.Element => {
  const router = Router as RouterType;
  const paths = router.routes?.map((route: Route) => route.path) || [];

  const addedPaths = paths.concat(Array(Math.max(0, 8 - paths.length)).fill('/'));

  return (
    <Navbar
      Mercury={addedPaths[0]}
      Venus={addedPaths[1]}
      Earth={addedPaths[2]}
      Mars={addedPaths[3]}
      Jupiter={addedPaths[4]}
      Saturn={addedPaths[5]}
      Uranus={addedPaths[6]}
      Neptune={addedPaths[7]}
    />
  );
};

export default MainNavbar;
