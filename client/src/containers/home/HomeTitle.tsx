import React from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import placeholderimage from "assets/image/placeholder/527x600.jpg";
import { userInfoFill } from "../../utils/userInfoFill";
import Slider from "react-slick";
import "assets/css/containers/HomeTitle.scss";
import "slick-carousel/slick/slick.scss";
import { shuffleArray } from "utils/shuffleArray";
import { getHomePageInfo } from "utils/dataClient";

const slick_settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
};

export const HomeTitle = () => {
  let homepageinfo = getHomePageInfo();
  const r_carousel_text = shuffleArray(homepageinfo.carousel_text_values);
  return (
    <Grid columns={2}>
      <Grid.Column tablet="8" mobile="16" computer={8}>
        <div className="div_intro_wrapper">
          <Header as="h1" className="h_intro">
            {homepageinfo.hero_intro}
            <span className="dot">.</span>
            <div className="line" />
          </Header>

          <div className="h_intro_clone">{homepageinfo.hero_intro}</div>

          <p className="p_intro_text">
            {userInfoFill(homepageinfo.intro_text)}
          </p>

          <Slider {...slick_settings}>
            {r_carousel_text.map((value) => (
              <p className="p_carousel_text" key="0">
                {userInfoFill(homepageinfo.carousel_text)}
                <span className="p_carousel_value">{value}</span>
              </p>
            ))}
          </Slider>
        </div>
      </Grid.Column>

      <Grid.Column
        only="tablet computer"
        verticalAlign="bottom"
        textAlign="right"
      >
        <Image
          className="img_portrait"
          spaced={"left"}
          src={placeholderimage}
        />
      </Grid.Column>
    </Grid>
  );
};
