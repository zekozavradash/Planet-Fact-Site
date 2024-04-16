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


function Mars(): JSX.Element {
  const MarsData = data[3] as PlanetData;

  return <PageBuild planetData={MarsData} />;
}

export default Mars;
