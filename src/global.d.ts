declare module 'virtual:reload-on-update-in-background-script' {
  export const reloadOnUpdate: (watchPath: string) => void;
  export default reloadOnUpdate;
}

declare module 'virtual:reload-on-update-in-view' {
  const refreshOnUpdate: (watchPath: string) => void;
  export default refreshOnUpdate;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}

// interface Browser {
//   runtime: {
//     /** open Option page */
//     openOptionsPage: () => void;
//   }
// }

// declare var browser: Browser;


/* ======== APP Types ====== */

declare type DataSourceType = 'MAXCOMPUTE' | 'HOLOGRES' | 'EMR_SPARK';
declare type StatementType = 'SCENARIO';

declare interface Statement {
  datasetId: number;
  engineType: DataSourceType;
  statementType: StatementType;
  statements: string;
  tableName: string;
}

declare interface Scenario {
  code: string;
  content: string;
  lastUpdateTime: number;
  name: string;
}

declare interface Column {
  columnName: string;
  columnType: string;
  columnComment: string;
  isPartitionKey: boolean;
}

declare interface Table {
  tableName: string;
  tableComment: string;
  sampleDataLocation?: string;
  dataSize?: number;
  columnList: Column[];
  isPartitioned: boolean;
}

declare interface Dataset {
  title?: string;
  description?: string;
  nameKey?: string;
  descriptionKey?: string;
  engines?: DataSourceType[];
  link?: string;
  scenarios?: Scenario[];
  tableList?: Table[];
  engineStatements?: Statement[];
  license?: string;
  licenseUrl?: string;
  licenseDescription?: string;
  ref?: string;
  refUrl?: string;
}


