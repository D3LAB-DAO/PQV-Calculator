/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
const Creators = () => {
  return (
    <div id="members" className="container mb-3 sect">
      <div className="row mb-3">
        <div className="col">
          <h1 className="row__title">MEMBERS</h1>
        </div>
      </div>


      <div className="row row--center row--margin">
        <div className="col-xl-1"></div>
        <div className="col-xl-5 col-md-6 member-box member-box--luke">
          <div className="member-box__wrap">
            <div className="member-box__img"></div>
            <h1 className="member-box__title">
              Luke Park
            </h1>
            <p className="member-box__people">
              Developer
              <br />
              <a href="https://sharp-saw-d58.notion.site/Luke-Park-d4edb5bf446b479796d0d9bfe422d92a" target="_blank"><i className="bi bi-house-fill member-icon"></i></a>
              <a href="https://github.com/lukepark327" target="_blank"><i className="bi bi-github member-icon" /></a>
              <a href="mailto:lukepark327@gmail.com" target="_blank"><i className="bi bi-envelope-fill member-icon"></i></a>
            </p>
          </div>
        </div>

        <div className="col-xl-5 col-md-6 member-box member-box--bosung">
          <div className="member-box__wrap">
            <div className="member-box__img"></div>
            <h1 className="member-box__title">
              Bosung Park
            </h1>
            <p className="member-box__people">
              Researcher
              <br />
              <a href="https://www.linkedin.com/in/bosung-park/" target="_blank"><i className="bi bi-linkedin member-icon"></i></a>
              <a href="https://medium.com/@elin-park" target="_blank"><i className="bi bi-medium member-icon" /></a>
              <a href="https://twitter.com/Pulypoly" target="_blank"><i className="bi bi-twitter member-icon" /></a>
              <a href="https://www.instagram.com/amolang__bsp" target="_blank"><i className="bi bi-instagram member-icon" /></a>
              <a href="mailto:bs97@naver.com" target="_blank"><i className="bi bi-envelope-fill member-icon"></i></a>
            </p>
          </div>
        </div>
        <div className="col-xl-1"></div>
      </div>

      <div className="row row--center row--margin">
        <div className="col-xl-1"></div>
        <div className="col-xl-5 col-md-6 member-box member-box--ingeun">
          <div className="member-box__wrap">
            <div className="member-box__img"></div>
            <h1 className="member-box__title">
              Ingeun Kim
            </h1>
            <p className="member-box__people">
              Developer
              <br />
              <a href="https://github.com/ingeun92" target="_blank"><i className="bi bi-github member-icon" /></a>
              <a href="https://medium.com/@ingeun92" target="_blank"><i className="bi bi-medium member-icon" /></a>
              <a href="https://twitter.com/IngsParty" target="_blank"><i className="bi bi-twitter member-icon" /></a>
              <a href="https://www.instagram.com/kim_in_geun/" target="_blank"><i className="bi bi-instagram member-icon" /></a>
              <a href="mailto:ingeun92@naver.com" target="_blank"><i className="bi bi-envelope-fill member-icon"></i></a>
            </p>
          </div>
        </div>

        <div className="col-xl-5 col-md-6 member-box member-box--junmo">
          <div className="member-box__wrap">
            <div className="member-box__img"></div>
            <h1 className="member-box__title">
              Junmo Lee
            </h1>
            <p className="member-box__people">
              Developer
              <br />
              <a href="https://github.com/ElectricPanda" target="_blank"><i className="bi bi-github member-icon" /></a>
              <a href="mailto:junmo.lee@snu.ac.kr" target="_blank"><i className="bi bi-envelope-fill member-icon"></i></a>
            </p>
          </div>
        </div>
        <div className="col-xl-1"></div>
      </div>
    </div>
  );
};

export default Creators;
