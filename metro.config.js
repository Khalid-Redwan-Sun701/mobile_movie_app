const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// point nativewind to the global.css inside the app folder
module.exports = withNativeWind(config, { input: "./app/global.css" });
