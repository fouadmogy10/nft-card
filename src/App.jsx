import "./App.scss";
import img1 from "./assets/images/image-equilibrium.jpg";
import img2 from "./assets/images/icon-view.svg";
import img3 from "./assets/images/icon-ethereum.svg";
import img4 from "./assets/images/icon-clock.svg";
import img5 from "./assets/images/image-avatar.png";
function App() {
  return (
    <>
      <main className="container">
        <section className="main-card">
          <div className="image-container">
            <img src={img1} alt="nft" className="main-image" />
            <div className="overlay"></div>
            <img src={img2} alt="view icon" className="view" />
          </div>
          <div className="text-container">
            <h1 className="title">Equilibrium #3429</h1>
            <p className="description">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="eth-info">
              <div className="info">
                <img src={img3} alt="ETH" className="icon" />
                <span className="eth">0.041 ETH</span>
              </div>
              <div className="info">
                <img src={img4} alt="clock" className="icon" />
                <span>3 days left</span>
              </div>
            </div>
            <div className="creator-info">
              <img src={img5} alt="Jules Wyvern" className="avatar" />
              <p className="creator-text">
                Creation of <span className="creator-name">Jules Wyvern</span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
