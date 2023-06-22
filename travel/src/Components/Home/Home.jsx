import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>Plan Your Trip With Travel Dot</h1>
        <h5 className="subTitle">
          Travel your favourite city with respectful of the environment
        </h5>
        <div className="titleBtn">
          <button className="btn">Explore Now</button>
        </div>
      </div>

      <div className="card">
        <div className="locationDiv">
          <label htmlFor="location">Location</label>
          <input type="text" placeholder="Nepal" />
        </div>

        <div className="distDiv">
          <label htmlFor="distance">Distance</label>
          <input type="text" placeholder="Dream Location" />
        </div>

        <div className="priceDiv">
          <label htmlFor="price">Price</label>
          <input type="text" placeholder="$14-$400" />
        </div>
        
          <button className="btns">Search</button>
        
      </div>
    </div>
  );
};

export default Home;
