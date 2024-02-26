// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
export default {
  ...DefaultTheme,
  // enhanceApp(ctx) {
  //   DefaultTheme.enhanceApp(ctx);
  //   // ...
  // },
  setup() {
    console.log('--------------------------');
  }
};
