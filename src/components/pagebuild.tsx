import { useState, CSSProperties } from 'react';
import MainNavbar from '../components/navbar';

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


interface PageBuildProps {
  planetData: PlanetData;
}

const PageBuild = ({ planetData }: PageBuildProps): JSX.Element => {
  const { name, overview, structure, geology, rotation, revolution, radius, temperature, images } = planetData;

  const [currentImage, setCurrentImage] = useState(images.planet);
  const [geologyStyles, setGeologyStyles] = useState<CSSProperties>({ display: 'none' });
  const [currentContent, setCurrentContent] = useState(overview.content);

  const handleContentChange = (newContent: string) => {
    setCurrentContent(newContent);
  };

  const handleImgChange = (newImage: string) => {
    setCurrentImage(newImage);
    if (newImage === images.internal) {
      setGeologyStyles({ display: 'none' });
      handleContentChange(structure.content);
    }
  };

  const handleSurfaceGeologyClick = () => {
    setCurrentImage(images.planet);
    setGeologyStyles({
      display: 'block',
      position: 'absolute',
      width: '200px',
      height: '225px',
      top: '300px',
      left: '125px'
    });
    handleContentChange(geology.content);
  };

  const handleOverviewClick = () => {
    setCurrentImage(images.planet);
    setGeologyStyles({ display: 'none' });
    handleContentChange(overview.content);
  };

  const [overviewFocused, setOverviewFocused] = useState(false);
  const [internalStructureFocused, setInternalStructureFocused] = useState(false);
  const [surfaceGeologyFocused, setSurfaceGeologyFocused] = useState(false);

  const overviewStyles: CSSProperties = {
    backgroundColor: overviewFocused ? overview.colors : 'initial',
  };

  const internalStructureStyles: CSSProperties = {
    backgroundColor: internalStructureFocused ? overview.colors : 'initial',
  };

  const surfaceGeologyStyles: CSSProperties = {
    backgroundColor: surfaceGeologyFocused ? overview.colors : 'initial',
  };

  return (
    <div className="mainContainer">
      <MainNavbar />
      <div className="maindiv">
        <div className="planetdiv">
          <img src={currentImage} alt={name} className="planetimg" style={{ width: '100%', height: '100%' }} />
          <img src={images.geology} alt="" style={geologyStyles} />
        </div>
        <div className="contentdiv">
          <div className="namediv">{name}</div>
          <div className="infodiv">{currentContent}</div>
          <div className="sourcediv">
            <p className="wikipedie">
              Source: <a href={overview.source} className="wikilink">Wikipedia</a>
            </p>
          </div>
          <div className="buttonsdiv">
            <button
              className="button overview"
              style={overviewStyles}
              onFocus={() => setOverviewFocused(true)}
              onBlur={() => setOverviewFocused(false)}
              onClick={handleOverviewClick}
            >
              OVERVIEW
            </button>
            <button
              className="button internalstructure"
              style={internalStructureStyles}
              onFocus={() => setInternalStructureFocused(true)}
              onBlur={() => setInternalStructureFocused(false)}
              onClick={() => handleImgChange(images.internal)}
            >
              INTERNAL STRUCTURE
            </button>
            <button
              className="button surfacegeology"
              style={surfaceGeologyStyles}
              onFocus={() => setSurfaceGeologyFocused(true)}
              onBlur={() => setSurfaceGeologyFocused(false)}
              onClick={handleSurfaceGeologyClick}
            >
              SURFACE GEOLOGY
            </button>
          </div>
        </div>
        <div className="statsdiv">
          <div className="rotation stats">
            <p className="statname">ROTATION</p>
            <p className="stat">{rotation}</p>
          </div>
          <div className="revolution stats">
            <p className="statname">REVOLUTION</p>
            <p className="stat">{revolution}</p>
          </div>
          <div className="radius stats">
            <p className="statname">RADIUS</p>
            <p className="stat">{radius}</p>
          </div>
          <div className="temp stats">
            <p className="statname">AVERAGE TEMP.</p>
            <p className="stat">{temperature}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBuild;
