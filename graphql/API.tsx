export type ListVideosQuery = {
    __typename: "ModelVideoConnection";
    listVideos?: Array< {
        __typename: "Video";
        id: string;
        url: string;
        timestamp: string;
    } > | null;
} | null;

export type ChangedVideoSubscription = {
    id: string;
};