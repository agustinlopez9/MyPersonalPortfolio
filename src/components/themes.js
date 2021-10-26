import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    title: "#363795",
    menuiconColor: "#363795",
    fontColorH2Main: "#1f1f1f",
    fontColorH3Main: "#363795",
    fontColorAMain: "#1f1f1f",
    fontColorH2Projects: "#fff",
    fontColorAProjects: "#fff",
    cardBackground: "rgb(66,66,66)",
    fontColorP: "#656565",
    fontColorH4Projects: "#1f1f1f",
    underlineH4Projects: "2px solid #1f1f1f",
    infoblockBackground: "#fff",
    underline: "2px solid #363795",
};
export const darkTheme = {
    body: "#2a2b40",
    title: "#fff",
    menuiconColor: "#fff",
    fontColorH2Main: "#fff",
    fontColorH3Main: "#005c97",
    fontColorAMain: "#fff",
    fontColorH2Projects: "#fff",
    fontColorAProjects: "#fff",
    cardBackground: "#3b3b4f",
    fontColorP: "#DCDCDC",
    fontColorH4Projects: "#fff",
    underlineH4Projects: "2px solid #fff",
    infoblockBackground: "#3b3b4f",
    underline: "2px solid #005c97",
};

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.body}
    }
`;
