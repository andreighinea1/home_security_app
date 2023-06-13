/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addVideo = /* GraphQL */ `
  mutation AddVideo($id: String!, $url: String!, $timestamp: String!) {
    addVideo(id: $id, url: $url, timestamp: $timestamp) {
      id
      url
      timestamp
    }
  }
`;
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo($id: String!) {
    deleteVideo(id: $id) {
      id
      url
      timestamp
    }
  }
`;
