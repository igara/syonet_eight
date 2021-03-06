module.exports = {
  presets: ["next/babel", "@emotion/babel-preset-css-prop"],
  plugins: [
    "@emotion/babel-plugin",
    [
      "inline-react-svg",
      {
        svgo: false,
      },
    ],
  ],
};
