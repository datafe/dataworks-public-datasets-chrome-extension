import React from 'react';
import intl from 'react-intl-universal';
import { Card, Button, message, Tag, Table } from 'antd';

import '@pages/sidepanel/Dataset.scss';

interface IProps {
  data: Dataset;
}

const DatasetDetails: React.FC<IProps> = (props) => {

  const { data } = props;

  const showCell = (v) => <div title={v}>{v}</div>;

  const showColumnNameCell = (v: string, r: Column, i: number) => {
    const isPartitionKey = r?.isPartitionKey;
    return (
      <div className="column-name-wrap" title={v}>
        <span className="column-name">{v}</span>
        {isPartitionKey ? (
          <span className="column-partition-key-tag">
            <Tag color="blue">
              {intl.get('is_column_partition_key').d('分区字段')}
            </Tag>
          </span>) : undefined}
      </div>
    );
  };

  const getDatasetLicense = (dataset: Dataset) => {
    return dataset?.license ? (
      <div className="license-content">
        <div className="title-content">
          <div className="header-left-bar" />
          <div className="license-name">
            {intl.get('datasetLicense')}
          </div>
        </div>
        <div className="content">
          {
            dataset?.ref && (
              <>
                {intl.get('datasetRefTip')}
                <a href={dataset?.refUrl} target="_blank" className="ref-url">{dataset?.ref}</a>
              </>
            )
          }
          {
            dataset?.license && (
              <>
                {intl.get('datasetLicenseTip')}
                <a href={dataset?.licenseUrl} target="_blank" className="license-url">{dataset?.license}</a>
              </>
            )
          }{
            dataset?.licenseDescription && (
              <span className="license-description">{dataset?.licenseDescription}</span>
            )
          }
        </div>
      </div>
    ) : <div />;
  };

  return (
    <div className="dataset-details">
      {
        data?.tableList?.map?.((table, index) => {

          const dataSource = table?.columnList || [];

          return (
            // @ts-ignore
            <Card
              key={String(index)}
              className="details-item"
              title={`${index + 1}. ${table?.tableName}`}
              bordered={false}
            >
              <div className="details-item-content">
                {table?.isPartitioned && <Tag color="blue">分区表</Tag>}
                <Table
                  className="dataset-table-columns"
                  dataSource={dataSource}
                >
                  <Table.Column title={intl.get('datasetTableIndex')} dataIndex="columnName" width={66} render={(v, r, i: number) => showCell(i + 1)} />
                  <Table.Column title={intl.get('datasetTableColumnName')} dataIndex="columnName" render={showColumnNameCell} />
                  <Table.Column title={intl.get('datasetTableColumnType').d('类型')} dataIndex="columnType" render={showCell} />
                  <Table.Column title={intl.get('datasetTableColumnComment').d('描述')} dataIndex="columnComment" render={showCell} />
                </Table>

              </div>

            </Card>
          )
        })
      }
      <div className="license-wrapper">
        {getDatasetLicense(data)}
      </div>
    </div>
  );
};
export default DatasetDetails;