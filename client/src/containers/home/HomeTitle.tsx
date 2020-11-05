import React from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import placeholderimage from "assets/image/placeholder/527x600.jpg";
import { userInfoFill } from "utils/userInfoFill";
import { homepageinfo } from "data/homepageinfo";

import "assets/css/containers/HomeTitle.scss";
import "slick-carousel/slick/slick.scss";

const slick_settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true
};

export const HomeTitle = () => {
  return (
    <Grid columns={2} stackable>
      <Grid.Row>
        <Grid.Column>
          <div className="div_intro_wrapper">
            <Header as="h1" className="h_intro">
              {homepageinfo.hero_intro}
              <span className="dot">.</span>
            </Header>
            <div className="h_intro_clone">{homepageinfo.hero_intro}</div>
            <p className="p_intro_text">
              {userInfoFill(homepageinfo.intro_text)}
            </p>

            <p className="p_carousel_text"> {userInfoFill(homepageinfo.carousel_text)}</p>

            
          </div>
        </Grid.Column>
        <Grid.Column only="computer" verticalAlign="bottom" textAlign="right">
          <div>
            <Image
              className="img_portrait"
              spaced={"left"}
              src={placeholderimage}
            />
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};