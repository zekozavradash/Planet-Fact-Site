import PageBuild from "../components/pagebuild";
import data from '../data.json'
interface PlanetData {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

function Saturn(): JSX.Element {
  const SaturnData = data[5] as PlanetData;

  return <PageBuild planetData={SaturnData} />;
}

export default Saturn;
