import path from 'path';
import LRUCache from 'lru-cache';
import slash from 'slash';
import fetchCode from '../md/utils/fetchCode';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('vitepress:md');
const cache = new LRUCache({ max: 1024 });

export function createVueToMarkdownRenderFn(root) {
  return (src, file) => {
    const relativePath = slash(path.relative(root, file));

    const cached = cache.get(src);
    if (cached) {
      debug(`[cache hit] ${relativePath}`);
      return cached;
    }

    const start = Date.now();
    const docs = fetchCode(src, 'docs')?.trim();
    const template = fetchCode(src, 'template');
    const script = fetchCode(src, 'script');
    const style = fetchCode(src, 'style');
    const newContent = `${docs}
\`\`\`vue
${template}
${script}
${style}
\`\`\`
`;
    debug(`[render] ${file} in ${Date.now() - start}ms.`);
    const result = {
      vueSrc: newContent?.trim(),
      ignore: !docs,
    };
    cache.set(src, result);
    return result;
  };
}
