module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    //https://stackoverflow.com/questions/53477466/react-referenceerror-regeneratorruntime-is-not-defined
    plugins: ["@babel/plugin-transform-runtime"],
  };