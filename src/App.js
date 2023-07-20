import './App.css';
import TileComponent from './TileComponent';
import { faHeart, faCircle, faFlag, faArrowAltCircleRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const tilesArray = [
    {
      icon: faHeart,
      title: "Choose Your Local Targeting",
      text: "Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."
    },
    {
      icon: faCircle,
      title: "Track Your Conversion",
      text: "We use the most progressive tracking and analytics technology to ensure that every call can be tracked and evaluated"
    },
    {
      icon: faFlag,
      title: "Customized Campaigns",
      text: "Audiences, budgets, and goals: you decide the criteria for your digital ad campaign, and we’ll do the rest."
    },
    {
      icon: faArrowAltCircleRight,
      title: "Get Dedicated Support Team",
      text: "We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted."
    },
    {
      icon: faEnvelope,
      title: "Quality Assurance",
      text: "We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted."
    }

  ]
  return (
    <>
      <div className="block p-24 relative">
        <div className='block w-1/3 absolute pt-10'>
          <h2 className='text-6xl text-indigo-900 mb-6'>Why the industry chooses Clickdee?</h2>
          <p className='text-lg'>We understand performance marketing from every angle and every stage of the funnel. Our clients trust that we know what metrics move their business towards growth. Our publisher and affiliate partners know that we make maximum revenue and ROAS a main focus when growing our partnerships.</p>
        </div>
        <div className='block'>
          <div className='flex justify-end flex-wrap'>
            <div className='block w-1/2 h-auto'></div>
            {tilesArray.map((tileData, index) => (
              <div className='block'>
                <TileComponent
                  key={index}
                  icon={tileData.icon}
                  title={tileData.title}
                  text={tileData.text}
                  index={index}
                />
              </div>

            ))}
          </div>
        </div>


      </div>
    </>
  );
}

export default App;



