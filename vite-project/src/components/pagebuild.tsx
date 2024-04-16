import  { useState } from 'react';
import MainNavbar from '../components/navbar';


interface PlanetData {
  name: string;
  overview: {
    content: string;
    source: string;
    colors: string
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

function PageBuild(props: {
  planetData: PlanetData;
}): JSX.Element {
  const { name, overview, structure, geology, rotation, revolution,  radius, temperature, images } = props.planetData;

  const [currentImage, setCurrentImage] = useState(images.planet);
  const [geologyStyles, setGeologyStyles] = useState({ display: 'none' });
  const [currentContent, setCurrentContent] = useState(overview.content);
  const [overviewContent, ] = useState(overview.content);
  const [geologyContent, ] = useState(geology.content);
  const [structureContent,]=useState(structure.content)
  const handleContentChange = (newContent: string) => {
    setCurrentContent(newContent);
  };

  const handleImageChange = (newImage: string) => {
    setCurrentImage(newImage);
    if (newImage === images.planet) {
      setGeologyStyles({ display: 'none' });
      handleContentChange(overviewContent);
    }
  };

  const handleImgChange = (newImage: string) => {
    setCurrentImage(newImage);
    if (newImage === images.internal) {
      setGeologyStyles({ display: 'none' });
      handleContentChange(structureContent);
    }
  };
  const handleSurfaceGeologyClick = () => {
    setCurrentImage(images.planet);
    setGeologyStyles({ display: 'block', position: 'absolute', width: '200px', height: '225px', top: '300px', left: '125px' });
    handleContentChange(geologyContent);
  };

  const handleOverviewClick = () => {
    setCurrentImage(images.planet);
    setGeologyStyles({ display: 'none' });
    handleContentChange(overviewContent);
  };

  const [overviewFocused, setOverviewFocused] = useState(false);
  const [internalStructureFocused, setInternalStructureFocused] = useState(false);
  const [surfaceGeologyFocused, setSurfaceGeologyFocused] = useState(false);

  const handleOverviewFocus = () => {
    setOverviewFocused(true);
  };

  const handleOverviewBlur = () => {
    setOverviewFocused(false);
  };

  const handleInternalStructureFocus = () => {
    setInternalStructureFocused(true);
  };

  
  const handleInternalStructureBlur = () => {
    setInternalStructureFocused(false);
  };

  const handleSurfaceGeologyFocus = () => {
    setSurfaceGeologyFocused(true);
  };

  const handleSurfaceGeologyBlur = () => {
    setSurfaceGeologyFocused(false);
  };

  const overviewStyles = {
   backgroundColor: overviewFocused ? overview.colors : 'initial',
 };
 
 const internalStructureStyles = {
   backgroundColor: internalStructureFocused ? overview.colors : 'initial',
 }
 
 const surfaceGeologyStyles = {
   backgroundColor: surfaceGeologyFocused ? overview.colors : 'initial',
 };
 

  return (
    <div className='mainContainer'>
      <MainNavbar />
      <div className='maindiv'>
        <div className='planetdiv'>
          <img src={currentImage} alt={name} className='planetimg' style={{ width: '100%', height: '100%' }} />
          <img src={images.geology} alt='' style={geologyStyles} />
        </div>
        <div className='contentdiv'>
          <div className='namediv'>{name}</div>
          <div className='infodiv'>{currentContent}</div>
          <div className='sourcediv'>
            <p className='wikipedie'>
              Source:
              <a href={overview.source} className='wikilink'>
                Wikipedia
              </a>
            </p>
          </div>
          <div className='buttonsdiv'>
            <button
              className='button overview'
              style={overviewStyles}
              onFocus={handleOverviewFocus}
              onBlur={handleOverviewBlur}
              onClick={() => handleOverviewClick()}
            >
              OVERVIEW
            </button>
            <button
              className='button internalstructure'
              style={internalStructureStyles}
              onFocus={handleInternalStructureFocus}
              onBlur={handleInternalStructureBlur}
              onClick={() => handleImgChange(images.internal)}
            >
              INTERNAL STRUCTURE
            </button>
            <button
  className='button surfacegeology'
  style={surfaceGeologyStyles}
  onFocus={handleSurfaceGeologyFocus}
  onBlur={handleSurfaceGeologyBlur}
  onClick={handleSurfaceGeologyClick} 
>
  SURFACE GEOLOGY
</button>

          </div>
        </div>
        <div className='statsdiv'>
          <div className='rotation stats'>
            <p className='statname'>ROTATION</p>
            <p className='stat'>{rotation}</p>
          </div>
          <div className='revolution stats'>
            <p className='statname'>REVOLUTION</p>
            <p className='stat'>{revolution}</p>
          </div>
          <div className='radius stats'>
            <p className='statname'>RADIUS</p>
            <p className='stat'>{radius}</p>
          </div>
          <div className='temp stats'>
            <p className='statname'>AVERAGE TEMP.</p>
            <p className='stat'>{temperature}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageBuild