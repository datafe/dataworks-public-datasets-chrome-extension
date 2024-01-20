import React, { useState } from 'react';
import intl from 'react-intl-universal';
import DatasetDetails from './DatasetDetails';
import DatasetScenario from './DatasetScenario';
import { Radio } from 'antd';

import '@pages/sidepanel/Dataset.scss';

interface IProps {
  data: Dataset;
  onBackToList: () => void;
}

type ItemView = 'Details' | 'Scenario';

const Dataset: React.FC<IProps> = (props) => {

  const { data } = props;
  const [itemView, setItemView] = useState<ItemView>('Scenario');

  return (
    <div className="dataset-item">
      <div className="description">{data?.description}</div>
      <Radio.Group className="item-view-switch" size="small" defaultValue="Scenario" buttonStyle="solid" onChange={(e) => setItemView(e?.target?.value)}>
        <Radio.Button value="Details">{intl.get('details')}</Radio.Button>
        <Radio.Button value="Scenario">{intl.get('scenario')}</Radio.Button>
      </Radio.Group>
      {itemView === 'Details' ? <DatasetDetails data={data} /> : <DatasetScenario data={data} />}
    </div>
  )
}

export default Dataset;