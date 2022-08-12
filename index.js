const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Congratulation</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-img"
      />
      <h2>Kiran V</h2>
      <p>Vishnu insttitute of computer Education and technology Bhimavaram.</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
