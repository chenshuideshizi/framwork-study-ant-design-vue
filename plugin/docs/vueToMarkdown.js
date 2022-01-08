import fetchCode from '../md/utils/fetchCode';

export function createVueToMarkdownRenderFn() {
  return (src) => {
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

    const result = {
      vueSrc: newContent?.trim(),
      ignore: !docs,
    };

    return result;
  };
}
