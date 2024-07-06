import PageBuild from "../components/pagebuild";
import data from '../data.json'
// src/types.ts
export interface PlanetData {
  name: string;
  overview: {
    content: string;
    source: string;
    colors: string;
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


function Uranus(): JSX.Element {
  const UranusData = data[6] as PlanetData;

  return <PageBuild planetData={UranusData} />;
}

export default Uranus;
