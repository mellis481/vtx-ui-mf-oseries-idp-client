const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "vtx-ui",
    projectName: "mf-oseries-idp-client",
    webpackConfigEnv,
  });

  return webpackMerge.smart(
    { ...defaultConfig, externals: ["single-spa"] },
    {
      // modify the webpack config however you'd like to by adding to this object
    }
  );
};
