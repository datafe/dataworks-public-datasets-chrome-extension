import React, { useState, useEffect } from 'react';
import intl from 'react-intl-universal';
import copy from 'copy-to-clipboard';
import delay from 'lodash/delay';
import uniqueId from 'lodash/uniqueId';
import hljs from 'highlight.js/lib/core';
import hlsql from 'highlight.js/lib/languages/sql';
import { Card, Segmented, Button, message } from 'antd';
import { getMarkdownHtml } from '@shared/utils/markdown';
import { LoadingOutlined } from '@ant-design/icons';

import 'highlight.js/styles/github.css';
import '@pages/sidepanel/Dataset.scss';

hljs.registerLanguage('sql', hlsql);

interface IProps {
  data: Dataset;
}

const DatasetScenario: React.FC<IProps> = (props) => {
  const { data } = props;

  const [contentId] = useState<string>(`id-${uniqueId()}`);
  const [dataSourceType, setDataSourceType] = useState<DataSourceType>('MAXCOMPUTE');
  const [rerenderingMarkdown, setRerenderingMarkdown] = useState<boolean>(false);

  const getEngineTypeStatements = (engineType: DataSourceType, engineStatements: Statement[]) => {
    const statements = engineStatements?.filter?.((item) => item.engineType === engineType)?.map?.((item) => item.statements || '');
    return statements?.join?.('\n\n') || '';
  };

  const transferMarkdownCustomComponents = () => {

    const languageSql = 'sql';
    const codeDoms = document.querySelectorAll(`#${contentId} code.language-${languageSql}`);
    if (codeDoms?.length > 0) {
      for (let i = 0; i < codeDoms?.length; i++) {
        const dom = codeDoms?.[i] as HTMLDivElement;
        const innerText = dom?.innerText || '';
        const codeDom = document.createElement('div');
        codeDom.className = 'code-content';
        dom?.insertAdjacentElement?.('beforebegin', codeDom);
        dom?.remove?.();
        const code = hljs?.highlight?.(innerText, { language: 'sql' })?.value || '';
        codeDom.innerHTML = code;
      }
    }

  };

  useEffect(() => {
    setRerenderingMarkdown(true);
    delay(() => {
      transferMarkdownCustomComponents();
      setRerenderingMarkdown(false);
    }, 300);
  }, [dataSourceType]);

  return (
    <div className="dataset-scenario" id={contentId}>
      {
        data?.scenarios?.map?.((scenario, index) => {

          const sqlContent = getEngineTypeStatements(dataSourceType, data?.engineStatements);

          const content = (scenario?.content || '')?.replace('!sqlcontent', sqlContent);
          const scenarioHtml = getMarkdownHtml(content) || '<div/>';

          return (
            // @ts-ignore
            <Card
              key={String(index)}
              className="scenario-item"
              title={`${index + 1}. ${scenario.name}`}
              bordered={false}
            >
              <Segmented
                className="item-view-segment"
                defaultValue={dataSourceType}
                onChange={(value) => setDataSourceType(value as DataSourceType)}
                options={[
                  { value: 'MAXCOMPUTE', label: intl.get('maxCompute') },
                  { value: 'HOLOGRES', label: intl.get('hologres') },
                  { value: 'EMR_SPARK', label: intl.get('emrSpark') },
                ]}
              />
              <Button size="small" className="copy-scenario-btn" onClick={() => {
                if (!sqlContent) return;
                copy(sqlContent);
                message.info(intl.get('copySuccess'));
              }}>{intl.get('copyScenarioSql')}</Button>
              <div className={`markdown-content ${rerenderingMarkdown ? 'rerendering' : ''}`} dangerouslySetInnerHTML={{ __html: scenarioHtml }} />
              {rerenderingMarkdown && <div className="loading-wrapper"><LoadingOutlined /></div>}
            </Card>
          )
        })
      }
    </div>
  );
};
export default DatasetScenario;