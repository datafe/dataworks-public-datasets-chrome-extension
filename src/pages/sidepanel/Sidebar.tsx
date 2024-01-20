import React, { useState } from 'react';
import intl from 'react-intl-universal';
import Datasets from './Datasets';
import DatasetComponent from './Dataset';
import copy from 'copy-to-clipboard';
import { Avatar, Segmented, List, Button, Modal, Input, message } from 'antd';
import { ArrowLeftOutlined, ShareAltOutlined, ExportOutlined } from '@ant-design/icons';
import { PublicDatasetList } from '@root/src/shared/constants/common';

import '@pages/sidepanel/Sidebar.scss';

interface IProps { }

const Sidebar: React.FC<IProps> = (props) => {

  const [selectedDataset, setSelectedDataset] = useState<Dataset>(null);
  const [datasets] = useState<Dataset[]>(
    PublicDatasetList?.map?.((item) => {
      return ({
        ...item,
        title: item?.title || intl.get(item.nameKey),
        description: item?.description || intl.get(item.descriptionKey),
      });
    })
  );

  const onSelectDataset = (item: Dataset) => {
    setSelectedDataset(item);
  }

  const onBackToList = () => {
    setSelectedDataset(null);
  }

  const onGotoLink = (link: string) => {
    window?.open?.(link, '_blank');
  }

  const onShowShare = (link: string) => {
    Modal.confirm({
      maskClosable: true,
      title: intl.get('shareLinkTitle'),
      okText: intl.get('close'),
      content: (
        <div className="share-link-content">
          <Input value={link} />
        </div>
      ),
      footer: (_, { OkBtn }) => (
        <>
          <Button className="copy-link-btn" onClick={() => {
            if (!link) return;
            copy(link);
            message.info(intl.get('copySuccess'));
          }}>{intl.get('copy')}</Button>
          <Button className="goto-link-btn" onClick={() => {
            if (!link) return;
            window?.open?.(link, '_blank');
          }}>{intl.get('openLink')}</Button>
          <OkBtn />
        </>
      ),
    });
  }

  return (
    <div className="sidebar-wrapper">
      <div className="header">{selectedDataset ? (
        <div className="dataset-title-wrapper">
          <ArrowLeftOutlined onClick={() => onBackToList()} />
          <span className="text">{selectedDataset?.title}</span>
          <ShareAltOutlined onClick={() => onShowShare(selectedDataset?.link)} />
          {/* <ExportOutlined onClick={() => onGotoLink(selectedDataset?.link)} /> */}
        </div>
      ) : intl.get('appName')}</div>
      <div className="content">
        {
          selectedDataset ?
            <DatasetComponent data={selectedDataset} onBackToList={onBackToList} /> :
            <>
              <div className="use-guide"><a href="https://help.aliyun.com/zh/dataworks/getting-started/use-big-data-and-ai-to-analyze-public-datasets" target="_blank">{intl.get('useGuide')}</a></div>
              <Datasets data={datasets} onSelectDataset={onSelectDataset} />
            </>
        }
      </div>
    </div>
  );
}

export default Sidebar;