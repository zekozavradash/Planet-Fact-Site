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

function Earth(): JSX.Element {
  const EarthData = data[2] as PlanetData;

  return <PageBuild planetData={EarthData} />;
}

export default Earth;
