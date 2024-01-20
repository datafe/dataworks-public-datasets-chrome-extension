import React from 'react';
import { Avatar, List, Button } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';

import '@pages/sidepanel/Datasets.scss';

interface IProps {
  data: Dataset[];
  onSelectDataset: (dataset: Dataset) => void;
}

const Datasets: React.FC<IProps> = (props) => {

  const { data, onSelectDataset } = props;

  return (
    <List
      className="dataset-list"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item className="dataset-list-item">
          <List.Item.Meta
            className="dataset-list-item-meta"
            avatar={<Avatar icon={<ContainerOutlined />} />}
            title={<Button className="dataset-list-item-title" type="text" onClick={() => onSelectDataset?.(item)} >{item.title}</Button>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
}

export default Datasets;


