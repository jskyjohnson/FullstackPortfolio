import React from "react";
import { Grid, GridColumn, GridRow, Image } from "semantic-ui-react";
import placeholderimage from "assets/image/placeholder/527x600.jpg";
import { userInfoFill } from "utils/UserInfoFill";
import { homepageinfo } from "data/homepageinfo";



export const HomeTitle = () => {
  return (
    <Grid columns={2}>
      <GridRow>
        <GridColumn>
          {homepageinfo.hero_intro}
          
          <p> {userInfoFill(homepageinfo.intro_text)}</p>
        </GridColumn>
        <GridColumn>
          <Image src={placeholderimage} />
        </GridColumn>
      </GridRow>
    </Grid>
  );
};
