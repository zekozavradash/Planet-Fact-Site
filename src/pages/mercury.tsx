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

function Mercury(): JSX.Element {
  const MercuryData = data[0] as PlanetData;

  return <PageBuild planetData={MercuryData} />;
}

export default Mercury;
