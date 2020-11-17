const apiPath = process.env.API_PATH

module.exports = {
  env: {
    VITE_API_PATH: apiPath,
  },
  vueCompilerOptions: {
    directiveTransforms: {
      "in-view": () => {
        return {
          props: [],
        }
      },
    },
  },
}
