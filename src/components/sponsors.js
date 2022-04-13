const Sponsors = () => {
  return (
    <div id="sponsors" className="container mb-3 sect">
      <div className="row mb-3">
        <div className="col">
          <h1 className="row__title">SPONSORS</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col col-lg-4">
          <img className="sponsor-logo partner_img" src="img/chainlink_white.png" alt="chainlink" />
        </div>
        {/* <div className="col col-lg-4">
          <img className="sponsor-logo partner_img" src="img/curg_white.png" alt="curg" />
        </div>
        <div className="col-lg-2"></div> */}
      </div>
    </div>
  );
};

export default Sponsors;
