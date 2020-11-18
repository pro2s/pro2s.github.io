module.exports = {
  vueCompilerOptions: {
    directiveTransforms: {
      "in-view": (...x) => {
        console.log(x)
        return {
          props: [],
        }
      },
    },
  },
}
