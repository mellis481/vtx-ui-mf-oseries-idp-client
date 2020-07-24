const path = require("path");
const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "vtx-ui",
    projectName: "mf-oseries-idp-client",
    webpackConfigEnv,
  });

  return {
    ...defaultConfig,
    entry: path.resolve(process.cwd(), `src/vtx-ui-mf-oseries-idp-client.tsx`),
    output: {
      filename: `vtx-ui-mf-oseries-idp-client.js`,
      libraryTarget: "system",
      path: path.resolve(process.cwd(), "dist"),
      jsonpFunction: `webpackJsonp_vtx-ui-mf-oseries-idp-client`,
    },
    externals: ["single-spa"],
  };
};
