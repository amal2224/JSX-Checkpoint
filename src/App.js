import imageInSrc from './imageInSrc.jpg';
import './style.css';

function App() {
  return (
  <>
    <div style={{
                  border:"solid 1px black",
                  maxWidth:"100vw"
                }}>
      <h1 className="title red">Your name here</h1>
      <br/>
      <img src={imageInSrc} alt='imageInSrc'
            style={{
                    width: '100%',
                    height: '400px'
                  }}
      />
      <br/>
      <img src="/imageInPublic.jpg" alt='imageInPublic'
            style={{           
                    width:'100%',
                    height:'600px'
                  }}
      />
    </div>

    <video style={{
                    width:'100%',
                    height:'600px'
                  }} controls>
      <source src="/myVideo.mp4" type="video/mp4" />
    </video>
  </>
          );
}

export default App;