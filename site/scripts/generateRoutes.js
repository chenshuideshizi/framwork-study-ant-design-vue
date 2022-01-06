/* eslint-disable @typescript-eslint/no-var-requires */
const { globby } = require('globby'); // (1)新版本写法为 { globby }, 老版本写法为 globby
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { ESLint } = require('eslint');

(async () => {
  // 1. 获取 components 目录下的 md 文件
  const paths = await globby('components/*/index.*.md'); // (1) 这里的匹配是完整的路径
  console.log('paths', paths)

  const components = {};

  paths.forEach(path => {
    const content = fs.readFileSync(path).toString();
    const componentName = path.split('/')[1];
    
    // 2. 匹配 md 文件中的内容，并保存到 components
    if (componentName !== 'color-picker') {
      // 2.1 从 mk 文件中获取路由信息
      const { data } = matter(content);
      console.log('data', data)
      components[componentName] = { ...components[componentName], ...data };
    }
  });

  console.log('components', components)

  // 路由模板
  const TEMPLATE = `
export default [
  ${Object.keys(components).map(
    component => `
  {
    path: '${component}:lang(-cn)?',
    meta: ${JSON.stringify(components[component])},
    component: () => import('../../../components/${component}/demo/index.vue'),
  }`,
  )}
];`;

  const engine = new ESLint({
    fix: true,
    useEslintrc: false,
    baseConfig: require(path.join(process.cwd(), '.eslintrc.js')), // (1)这里需要保证根目录有 .eslintrc 文件
  });

  // 3. 格式化模板
  const report = await engine.lintText(TEMPLATE);

  // 4. 输出文件
  fs.writeFileSync('site/src/router/demoRoutes.js', report[0].source); // (1)新版本写法为 report[0].source，老版本写法为 report[0].output。(2) 不会自动创建目录，需要保证文件目录存在
})();
