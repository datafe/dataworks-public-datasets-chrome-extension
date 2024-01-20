import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export const getMarkdownHtml = (mdStr: string) => {

  let result = '';

  try {

    const scenarioHtml = md.render(mdStr || '');

    // decode custom div
    const temp = document.createElement('div');
    temp.innerHTML = scenarioHtml;
    const paragraphs = temp.querySelectorAll('p');
    for (let i = 0; i < paragraphs?.length; i++) {
      const p = paragraphs?.[i];
      const text = p?.innerText;

      if (text?.includes?.('!divid')) {
        // 支持塞入 div + id 的写法 => !divid:id
        const div = document.createElement('div');
        div.className = 'markdown-custom-component markdown-div';
        div.id = text?.split?.(':')?.[1];
        p?.insertAdjacentElement?.('beforebegin', div);
        p?.remove?.();
      } else if (text?.includes?.('!divclass')) {
        // 支持塞入 div + class 的写法 => !divclass:className
        const div = document.createElement('div');
        div.className = 'markdown-custom-component markdown-div';
        const className = text?.split?.(':')?.[1];
        if (className) div.classList.add(className);
        p?.insertAdjacentElement?.('beforebegin', div);
        p?.remove?.();
      } else if (text?.includes?.('!iframe')) {
        // 支持塞入 iframe 的写法 => !iframe-small:https://xxx;
        const iframe: HTMLIFrameElement = document.createElement('iframe');
        iframe.className = 'markdown-custom-component markdown-iframe';
        if (text?.includes?.('!iframe-')) {
          // 需要挂上特别的样式
          const className = text?.substring?.(text?.indexOf?.('-') + 1, text?.indexOf?.(':')) || '';
          if (className) iframe.classList.add(className);
        }
        iframe.src = text?.substring?.(text?.indexOf?.(':') + 1) || '';
        p?.insertAdjacentElement?.('beforebegin', iframe);
        p?.remove?.();
      }

    }

    // image lazy 下载
    const images = temp.querySelectorAll('img');
    for (let i = 0; i < images?.length; i++) {
      const imgDom = images?.[i] as any; // 编译会报错改 any
      if (imgDom) imgDom.loading = 'lazy';
    }

    result = temp?.innerHTML || '';

  } catch (e) {
    console.error(e);
  }

  return result;

};

