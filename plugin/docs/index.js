import { createVueToMarkdownRenderFn } from './vueToMarkdown';
import { createMarkdownToVueRenderFn } from '../md/markdownToVue';


export default (options = {}) => {
  const { root, markdown } = options;
  const vueToMarkdown = createVueToMarkdownRenderFn();
  const markdownToVue = createMarkdownToVueRenderFn();
  return {
    name: 'vueToMdToVue',
    async transform(code, id) {
      if (
        (id.endsWith('.vue') && id.indexOf('/demo/') > -1 && id.indexOf('index.vue') === -1) || //  demo 文件夹下的 .vue 文件，除了 index.vue
        id.indexOf('/examples/App.vue') > -1 // 或 example/app.vue
      ) {
        console.log('id', id)
        const res = vueToMarkdown(code);
        // transform .md files into vueSrc so plugin-vue can handle it
        return {
          code: res.ignore ? res.vueSrc : (await markdownToVue(res.vueSrc, id)).vueSrc,
          map: null,
        };
      }
    },
  };
};
