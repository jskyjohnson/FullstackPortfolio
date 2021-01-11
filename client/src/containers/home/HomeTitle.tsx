import React from "react";
import { Grid, Header, Image, Segment, Loader } from "semantic-ui-react";
import { userInfoFill } from "utils/userInfoFill";
import Slider from "react-slick";
import "assets/css/containers/HomeTitle.scss";
import "slick-carousel/slick/slick.scss";
import { shuffleArray } from "utils/shuffleArray";
import { isUrl } from "utils/isUrl";
import { useQuery, gql } from "@apollo/client";

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

const HOME_DATA = gql`
  query($id: Float!) {
    GetHomepage(id: $id) {
      id
      hero_intro
      hero_portrait
      intro_text
      carousel_text
      carousel_text_values
    }
  }
`;

export const HomeTitle = () => {
  //const r_carousel_text = shuffleArray(homepageinfo.carousel_text_values);

  const {
    loading: homeLoading,
    error: homeError,
    data: homeData,
    refetch: homeRefetch,
    networkStatus: homeNetworkStatus,
  } = useQuery(HOME_DATA, {
    variables: { id: 1 },
    // onCompleted: editData,
  });

  return (
    <>
      {homeData ? (
        <>
          <Grid columns={2}>
            <Grid.Column tablet="8" mobile="16" computer={8}>
              <div className="div_intro_wrapper">
                <Header as="h1" className="h_intro">
                  {homeData.GetHomepage.hero_intro}
                  <span className="dot">.</span>
                  <div className="line" />
                </Header>

                <div className="h_intro_clone">{homeData.GetHomepage.hero_intro}</div>

                <p className="p_intro_text">
                  {userInfoFill(homeData.GetHomepage.intro_text)}
                </p>

                <Slider {...slick_settings}>
                  { shuffleArray(homeData.GetHomepage.carousel_text_values).map((value) => (
                    <p className="p_carousel_text" key="0">
                      {userInfoFill(homeData.GetHomepage.carousel_text)}
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
              {console.log(homeData.GetHomepage.hero_portrait)}
              {console.log( !isUrl(homeData.GetHomepage.hero_portrait) )}
              <Image
                as="img"
                className="img_portrait"
                spaced={"left"}
                //src={require(`assets/images/user/${homepageinfo.hero_portrait}`).default}
                src={
                  isUrl(homeData.GetHomepage.hero_portrait)
                    ? homeData.GetHomepage.hero_portrait
                    : require(`assets/images/user/${homeData.GetHomepage.hero_portrait}`).default
                }
              />
            </Grid.Column>
          </Grid>
        </>
      ) : (
        <Loader size="big"> Loading </Loader>
      )}
    </>
  );
};
