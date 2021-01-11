//This file is a layer of abstraction that makes working with static data or backend service data possible...

import { homepageinfo } from "data/homepageinfo";
import { projectsMenuType, temp_projectsMenuInfo } from "data/projectsMenuInfo";
import { socialsinfo } from "data/socialsinfo";
import { temp_blogPosts } from "data/temp/temp_blogs";
import { temp_projectsInfo } from "data/temp/temp_projects";
import { userinfo } from "data/userinfo";

import { useQuery, gql, NetworkStatus } from "@apollo/client";

// export const getUserData = () => {
//   return userinfo;
// };

// export const getHomePageInfo = () => {
//   return homepageinfo;
// };

// export const getProjectMenuInfo = () => {
//   return temp_projectsMenuInfo;
// };

// const SOCIALS_DATA = gql`
//   query($id: Float!) {
//     GetSocials(id: $id) {
//       id
//       json
//     }
//   }
// `;

// export const getSocialMediaInfo = () => {
//   // const SOCIALS_DATA = gql`
//   //   query($id: Float!) {
//   //     GetSocials(id: $id) {
//   //       id
//   //       json
//   //     }
//   //   }
//   // `;
//   // const {
//   //   loading: socialsLoading,
//   //   error: socialsError,
//   //   data: socialsData,
//   //   refetch: socialsRefetch,
//   //   networkStatus: socialsNetworkStatus,
//   // } = useQuery(SOCIALS_DATA, {
//   //   variables: { id: 1 },
//   //   //onCompleted: editData,
//   // });

//   // // return socialsData.GetSocials;
//   // if (socialsData) {
//   //   return socialsData.GetSocials;
//   // } else {
    
//   // }

//   return socialsinfo;
// };

// export const getProjectInfo = () => {
//   return temp_projectsInfo;
// };

// export const getBlogPosts = () => {
//   return temp_blogPosts;
// };
