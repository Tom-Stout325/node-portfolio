import React from "react";


function SocialMedia(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <a
              className="btn btn-social-icon btn-instagram"
              href="https://www.instagram.com/the_tom.stout/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="https://www.facebook.com/ShotByTom"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="https://www.youtube.com/channel/UCe7k3O6jQiM_MnY9-rXre4w"
            >
              <i className="fa fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default SocialMedia