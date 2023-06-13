import {StyleSheet} from 'react-native';
import {config} from "./gluestack-ui.config";

export const styles = StyleSheet.create({
    // bottomButton: {
    //     borderRadius: 10,
    //     ...config.theme.tokens.shadow['7']
    // },
    recordingFileButton: {
        flexGrow: 1,
        borderRadius: 10,
        ...config.theme.tokens.shadow['9'], // Doesn't work, why?
    },
    container: {
        flexGrow: 1,
        backgroundColor: config.theme.tokens.colors.primary500,
    },
    titleWrapper: {
        height: '7%',
        backgroundColor: config.theme.tokens.colors.primary400,
        justifyContent: "center",
        paddingLeft: 10,
    },
    screenWrapper: {
        flexGrow: 1,
    },
    contentContainer: {
        flexGrow: 1 // pushes the footer to the end of the screen
    },
    footer: {
        height: '10%',
        backgroundColor: config.theme.tokens.colors.primary400,
        justifyContent: "center",
        alignItems: "center",
    },
    video:{
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        width: '100%',
        height: undefined,
        flexGrow: 1,
    }
});
