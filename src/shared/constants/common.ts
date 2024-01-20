

export const PRODUCT_NAME = chrome.i18n.getMessage("appName");

export const PublicDatasetList: Dataset[] = [
  {
    nameKey: 'publicDataset706Name',
    descriptionKey: 'publicDataset706Des',
    engines: ['MAXCOMPUTE', 'HOLOGRES', 'EMR_SPARK'],
    link: 'https://dataworks.console.aliyun.com/publicDatasets/706',
    license: "CC-BY-4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    ref: "GH Archive",
    refUrl: "https://www.gharchive.org",
    scenarios: [
      {
        lastUpdateTime: 1697423511221,
        content: "查询表dwd_github_events_odps，统计各项目在近一年中获得的星标总数，最终得到星标数量最多的前10名项目排行榜。\n\n## SQL内容\n``` sql\n!sqlcontent\n```\n## 分析结果\n\n![vis-img](https://img.alicdn.com/imgextra/i4/O1CN01Aoqfu41l3xj51aFBY_!!6000000004764-2-tps-900-788.png)\n",
        code: "fact_table_statistical_analysis",
        name: "Top10获星标项目排行榜"
      },
      {
        lastUpdateTime: 1697423511221,
        content: "查询表dws_overview_by_repo_by_month_dailyupdate，统计alibaba/druid项目按月累计获星标数量变化趋势。\n\n## SQL内容\n``` sql\n!sqlcontent\n```\n## 分析结果\n\n![vis-img](https://img.alicdn.com/imgextra/i2/O1CN01cH5A2k1DSyQ6zFvMZ_!!6000000000216-2-tps-900-787.png)\n",
        code: "aggregate_table_statistical_analysis",
        name: "某项目的星标数量变化趋势"
      }
    ],
    tableList: [
      {
        tableName: "dwd_github_events_odps",
        tableComment: "Github公开事件数据事实表",
        columnList: [
          {
            columnName: "id",
            columnType: "bigint",
            columnComment: "事件ID",
            isPartitionKey: false
          },
          {
            columnName: "actor_id",
            columnType: "bigint",
            columnComment: "事件发起人ID",
            isPartitionKey: false
          },
          {
            columnName: "actor_login",
            columnType: "string",
            columnComment: "事件发起人登录名",
            isPartitionKey: false
          },
          {
            columnName: "repo_id",
            columnType: "bigint",
            columnComment: "repoID",
            isPartitionKey: false
          },
          {
            columnName: "repo_name",
            columnType: "string",
            columnComment: "repo全名：owner/Repository_name",
            isPartitionKey: false
          },
          {
            columnName: "org_id",
            columnType: "bigint",
            columnComment: "repo所属组织ID",
            isPartitionKey: false
          },
          {
            columnName: "org_login",
            columnType: "string",
            columnComment: "repo所属组织名称",
            isPartitionKey: false
          },
          {
            columnName: "type",
            columnType: "string",
            columnComment: "事件类型",
            isPartitionKey: false
          },
          {
            columnName: "created_at",
            columnType: "datetime",
            columnComment: "事件发生时间",
            isPartitionKey: false
          },
          {
            columnName: "action",
            columnType: "string",
            columnComment: "事件行为",
            isPartitionKey: false
          },
          {
            columnName: "iss_or_pr_id",
            columnType: "bigint",
            columnComment: "issue/pull_request ID",
            isPartitionKey: false
          },
          {
            columnName: "number",
            columnType: "bigint",
            columnComment: "issue/pull_request 序号",
            isPartitionKey: false
          },
          {
            columnName: "comment_id",
            columnType: "bigint",
            columnComment: "comment（评论）ID",
            isPartitionKey: false
          },
          {
            columnName: "commit_id",
            columnType: "string",
            columnComment: "commit（提交记录）ID",
            isPartitionKey: false
          },
          {
            columnName: "member_id",
            columnType: "bigint",
            columnComment: "成员ID",
            isPartitionKey: false
          },
          {
            columnName: "rev_or_push_or_rel_id",
            columnType: "bigint",
            columnComment: "review/push/release ID",
            isPartitionKey: false
          },
          {
            columnName: "ref",
            columnType: "string",
            columnComment: "创建/删除的资源名称",
            isPartitionKey: false
          },
          {
            columnName: "ref_type",
            columnType: "string",
            columnComment: "创建/删除的资源类型",
            isPartitionKey: false
          },
          {
            columnName: "state",
            columnType: "string",
            columnComment: "issue/pull_request/pull_request_review的状态",
            isPartitionKey: false
          },
          {
            columnName: "author_association",
            columnType: "string",
            columnComment: "actor与repo之间的关系",
            isPartitionKey: false
          },
          {
            columnName: "language",
            columnType: "string",
            columnComment: "请求合并代码的语言",
            isPartitionKey: false
          },
          {
            columnName: "merged",
            columnType: "boolean",
            columnComment: "是否接受合并",
            isPartitionKey: false
          },
          {
            columnName: "merged_at",
            columnType: "datetime",
            columnComment: "代码合并时间",
            isPartitionKey: false
          },
          {
            columnName: "additions",
            columnType: "bigint",
            columnComment: "代码增加行数",
            isPartitionKey: false
          },
          {
            columnName: "deletions",
            columnType: "bigint",
            columnComment: "代码减少行数",
            isPartitionKey: false
          },
          {
            columnName: "changed_files",
            columnType: "bigint",
            columnComment: "pull request 改变文件数量",
            isPartitionKey: false
          },
          {
            columnName: "push_size",
            columnType: "bigint",
            columnComment: "提交数量",
            isPartitionKey: false
          },
          {
            columnName: "push_distinct_size",
            columnType: "bigint",
            columnComment: "不同的提交数量",
            isPartitionKey: false
          },
          {
            columnName: "hr",
            columnType: "string",
            columnComment: "事件发生所在小时，如00点23分，hr=00",
            isPartitionKey: false
          },
          {
            columnName: "month",
            columnType: "string",
            columnComment: "事件发生所在月，如2015年10月，month=2015-10",
            isPartitionKey: false
          },
          {
            columnName: "year",
            columnType: "string",
            columnComment: "事件发生所在年，如2015年，year=2015",
            isPartitionKey: false
          },
          {
            columnName: "ds",
            columnType: "string",
            columnComment: "事件发生所在日，ds=yyyy-mm-dd",
            isPartitionKey: true
          }
        ],
        isPartitioned: true
      },
      {
        tableName: "dws_overview_by_repo_by_month_dailyupdate",
        tableComment: "Github公开事件数据聚合表",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_update/L2_github_events/dws_overview_by_repo_by_month_dailyupdate.txt",
        dataSize: 608616771,
        columnList: [
          {
            columnName: "repo_id",
            columnType: "bigint",
            columnComment: "repoID",
            isPartitionKey: false
          },
          {
            columnName: "repo_name",
            columnType: "string",
            columnComment: "repo全名：owner/Repository_name",
            isPartitionKey: false
          },
          {
            columnName: "stars",
            columnType: "bigint",
            columnComment: "repo star数量",
            isPartitionKey: false
          },
          {
            columnName: "commits",
            columnType: "bigint",
            columnComment: "repo commits数量",
            isPartitionKey: false
          },
          {
            columnName: "pushes",
            columnType: "bigint",
            columnComment: "repo commits数量",
            isPartitionKey: false
          },
          {
            columnName: "total_prs",
            columnType: "bigint",
            columnComment: "repo 所有的pull_request数量",
            isPartitionKey: false
          },
          {
            columnName: "pr_creators",
            columnType: "bigint",
            columnComment: "repo 所有的pull_request提交者数量",
            isPartitionKey: false
          },
          {
            columnName: "pr_reviews",
            columnType: "bigint",
            columnComment: "repo 所有的pr_reviews数量",
            isPartitionKey: false
          },
          {
            columnName: "pr_reviewers",
            columnType: "bigint",
            columnComment: "repo 所有的pr_reviewers数量",
            isPartitionKey: false
          },
          {
            columnName: "total_issues",
            columnType: "bigint",
            columnComment: "repo 所有的问题数量",
            isPartitionKey: false
          },
          {
            columnName: "forks",
            columnType: "bigint",
            columnComment: "repo 收藏数量",
            isPartitionKey: false
          },
          {
            columnName: "month",
            columnType: "string",
            columnComment: "事件发生所在月，如2015年10月，month=2015-10",
            isPartitionKey: true
          }
        ],
        isPartitioned: true
      }
    ],
    engineStatements: [
      {
        tableName: "fact_table_statistical_analysis",
        statementType: "SCENARIO",
        engineType: "EMR_SPARK",
        statements: "--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 创建OSS外部表\nCREATE EXTERNAL TABLE IF NOT EXISTS dwd_github_events_odps (\n    id    BIGINT    COMMENT '事件ID',\n    actor_id    BIGINT    COMMENT '事件发起人ID',\n    actor_login    STRING    COMMENT '事件发起人登录名',\n    repo_id    BIGINT    COMMENT 'repoID',\n    repo_name    STRING    COMMENT 'repo全名：owner/Repository_name',\n    org_id    BIGINT    COMMENT 'repo所属组织ID',\n    org_login    STRING    COMMENT 'repo所属组织名称',\n    type    STRING    COMMENT '事件类型',\n    created_at    STRING    COMMENT '事件发生时间',\n    action    STRING    COMMENT '事件行为',\n    iss_or_pr_id    BIGINT    COMMENT 'issue/pull_request ID',\n    number    BIGINT    COMMENT 'issue/pull_request 序号',\n    comment_id    BIGINT    COMMENT 'comment（评论）ID',\n    commit_id    STRING    COMMENT 'commit（提交记录）ID',\n    member_id    BIGINT    COMMENT '成员ID',\n    rev_or_push_or_rel_id    BIGINT    COMMENT 'review/push/release ID',\n    ref    STRING    COMMENT '创建/删除的资源名称',\n    ref_type    STRING    COMMENT '创建/删除的资源类型',\n    state    STRING    COMMENT 'issue/pull_request/pull_request_review的状态',\n    author_association    STRING    COMMENT 'actor与repo之间的关系',\n    language    STRING    COMMENT '请求合并代码的语言',\n    merged    BOOLEAN    COMMENT '是否接受合并',\n    merged_at    STRING    COMMENT '代码合并时间',\n    additions    BIGINT    COMMENT '代码增加行数',\n    deletions    BIGINT    COMMENT '代码减少行数',\n    changed_files    BIGINT    COMMENT 'pull request 改变文件数量',\n    push_size    BIGINT    COMMENT '提交数量',\n    push_distinct_size    BIGINT    COMMENT '不同的提交数量',\n    hr    STRING    COMMENT '事件发生所在小时，如00点23分，hr=00',\n    month    STRING    COMMENT '事件发生所在月，如2015年10月，month=2015-10',\n    year    STRING    COMMENT '事件发生所在年，如2015年，year=2015'\n)\nCOMMENT 'Github公开事件数据事实表'\nPARTITIONED BY (\n    ds    string    COMMENT '事件发生所在日，ds=yyyy-mm-dd'\n)\nSTORED AS Parquet\nLOCATION 'oss://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_update/L2_github_events/dwd_github_events_odps/'\n;\n\n-- 对分区表 dwd_github_events_odps 恢复分区数据\nMSCK REPAIR TABLE dwd_github_events_odps ADD PARTITIONS;\n\n\n-- 统计过去一年获星标数项目排行榜（前10）\nSELECT  repo_id\n        ,repo_name\n        ,COUNT(actor_login) total\nFROM    dwd_github_events_odps\nWHERE   ds >= DATE_FORMAT(DATE_SUB(CURRENT_DATE(), 365), 'yyyyMMdd')\nAND     type = 'WatchEvent'\nGROUP BY repo_id\n         ,repo_name\nORDER BY total DESC\nLIMIT   10\n;",
        datasetId: 706
      },
      {
        tableName: "fact_table_statistical_analysis",
        statementType: "SCENARIO",
        engineType: "HOLOGRES",
        statements: "-- 创建Hologres外部表\nCREATE FOREIGN TABLE IF NOT EXISTS public.dwd_github_events_odps (\n    id    INT8,\n    actor_id    INT8,\n    actor_login    TEXT,\n    repo_id    INT8,\n    repo_name    TEXT,\n    org_id    INT8,\n    org_login    TEXT,\n    type    TEXT,\n    created_at  TIMESTAMP WITH TIME ZONE,\n    action    TEXT,\n    iss_or_pr_id    INT8,\n    number    INT8,\n    comment_id    INT8,\n    commit_id    TEXT,\n    member_id    INT8,\n    rev_or_push_or_rel_id    INT8,\n    ref    TEXT,\n    ref_type    TEXT,\n    state    TEXT,\n    author_association    TEXT,\n    language    TEXT,\n    merged    BOOL,\n    merged_at     TIMESTAMP WITH TIME ZONE,\n    additions    INT8,\n    deletions    INT8,\n    changed_files    INT8,\n    push_size    INT8,\n    push_distinct_size    INT8,\n    hr    TEXT,\n    month    TEXT,\n    year    TEXT,\n    ds    TEXT\n)\nSERVER odps_server\nOPTIONS (\n    project_name 'bigdata_public_dataset#github_events',\n    table_name 'dwd_github_events_odps'\n);\n\n-- 为外部表及其字段添加注释\nCOMMENT ON FOREIGN TABLE public.dwd_github_events_odps IS 'Github公开事件数据事实表';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.id IS '事件ID';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.actor_id IS '事件发起人ID';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.actor_login IS '事件发起人登录名';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.repo_id IS 'repoID';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.repo_name IS 'repo全名：owner/Repository_name';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.org_id IS 'repo所属组织ID';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.org_login IS 'repo所属组织名称';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.type IS '事件类型';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.created_at IS '事件发生时间';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.action IS '事件行为';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.iss_or_pr_id IS 'issue/pull_request ID';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.number IS 'issue/pull_request 序号';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.comment_id IS 'comment（评论）ID';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.commit_id IS 'commit（提交记录）ID';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.member_id IS '成员ID';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.rev_or_push_or_rel_id IS 'review/push/release ID';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.ref IS '创建/删除的资源名称';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.ref_type IS '创建/删除的资源类型';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.state IS 'issue/pull_request/pull_request_review的状态';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.author_association IS 'actor与repo之间的关系';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.language IS '请求合并代码的语言';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.merged IS '是否接受合并';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.merged_at IS '代码合并时间';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.additions IS '代码增加行数';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.deletions IS '代码减少行数';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.changed_files IS 'pull request 改变文件数量';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.push_size IS '提交数量';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.push_distinct_size IS '不同的提交数量';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.hr IS '事件发生所在小时，如00点23分，hr=00';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.month IS '事件发生所在月，如2015年10月，month=2015-10';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.year IS '事件发生所在年，如2015年，year=2015';\n-- COMMENT ON COLUMN public.dwd_github_events_odps.ds IS '事件发生所在日，ds=yyyy-mm-dd';\n\n\n-- 执行查询SQL\nSELECT  repo_id\n        ,repo_name\n        ,COUNT(actor_login) total\nFROM dwd_github_events_odps\nWHERE   ds >= TO_CHAR(CURRENT_DATE - INTERVAL '365 days', 'yyyy-mm-dd')\nAND     type = 'WatchEvent'\nGROUP BY repo_id\n         ,repo_name\nORDER BY total DESC\nLIMIT   10\n;",
        datasetId: 706
      },
      {
        tableName: "fact_table_statistical_analysis",
        statementType: "SCENARIO",
        engineType: "MAXCOMPUTE",
        statements: "-- 如果您未开启租户级别Schema语法，需要在运行query前通过session flag的方式设置。\nSET odps.namespace.schema = true;\n\n-- 执行查询SQL\nSELECT  repo_name\n        ,COUNT(actor_login) total\nFROM    bigdata_public_dataset.github_events.dwd_github_events_odps\nWHERE   ds >= DATE_ADD(GETDATE(),-365)\nAND     type = 'WatchEvent'\nGROUP BY repo_name\nORDER BY total DESC\nLIMIT   10;",
        datasetId: 706
      }
    ],
  },
  {
    nameKey: 'publicDataset701Name',
    descriptionKey: 'publicDataset701Des',
    engines: ['MAXCOMPUTE', 'HOLOGRES', 'EMR_SPARK'],
    link: 'https://dataworks.console.aliyun.com/publicDatasets/701',
    license: "CC BY-NC 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-nc/4.0/",
    scenarios: [
      {
        lastUpdateTime: 1697423511222,
        content: "本示例基于阿里电商数据集，以4小时为基础将全天时间划分为6个时间段，筛选所有用户行为中的下单行为，统计全天时间段用户最活跃的下单时间并排序。\n\n## SQL内容\n``` sql\n!sqlcontent\n```\n## 分析结果\n\n![vis-img](https://img.alicdn.com/imgextra/i2/O1CN01GvttRw1TlmXQJh0gW_!!6000000002423-2-tps-1200-776.png)\n",
        code: "user_active_ordering_time_analysis",
        name: "不同时间段的页面访问次数"
      }
    ],
    tableList: [
      {
        tableName: "commerce_ali_e_commerce",
        tableComment: "包含了2017年11月25日至2017年12月3日之间，约100万脱敏用户随机行为（行为包括点击、购买、加购、喜欢），其中用户数量987,994，商品数量4,162,024，所有行为数量100,150,807",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_commerce/L2_commerce_ali_e_commerce/commerce_ali_e_commerce.txt",
        dataSize: 1165522825,
        columnList: [
          {
            columnName: "user_id",
            columnType: "string",
            columnComment: "用户ID（非真实ID），经抽样&字段脱敏处理后得到",
            isPartitionKey: false
          },
          {
            columnName: "item_id",
            columnType: "string",
            columnComment: "商品ID（非真实ID），经抽样&字段脱敏处理后得到",
            isPartitionKey: false
          },
          {
            columnName: "behavior_type",
            columnType: "string",
            columnComment: "用户对商品的行为类型,包括浏览、收藏、加购物车、购买，对应取值分别是1、2、3、4",
            isPartitionKey: false
          },
          {
            columnName: "user_geohash",
            columnType: "string",
            columnComment: "用户位置的空间标识，可以为空,由经纬度通过保密的算法生成",
            isPartitionKey: false
          },
          {
            columnName: "item_category",
            columnType: "string",
            columnComment: "商品类别ID（非真实ID），经抽样&字段脱敏处理后得到",
            isPartitionKey: false
          },
          {
            columnName: "behavior_time",
            columnType: "string",
            columnComment: "行为时间,精确到小时级别",
            isPartitionKey: false
          }
        ],
        isPartitioned: false
      }
    ],
    engineStatements: [
      {
        tableName: "user_active_ordering_time_analysis",
        statementType: "SCENARIO",
        engineType: "EMR_SPARK",
        statements: "--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 创建OSS外部表\nCREATE EXTERNAL TABLE IF NOT EXISTS commerce_ali_e_commerce (\n    user_id    STRING    COMMENT '用户ID（非真实ID），经抽样&字段脱敏处理后得到',\n    item_id    STRING    COMMENT '商品ID（非真实ID），经抽样&字段脱敏处理后得到',\n    behavior_type    STRING    COMMENT '用户对商品的行为类型,包括浏览、收藏、加购物车、购买，对应取值分别是1、2、3、4',\n    user_geohash    STRING    COMMENT '用户位置的空间标识，可以为空,由经纬度通过保密的算法生成',\n    item_category    STRING    COMMENT '商品类别ID（非真实ID），经抽样&字段脱敏处理后得到',\n    behavior_time    STRING    COMMENT '行为时间,精确到小时级别'\n)\nCOMMENT '包含了2017年11月25日至2017年12月3日之间，约100万脱敏用户随机行为（行为包括点击、购买、加购、喜欢），其中用户数量987,994，商品数量4,162,024，所有行为数量100,150,807'\nSTORED AS Parquet\nLOCATION 'oss://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_commerce/L2_commerce_ali_e_commerce/commerce_ali_e_commerce/'\n;\n\n\n----本示例可以基于阿里电商数据集统计不同时间段的页面访问次数。\nSELECT  CASE    WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 0\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 3 THEN '00点-03点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 4\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 7 THEN '04点-07点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 8\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 11 THEN '08点-11点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 12\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 15 THEN '12点-15点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 16\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 19 THEN '16点-19点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 20\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 23 THEN '20点-23点'\n        END AS time_period\n        ,COUNT(1) AS page_visit_count\nFROM    commerce_ali_e_commerce\nWHERE   behavior_type = '1'\nGROUP BY time_period\nORDER BY time_period ASC\nLIMIT   100",
        datasetId: 701
      },
      {
        tableName: "user_active_ordering_time_analysis",
        statementType: "SCENARIO",
        engineType: "HOLOGRES",
        statements: "-- 创建Hologres外部表\nCREATE FOREIGN TABLE IF NOT EXISTS public.commerce_ali_e_commerce (\n    user_id    TEXT,\n    item_id    TEXT,\n    behavior_type    TEXT,\n    user_geohash    TEXT,\n    item_category    TEXT,\n    behavior_time    TEXT\n)\nSERVER odps_server\nOPTIONS (\n    project_name 'bigdata_public_dataset#commerce',\n    table_name 'commerce_ali_e_commerce'\n);\n\n-- 为外部表及其字段添加注释\nCOMMENT ON FOREIGN TABLE public.commerce_ali_e_commerce IS '包含了2017年11月25日至2017年12月3日之间，约100万脱敏用户随机行为（行为包括点击、购买、加购、喜欢），其中用户数量987,994，商品数量4,162,024，所有行为数量100,150,807';\n-- COMMENT ON COLUMN public.commerce_ali_e_commerce.user_id IS '用户ID（非真实ID），经抽样&字段脱敏处理后得到';\n-- COMMENT ON COLUMN public.commerce_ali_e_commerce.item_id IS '商品ID（非真实ID），经抽样&字段脱敏处理后得到';\n-- COMMENT ON COLUMN public.commerce_ali_e_commerce.behavior_type IS '用户对商品的行为类型,包括浏览、收藏、加购物车、购买，对应取值分别是1、2、3、4';\n-- COMMENT ON COLUMN public.commerce_ali_e_commerce.user_geohash IS '用户位置的空间标识，可以为空,由经纬度通过保密的算法生成';\n-- COMMENT ON COLUMN public.commerce_ali_e_commerce.item_category IS '商品类别ID（非真实ID），经抽样&字段脱敏处理后得到';\n-- COMMENT ON COLUMN public.commerce_ali_e_commerce.behavior_time IS '行为时间,精确到小时级别';\n\n\n----本示例可以基于公共数据集统计淘宝活跃下单时间并排序\nSELECT  CASE    WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 0\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 3 THEN '00点-03点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 4\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 7 THEN '04点-07点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 8\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 11 THEN '08点-11点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 12\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 15 THEN '12点-15点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 16\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 19 THEN '16点-19点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 20\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 23 THEN '20点-23点'\n        END AS 时间段\n        ,COUNT(1) AS 页面访问次数\nFROM   public.commerce_ali_e_commerce\nWHERE  behavior_type = '1'\nGROUP BY 时间段\nORDER BY 时间段\nLIMIT   100\n;",
        datasetId: 701
      },
      {
        tableName: "user_active_ordering_time_analysis",
        statementType: "SCENARIO",
        engineType: "MAXCOMPUTE",
        statements: "-- 如果您未开启租户级别Schema语法，需要在运行query前通过session flag的方式设置。\nSET odps.namespace.schema = true\n;\n\n----本示例可以基于阿里电商数据集统计不同时间段的页面访问次数。\nSELECT  CASE    WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 0\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 3 THEN '00点-03点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 4\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 7 THEN '04点-07点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 8\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 11 THEN '08点-11点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 12\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 15 THEN '12点-15点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 16\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 19 THEN '16点-19点'\n                WHEN CAST(SUBSTR(behavior_time,12) AS BIGINT) >= 20\n                    AND CAST(SUBSTR(behavior_time,12) AS BIGINT) <= 23 THEN '20点-23点'\n        END AS 时间段\n        ,COUNT(1) AS 页面访问次数\nFROM    bigdata_public_dataset.commerce.commerce_ali_e_commerce\nWHERE   behavior_type = '1'\nGROUP BY 时间段\nORDER BY 时间段 ASC\nLIMIT   100\n;",
        datasetId: 701
      }
    ],
  },
  {
    nameKey: 'publicDataset1001Name',
    descriptionKey: 'publicDataset1001Des',
    engines: ['MAXCOMPUTE', 'HOLOGRES', 'EMR_SPARK'],
    link: 'https://dataworks.console.aliyun.com/publicDatasets/1001',
    license: "QS Quacquarelli Symonds rankings data copyright",
    licenseUrl: "https://www.topuniversities.com/data-copyright",
    ref: "QS",
    refUrl: "https://www.topuniversities.com/university-rankings/world-university-rankings/2024?&tab=indicators&sort_by=overallscore&order_by=desc",
    scenarios: [
      {
        lastUpdateTime: 1697442431722,
        content: "中国大陆（不含香港、澳门、台湾）前100大学排名\n\n## SQL内容\n``` sql\n!sqlcontent\n```\n## 分析结果\n\n![vis-img](https://img.alicdn.com/imgextra/i4/O1CN01pAwxbY1JSs1LSyo1D_!!6000000001028-2-tps-800-666.png)\n",
        code: "top_100_chinese_universities",
        name: "中国前100大学排名"
      }
    ],
    tableList: [
      {
        tableName: "qs_world_university_rankings",
        tableComment: "QS世界大学排名",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_update/L2_qs_world_university_rankings/qs_world_university_rankings.txt",
        dataSize: 4219,
        columnList: [
          {
            columnName: "institution_name",
            columnType: "string",
            columnComment: "Institution Name",
            isPartitionKey: false
          },
          {
            columnName: "location_code",
            columnType: "string",
            columnComment: "Location Code",
            isPartitionKey: false
          },
          {
            columnName: "location_territory",
            columnType: "string",
            columnComment: "Location Territory",
            isPartitionKey: false
          },
          {
            columnName: "classification_size",
            columnType: "string",
            columnComment: "Classification Size",
            isPartitionKey: false
          },
          {
            columnName: "classification_focus",
            columnType: "string",
            columnComment: "Classification Focus",
            isPartitionKey: false
          },
          {
            columnName: "classification_res",
            columnType: "string",
            columnComment: "Classification Res.",
            isPartitionKey: false
          },
          {
            columnName: "classification_age",
            columnType: "bigint",
            columnComment: "Classification Age",
            isPartitionKey: false
          },
          {
            columnName: "classification_status",
            columnType: "string",
            columnComment: "Classification Status",
            isPartitionKey: false
          },
          {
            columnName: "academic_rep_score",
            columnType: "decimal(16,2)",
            columnComment: "Academic Reputation Score",
            isPartitionKey: false
          },
          {
            columnName: "academic_rep_rank",
            columnType: "string",
            columnComment: "Academic Reputation Rank",
            isPartitionKey: false
          },
          {
            columnName: "employer_rep_score",
            columnType: "decimal(16,2)",
            columnComment: "Employer Reputation Score",
            isPartitionKey: false
          },
          {
            columnName: "employer_rep_rank",
            columnType: "string",
            columnComment: "Employer Reputation Rank",
            isPartitionKey: false
          },
          {
            columnName: "faculty_student_score",
            columnType: "decimal(16,2)",
            columnComment: "Faculty Student Score",
            isPartitionKey: false
          },
          {
            columnName: "faculty_student_rank",
            columnType: "string",
            columnComment: "Faculty Student Rank",
            isPartitionKey: false
          },
          {
            columnName: "citations_faculty_score",
            columnType: "decimal(16,2)",
            columnComment: "Citations per Faculty Score",
            isPartitionKey: false
          },
          {
            columnName: "citations_faculty_rank",
            columnType: "string",
            columnComment: "Citations per Faculty Rank",
            isPartitionKey: false
          },
          {
            columnName: "intlnational_faculty_score",
            columnType: "decimal(16,2)",
            columnComment: "International Faculty Score",
            isPartitionKey: false
          },
          {
            columnName: "intlnational_faculty_rank",
            columnType: "string",
            columnComment: "International Faculty Rank",
            isPartitionKey: false
          },
          {
            columnName: "intlnational_student_score",
            columnType: "decimal(16,2)",
            columnComment: "International Students Score",
            isPartitionKey: false
          },
          {
            columnName: "intlnational_student_rank",
            columnType: "string",
            columnComment: "International Students Rank",
            isPartitionKey: false
          },
          {
            columnName: "overall_score",
            columnType: "string",
            columnComment: "Overall Score",
            isPartitionKey: false
          },
          {
            columnName: "overall_rank",
            columnType: "string",
            columnComment: "Overall Rank",
            isPartitionKey: false
          },
          {
            columnName: "ranking_year",
            columnType: "string",
            columnComment: "Ranking year，取值包括2022、2023、2024",
            isPartitionKey: true
          }
        ],
        isPartitioned: true
      }
    ],
    engineStatements: [
      {
        tableName: "top_100_chinese_universities",
        statementType: "SCENARIO",
        engineType: "EMR_SPARK",
        statements: "--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 创建OSS外部表\nCREATE EXTERNAL TABLE IF NOT EXISTS qs_world_university_rankings (\n    institution_name    STRING    COMMENT 'Institution Name',\n    location_code    STRING    COMMENT 'Location Code',\n    location_territory    STRING    COMMENT 'Location Territory',\n    classification_size    STRING    COMMENT 'Classification Size',\n    classification_focus    STRING    COMMENT 'Classification Focus',\n    classification_res    STRING    COMMENT 'Classification Res.',\n    classification_age    BIGINT    COMMENT 'Classification Age',\n    classification_status    STRING    COMMENT 'Classification Status',\n    academic_rep_score    DECIMAL(16,2)    COMMENT 'Academic Reputation Score',\n    academic_rep_rank    STRING    COMMENT 'Academic Reputation Rank',\n    employer_rep_score    DECIMAL(16,2)    COMMENT 'Employer Reputation Score',\n    employer_rep_rank    STRING    COMMENT 'Employer Reputation Rank',\n    faculty_student_score    DECIMAL(16,2)    COMMENT 'Faculty Student Score',\n    faculty_student_rank    STRING    COMMENT 'Faculty Student Rank',\n    citations_faculty_score    DECIMAL(16,2)    COMMENT 'Citations per Faculty Score',\n    citations_faculty_rank    STRING    COMMENT 'Citations per Faculty Rank',\n    intlnational_faculty_score    DECIMAL(16,2)    COMMENT 'International Faculty Score',\n    intlnational_faculty_rank    STRING    COMMENT 'International Faculty Rank',\n    intlnational_student_score    DECIMAL(16,2)    COMMENT 'International Students Score',\n    intlnational_student_rank    STRING    COMMENT 'International Students Rank',\n    overall_score    STRING    COMMENT 'Overall Score',\n    overall_rank    STRING    COMMENT 'Overall Rank'\n)\nCOMMENT 'QS世界大学排名'\nPARTITIONED BY (\n    ranking_year    string    COMMENT 'Ranking year'\n)\nSTORED AS Parquet\nLOCATION 'oss://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_update/L2_qs_world_university_rankings/qs_world_university_rankings/'\n;\n\n-- 对分区表 qs_world_university_rankings 恢复分区数据\nMSCK REPAIR TABLE qs_world_university_rankings ADD PARTITIONS;\n\n\n-- 执行查询SQL\nWITH chinese_institutions_2024 AS (\n    SELECT\n        institution_name,\n        -- handling none numeric characters as 0.00\n        CASE\n            WHEN REGEXP(overall_score, '^\\\\d+') THEN CAST (overall_score AS DECIMAL) -- for eailer spark versions\n            -- WHEN REGEXP_COUNT(overall_score, '^\\\\d+') > 0 THEN CAST (overall_score AS DECIMAL) -- since spark3.4\n            ELSE 0.00\n        END AS overall_score,\n        -- extract 1st numeriacl part from 1000-1200 or 1000+\n        CAST (REGEXP_EXTRACT(overall_rank, '(^\\\\d*)([+|-]?)(.*)', 1) AS BIGINT) AS overall_rank\n    FROM qs_world_university_rankings\n    WHERE ranking_year = '2024'\n      AND location_code = 'CN'\n)\nSELECT\n    institution_name,  overall_score, overall_rank\n FROM chinese_institutions_2024\n ORDER BY overall_rank ASC, overall_score DESC, institution_name ASC\nLIMIT 100\n;",
        datasetId: 1001
      },
      {
        tableName: "top_100_chinese_universities",
        statementType: "SCENARIO",
        engineType: "HOLOGRES",
        statements: "-- 创建Hologres外部表\nCREATE FOREIGN TABLE IF NOT EXISTS public.qs_world_university_rankings (\n    institution_name    TEXT,\n    location_code    TEXT,\n    location_territory    TEXT,\n    classification_size    TEXT,\n    classification_focus    TEXT,\n    classification_res    TEXT,\n    classification_age    INT8,\n    classification_status    TEXT,\n    academic_rep_score    DECIMAL(16,2),\n    academic_rep_rank    TEXT,\n    employer_rep_score    DECIMAL(16,2),\n    employer_rep_rank    TEXT,\n    faculty_student_score    DECIMAL(16,2),\n    faculty_student_rank    TEXT,\n    citations_faculty_score    DECIMAL(16,2),\n    citations_faculty_rank    TEXT,\n    intlnational_faculty_score    DECIMAL(16,2),\n    intlnational_faculty_rank    TEXT,\n    intlnational_student_score    DECIMAL(16,2),\n    intlnational_student_rank    TEXT,\n    overall_score    TEXT,\n    overall_rank    TEXT,\n    ranking_year    TEXT\n)\nSERVER odps_server\nOPTIONS (\n    project_name 'bigdata_public_dataset#education',\n    table_name 'qs_world_university_rankings'\n);\n\n-- 为外部表及其字段添加注释\nCOMMENT ON FOREIGN TABLE public.qs_world_university_rankings IS 'QS世界大学排名';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.institution_name IS 'Institution Name';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.location_code IS 'Location Code';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.location_territory IS 'Location Territory';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.classification_size IS 'Classification Size';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.classification_focus IS 'Classification Focus';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.classification_res IS 'Classification Res.';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.classification_age IS 'Classification Age';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.classification_status IS 'Classification Status';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.academic_rep_score IS 'Academic Reputation Score';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.academic_rep_rank IS 'Academic Reputation Rank';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.employer_rep_score IS 'Employer Reputation Score';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.employer_rep_rank IS 'Employer Reputation Rank';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.faculty_student_score IS 'Faculty Student Score';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.faculty_student_rank IS 'Faculty Student Rank';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.citations_faculty_score IS 'Citations per Faculty Score';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.citations_faculty_rank IS 'Citations per Faculty Rank';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.intlnational_faculty_score IS 'International Faculty Score';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.intlnational_faculty_rank IS 'International Faculty Rank';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.intlnational_student_score IS 'International Students Score';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.intlnational_student_rank IS 'International Students Rank';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.overall_score IS 'Overall Score';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.overall_rank IS 'Overall Rank';\n-- COMMENT ON COLUMN public.qs_world_university_rankings.ranking_year IS 'Ranking year';\n\n\n-- 执行查询SQL\nSELECT\n    institution_name, overall_score, overall_rank\n FROM (\n    SELECT\n        institution_name,\n        -- handling none numeric characters as 0.00\n        CASE\n            WHEN array_length(regexp_match(overall_score, '^\\d+'), 1) > 0 THEN CAST (overall_score AS DECIMAL)\n            ELSE 0.00\n        END AS\n        overall_score,\n        -- extract 1st numeriacl part from 1000-1200 or 1000+\n        CAST((regexp_split_to_array(overall_rank, '[\\+|\\-|\\=]'))[1] AS BIGINT) AS\n        overall_rank\n    FROM public.qs_world_university_rankings\n    WHERE location_code = 'CN'\n ) chinese_institutions_2024\n ORDER BY overall_rank ASC, overall_score DESC, institution_name ASC\nLIMIT 100\n;",
        datasetId: 1001
      },
      {
        tableName: "top_100_chinese_universities",
        statementType: "SCENARIO",
        engineType: "MAXCOMPUTE",
        statements: "-- 如果您未开启租户级别Schema语法，需要在运行query前通过session flag的方式设置。\nSET odps.namespace.schema = true;\n\n-- 执行查询SQL\nSET odps.sql.decimal.odps2=true;\nWITH chinese_institutions_2024 AS\n(\n    SELECT  institution_name -- handling none numeric characters as 0.00\n            ,CASE   WHEN REGEXP_COUNT(overall_score,'^\\\\d+') > 0 THEN CAST(overall_score AS DECIMAL)\n                    ELSE 0.00\n            END AS overall_score -- extract 1st numeriacl part from 1000-1200 or 1000+\n            ,CAST(REGEXP_EXTRACT(overall_rank,'(^\\\\d*)([+|-]?)(.*)',1) AS BIGINT) AS overall_rank\n    FROM    bigdata_public_dataset.education.qs_world_university_rankings\n    WHERE   ranking_year = '2024'\n    AND     location_code = 'CN'\n)\nSELECT  institution_name\n        ,overall_score\n        ,overall_rank\nFROM    chinese_institutions_2024\nORDER BY overall_rank ASC,overall_score DESC,institution_name ASC\nLIMIT   100\n;",
        datasetId: 1001
      }
    ],
  },
  {
    nameKey: 'publicDataset1002Name',
    descriptionKey: 'publicDataset1002Des',
    engines: ['MAXCOMPUTE', 'HOLOGRES', 'EMR_SPARK'],
    link: 'https://dataworks.console.aliyun.com/publicDatasets/1002',
    license: "浙江省数据开放平台数据开放授权许可使用协议",
    licenseUrl: "https://www.zj.gov.cn/art/2019/2/27/art_1229541677_59114744.html",
    ref: "杭州文化和旅游数据在线开放平台",
    refUrl: "https://data.wgly.hangzhou.gov.cn",
    scenarios: [
      {
        lastUpdateTime: 1697442452942,
        content: "作为一名旅行爱好者，计划在2023年国庆假期出游杭州，希望参考同年五一假期杭州市各区县的酒店入住率，帮助判断各区县酒店的热门程度，为酒店预定做准备。\n\n## SQL内容\n``` sql\n!sqlcontent\n```\n## 分析结果\n\n![vis-img](https://img.alicdn.com/imgextra/i3/O1CN01dRsIBF1SMlHgcFTcj_!!6000000002233-2-tps-800-689.png)\n",
        code: "occupancy_during_labour_day",
        name: "选择旅游酒店位置"
      }
    ],
    tableList: [
      {
        tableName: "hangzhou_tourism_statistics",
        tableComment: "杭州各区县旅游数据统计",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_hangzhou_tourism_statistics/hangzhou_tourism_statistics.txt",
        dataSize: 76769,
        columnList: [
          {
            columnName: "district_name",
            columnType: "string",
            columnComment: "区县名称",
            isPartitionKey: false
          },
          {
            columnName: "indicator_name",
            columnType: "string",
            columnComment: "指标名称：人均消费金额；来杭游客量；消费人数；消费笔数；消费金额；过夜旅客数量；酒店入住率",
            isPartitionKey: false
          },
          {
            columnName: "indicator_value",
            columnType: "decimal(16,2)",
            columnComment: "指标值",
            isPartitionKey: false
          },
          {
            columnName: "unit_name",
            columnType: "string",
            columnComment: "单位名称，万人、人次、万元等",
            isPartitionKey: false
          },
          {
            columnName: "ds",
            columnType: "string",
            columnComment: "指标日期，格式为 YYYY-MM-DD",
            isPartitionKey: false
          }
        ],
        isPartitioned: false
      }
    ],
    engineStatements: [
      {
        tableName: "occupancy_during_labour_day",
        statementType: "SCENARIO",
        engineType: "EMR_SPARK",
        statements: "--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 创建OSS外部表\nCREATE EXTERNAL TABLE IF NOT EXISTS hangzhou_tourism_statistics (\n    district_name    STRING    COMMENT '区县名称',\n    indicator_name    STRING    COMMENT '指标名称：人均消费金额；来杭游客量；消费人数；消费笔数；消费金额；过夜旅客数量；酒店入住率',\n    indicator_value    DECIMAL(16,2)    COMMENT '指标值',\n    unit_name    STRING    COMMENT '单位名称，万人、人次、万元等',\n    ds    STRING    COMMENT '指标日期，格式为 YYYY-MM-DD'\n)\nCOMMENT '杭州各区县旅游数据统计'\nSTORED AS Parquet\nLOCATION 'oss://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_hangzhou_tourism_statistics/hangzhou_tourism_statistics/'\n;\n\n-- 执行查询SQL\nSELECT    district_name,\n          AVG(indicator_value) AS avg_hotel_tourists_rate\nFROM      hangzhou_tourism_statistics\nWHERE     ds >= '2023-04-29'\nAND       ds <= '2023-05-03'\nAND       indicator_name = '酒店入住率'\nGROUP BY  district_name\nORDER BY  avg_hotel_tourists_rate DESC\nLIMIT 200;",
        datasetId: 1002
      },
      {
        tableName: "occupancy_during_labour_day",
        statementType: "SCENARIO",
        engineType: "HOLOGRES",
        statements: "-- 创建Hologres外部表\nCREATE FOREIGN TABLE IF NOT EXISTS public.hangzhou_tourism_statistics (\n    district_name    TEXT,\n    indicator_name    TEXT,\n    indicator_value    DECIMAL(16,2),\n    unit_name    TEXT,\n    ds    TEXT\n)\nSERVER odps_server\nOPTIONS (\n    project_name 'bigdata_public_dataset#life_service',\n    table_name 'hangzhou_tourism_statistics'\n);\n\n-- 为外部表及其字段添加注释\nCOMMENT ON FOREIGN TABLE public.hangzhou_tourism_statistics IS '杭州各区县旅游数据统计';\n-- COMMENT ON COLUMN public.hangzhou_tourism_statistics.district_name IS '区县名称';\n-- COMMENT ON COLUMN public.hangzhou_tourism_statistics.indicator_name IS '指标名称：人均消费金额；来杭游客量；消费人数；消费笔数；消费金额；过夜旅客数量；酒店入住率';\n-- COMMENT ON COLUMN public.hangzhou_tourism_statistics.indicator_value IS '指标值';\n-- COMMENT ON COLUMN public.hangzhou_tourism_statistics.unit_name IS '单位名称，万人、人次、万元等';\n-- COMMENT ON COLUMN public.hangzhou_tourism_statistics.ds IS '指标日期，格式为 YYYY-MM-DD';\n\n\n-- 执行查询SQL\nSELECT    district_name,\n          AVG(indicator_value) AS avg_hotel_tourists_rate\nFROM      public.hangzhou_tourism_statistics\nWHERE     ds >= '2023-04-29'\nAND       ds <= '2023-05-03'\nAND    indicator_name = '酒店入住率'\nGROUP BY  district_name\nORDER BY  avg_hotel_tourists_rate DESC\nLIMIT 200;",
        datasetId: 1002
      },
      {
        tableName: "occupancy_during_labour_day",
        statementType: "SCENARIO",
        engineType: "MAXCOMPUTE",
        statements: "-- 如果您未开启租户级别Schema语法，需要在运行query前通过session flag的方式设置。\nSET odps.namespace.schema = true;\n\n-- 执行查询SQL\nSET odps.sql.decimal.odps2=true;\nSELECT    district_name,\n          AVG(indicator_value) AS avg_hotel_tourists_rate\nFROM   bigdata_public_dataset.life_service.hangzhou_tourism_statistics\nWHERE ds >= '2023-04-29'\nAND ds <= '2023-05-03'\nAND indicator_name = '酒店入住率'\nGROUP BY  district_name\nORDER BY  avg_hotel_tourists_rate DESC\nLIMIT 200;\n\n",
        datasetId: 1002
      }
    ],
  },


  {
    nameKey: 'publicDataset703Name',
    descriptionKey: 'publicDataset703Des',
    engines: ['MAXCOMPUTE', 'HOLOGRES', 'EMR_SPARK'],
    link: 'https://dataworks.console.aliyun.com/publicDatasets/703',
    license: "CC BY-NC 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-nc/4.0/",
    scenarios: [
      {
        lastUpdateTime: 1697423511222,
        content: "基于用户基本信息表commerce_taobao_adv_user_profile，统计低档、中档、高档的用户数量。\n\n## SQL内容\n``` sql\n!sqlcontent\n```\n## 分析结果\n\n![vis-img](https://img.alicdn.com/imgextra/i1/O1CN01fbTi4021bsuXdsEgG_!!6000000007004-2-tps-900-782.png)\n",
        code: "users_of_different_consumption_level",
        name: "各消费档次的用户情况"
      }
    ],
    tableList: [
      {
        tableName: "commerce_taobao_adv_user_profile",
        tableComment: "淘宝用户基本信息表",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_commerce/L2_commerce_taobao_adv/commerce_taobao_adv_user_profile.txt",
        dataSize: 1061768,
        columnList: [
          {
            columnName: "user_id",
            columnType: "string",
            columnComment: "用户ID（非真实ID），经抽样&字段脱敏处理后得到",
            isPartitionKey: false
          },
          {
            columnName: "cms_seg_id",
            columnType: "string",
            columnComment: "微群ID, 经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          },
          {
            columnName: "cms_group_id",
            columnType: "string",
            columnComment: "GroupID, 经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          },
          {
            columnName: "final_gender_code",
            columnType: "string",
            columnComment: "性别",
            isPartitionKey: false
          },
          {
            columnName: "age_level",
            columnType: "string",
            columnComment: "年龄层次",
            isPartitionKey: false
          },
          {
            columnName: "pvalue_level",
            columnType: "string",
            columnComment: "消费档次，1:低档，2:中档，3:高档",
            isPartitionKey: false
          },
          {
            columnName: "shopping_level",
            columnType: "string",
            columnComment: "购物深度，1:浅层用户,2:中度用户,3:深度用户",
            isPartitionKey: false
          },
          {
            columnName: "occupation",
            columnType: "string",
            columnComment: "是否大学生",
            isPartitionKey: false
          },
          {
            columnName: "new_user_class_level",
            columnType: "string",
            columnComment: "城市层级",
            isPartitionKey: false
          }
        ],
        isPartitioned: false
      },
      {
        tableName: "commerce_taobao_adv_ad_feature",
        tableComment: "淘宝广告基本信息表",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_commerce/L2_commerce_taobao_adv/commerce_taobao_adv_ad_feature.txt",
        dataSize: 846811,
        columnList: [
          {
            columnName: "adgroup_id",
            columnType: "string",
            columnComment: "广告单元ID，经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          },
          {
            columnName: "cate_id",
            columnType: "string",
            columnComment: "商品类目ID，经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          },
          {
            columnName: "campaign_id",
            columnType: "string",
            columnComment: "广告计划ID，经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          },
          {
            columnName: "customer_id",
            columnType: "string",
            columnComment: "广告主ID，经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          },
          {
            columnName: "brand",
            columnType: "string",
            columnComment: "品牌ID，经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          },
          {
            columnName: "price",
            columnType: "string",
            columnComment: "商品的价格",
            isPartitionKey: false
          }
        ],
        isPartitioned: false
      },
      {
        tableName: "commerce_taobao_adv_behavior_log",
        tableComment: "淘宝用户的商品行为日志",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_commerce/L2_commerce_taobao_adv/commerce_taobao_adv_behavior_log.txt",
        dataSize: 723268134,
        columnList: [
          {
            columnName: "user_id",
            columnType: "string",
            columnComment: "用户ID（非真实ID），经抽样&字段脱敏处理后得到",
            isPartitionKey: false
          },
          {
            columnName: "behavior_time",
            columnType: "string",
            columnComment: "行为时间",
            isPartitionKey: false
          },
          {
            columnName: "behavior_type",
            columnType: "string",
            columnComment: "用户对商品的行为类型,包括浏览、收藏、加购物车、购买，ipv,fav,cart,buy",
            isPartitionKey: false
          }
        ],
        isPartitioned: false
      },
      {
        tableName: "commerce_taobao_adv_raw_sample",
        tableComment: "淘宝用户的广告位行为明细表",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_commerce/L2_commerce_taobao_adv/commerce_taobao_adv_raw_sample.txt",
        dataSize: 26557961,
        columnList: [
          {
            columnName: "user_id",
            columnType: "string",
            columnComment: "用户ID（非真实ID），经抽样&字段脱敏处理后得到",
            isPartitionKey: false
          },
          {
            columnName: "adgroup_id",
            columnType: "string",
            columnComment: "广告单元ID，经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          },
          {
            columnName: "behavior_time",
            columnType: "string",
            columnComment: "行为时间",
            isPartitionKey: false
          },
          {
            columnName: "pid",
            columnType: "string",
            columnComment: "资源位",
            isPartitionKey: false
          },
          {
            columnName: "noclk",
            columnType: "string",
            columnComment: "为1代表没有点击；为0代表点击",
            isPartitionKey: false
          },
          {
            columnName: "clk",
            columnType: "string",
            columnComment: "为0代表没有点击；为1代表点击",
            isPartitionKey: false
          }
        ],
        isPartitioned: false
      }
    ],
    engineStatements: [
      {
        tableName: "users_of_different_consumption_level",
        statementType: "SCENARIO",
        engineType: "EMR_SPARK",
        statements: "--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 创建OSS外部表\nCREATE EXTERNAL TABLE IF NOT EXISTS commerce_taobao_adv_user_profile (\n    user_id    STRING    COMMENT '用户ID（非真实ID），经抽样&字段脱敏处理后得到',\n    cms_seg_id    STRING    COMMENT '微群ID, 经字段脱敏处理后得到的序列化数据',\n    cms_group_id    STRING    COMMENT 'GroupID, 经字段脱敏处理后得到的序列化数据',\n    final_gender_code    STRING    COMMENT '性别',\n    age_level    STRING    COMMENT '年龄层次',\n    pvalue_level    STRING    COMMENT '消费档次，1:低档，2:中档，3:高档',\n    shopping_level    STRING    COMMENT '购物深度，1:浅层用户,2:中度用户,3:深度用户',\n    occupation    STRING    COMMENT '是否大学生',\n    new_user_class_level    STRING    COMMENT '城市层级'\n)\nCOMMENT '淘宝广告数据集-用户基本信息表'\nSTORED AS Parquet\nLOCATION 'oss://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_commerce/L2_commerce_taobao_adv/commerce_taobao_adv_user_profile/'\n;\n\n\n-- 执行查询SQL\nSELECT CASE WHEN pvalue_level='1' THEN '低档'\n            WHEN pvalue_level='2' THEN '中档'\n            WHEN pvalue_level='3' THEN '高档'\n        END AS consumption_level,\n        COUNT(user_id) AS total_user\nFROM commerce_taobao_adv_user_profile\nWHERE pvalue_level IN ('1','2','3')\nGROUP BY consumption_level;",
        datasetId: 703
      },
      {
        tableName: "users_of_different_consumption_level",
        statementType: "SCENARIO",
        engineType: "HOLOGRES",
        statements: "-- 创建Hologres外部表\nCREATE FOREIGN TABLE IF NOT EXISTS public.commerce_taobao_adv_user_profile (\n    user_id    TEXT,\n    cms_seg_id    TEXT,\n    cms_group_id    TEXT,\n    final_gender_code    TEXT,\n    age_level    TEXT,\n    pvalue_level    TEXT,\n    shopping_level    TEXT,\n    occupation    TEXT,\n    new_user_class_level    TEXT\n)\nSERVER odps_server\nOPTIONS (\n    project_name 'bigdata_public_dataset#commerce',\n    table_name 'commerce_taobao_adv_user_profile'\n);\n\n-- 为外部表及其字段添加注释\nCOMMENT ON FOREIGN TABLE public.commerce_taobao_adv_user_profile IS '淘宝广告数据集-用户基本信息表';\n-- COMMENT ON COLUMN public.commerce_taobao_adv_user_profile.user_id IS '用户ID（非真实ID），经抽样&字段脱敏处理后得到';\n-- COMMENT ON COLUMN public.commerce_taobao_adv_user_profile.cms_seg_id IS '微群ID, 经字段脱敏处理后得到的序列化数据';\n-- COMMENT ON COLUMN public.commerce_taobao_adv_user_profile.cms_group_id IS 'GroupID, 经字段脱敏处理后得到的序列化数据';\n-- COMMENT ON COLUMN public.commerce_taobao_adv_user_profile.final_gender_code IS '性别';\n-- COMMENT ON COLUMN public.commerce_taobao_adv_user_profile.age_level IS '年龄层次';\n-- COMMENT ON COLUMN public.commerce_taobao_adv_user_profile.pvalue_level IS '消费档次，1:低档，2:中档，3:高档';\n-- COMMENT ON COLUMN public.commerce_taobao_adv_user_profile.shopping_level IS '购物深度，1:浅层用户,2:中度用户,3:深度用户';\n-- COMMENT ON COLUMN public.commerce_taobao_adv_user_profile.occupation IS '是否大学生';\n-- COMMENT ON COLUMN public.commerce_taobao_adv_user_profile.new_user_class_level IS '城市层级';\n\n\n\n-- 执行查询SQL\nSELECT CASE WHEN pvalue_level='1' THEN '低档'\n            WHEN pvalue_level='2' THEN '中档'\n            WHEN pvalue_level='3' THEN '高档'\n        END AS consumption_level,\n        COUNT(user_id) AS total_user\nFROM public.commerce_taobao_adv_user_profile\nWHERE pvalue_level IN ('1','2','3')\nGROUP BY consumption_level;",
        datasetId: 703
      },
      {
        tableName: "users_of_different_consumption_level",
        statementType: "SCENARIO",
        engineType: "MAXCOMPUTE",
        statements: "-- 如果您未开启租户级别Schema语法，需要在运行query前通过session flag的方式设置。\nSET odps.namespace.schema = true;\n\n-- 执行查询SQL\nSELECT CASE WHEN pvalue_level='1' THEN '低档'\n            WHEN pvalue_level='2' THEN '中档'\n            WHEN pvalue_level='3' THEN '高档'\n        END AS consumption_level,\n        COUNT(user_id) AS total_user\nFROM bigdata_public_dataset.commerce.commerce_taobao_adv_user_profile\nWHERE pvalue_level IN ('1','2','3')\nGROUP BY consumption_level;",
        datasetId: 703
      }
    ],
  },
  {
    nameKey: 'publicDataset705Name',
    descriptionKey: 'publicDataset705Des',
    engines: ['MAXCOMPUTE', 'HOLOGRES', 'EMR_SPARK'],
    link: 'https://dataworks.console.aliyun.com/publicDatasets/705',
    license: "CC BY-NC 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-nc/4.0/",
    scenarios: [
      {
        lastUpdateTime: 1697423511222,
        content: "作为音乐爱好者，近期喜欢上了某位歌手，因此想考古下该歌手曾经发行歌曲的时间线，以及每次发歌后的播放量情况。\n\n## SQL内容\n``` sql\n!sqlcontent\n```\n## 分析结果\n\n![vis-img](https://img.alicdn.com/imgextra/i2/O1CN011sQk9O1PFwXHabvhA_!!6000000001812-2-tps-800-677.png)\n",
        code: "play_amount_of_singer_in_alibaba_music",
        name: "阿里音乐某歌手发行歌曲的播放量情况"
      }
    ],
    tableList: [
      {
        tableName: "life_service_alimusic_user",
        tableComment: "阿里音乐用户行为明细表",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_life_service_alimusic/life_service_alimusic_user.txt",
        dataSize: 15884086,
        columnList: [
          {
            columnName: "user_id",
            columnType: "string",
            columnComment: "用户ID（非真实ID），经抽样&字段脱敏处理后得到",
            isPartitionKey: false
          },
          {
            columnName: "song_id",
            columnType: "string",
            columnComment: "歌曲ID",
            isPartitionKey: false
          },
          {
            columnName: "behavior_time",
            columnType: "string",
            columnComment: "用户播放时间（unix时间戳表示）精确到小时",
            isPartitionKey: false
          },
          {
            columnName: "behavior_type",
            columnType: "string",
            columnComment: "行为类型：1，播放；2，下载，3，收藏",
            isPartitionKey: false
          },
          {
            columnName: "ds",
            columnType: "string",
            columnComment: "记录收集日",
            isPartitionKey: false
          }
        ],
        isPartitioned: false
      },
      {
        tableName: "life_service_alimusic_songs",
        tableComment: "阿里音乐歌曲信息维度表（包含艺人、发行时间等歌曲属性）",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_life_service_alimusic/life_service_alimusic_songs.txt",
        dataSize: 26957,
        columnList: [
          {
            columnName: "song_id",
            columnType: "string",
            columnComment: "歌曲ID",
            isPartitionKey: false
          },
          {
            columnName: "artist_id",
            columnType: "string",
            columnComment: "艺人ID",
            isPartitionKey: false
          },
          {
            columnName: "publish_time",
            columnType: "string",
            columnComment: "歌曲发行时间，精确到天",
            isPartitionKey: false
          },
          {
            columnName: "song_init_plays",
            columnType: "string",
            columnComment: "歌曲的初始播放数，表明该歌曲的初始热度",
            isPartitionKey: false
          },
          {
            columnName: "language",
            columnType: "string",
            columnComment: "数字表示1,2,3…",
            isPartitionKey: false
          },
          {
            columnName: "gender",
            columnType: "string",
            columnComment: "性别",
            isPartitionKey: false
          }
        ],
        isPartitioned: false
      }
    ],
    engineStatements: [
      {
        tableName: "play_amount_of_singer_in_alibaba_music",
        statementType: "SCENARIO",
        engineType: "EMR_SPARK",
        statements: "--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 创建OSS外部表\nCREATE EXTERNAL TABLE IF NOT EXISTS life_service_alimusic_songs (\n    song_id    STRING    COMMENT '歌曲ID',\n    artist_id    STRING    COMMENT '艺人ID',\n    publish_time    STRING    COMMENT '歌曲发行时间，精确到天',\n    song_init_plays    STRING    COMMENT '歌曲的初始播放数，表明该歌曲的初始热度',\n    language    STRING    COMMENT '数字表示1,2,3…',\n    gender    STRING    COMMENT '性别'\n)\nCOMMENT '阿里音乐数据集-歌曲艺人'\nSTORED AS Parquet\nLOCATION 'oss://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_life_service_alimusic/life_service_alimusic_songs/'\n;\n\nCREATE EXTERNAL TABLE IF NOT EXISTS life_service_alimusic_user (\n    user_id    STRING    COMMENT '用户ID（非真实ID），经抽样&字段脱敏处理后得到',\n    song_id    STRING    COMMENT '歌曲ID',\n    behavior_time    STRING    COMMENT '用户播放时间（unix时间戳表示）精确到小时',\n    behavior_type    STRING    COMMENT '行为类型：1，播放；2，下载，3，收藏',\n    ds    STRING    COMMENT '记录收集日'\n)\nCOMMENT '阿里音乐数据集-用户行为表'\nSTORED AS Parquet\nLOCATION 'oss://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_life_service_alimusic/life_service_alimusic_user/'\n;\n\n\n-- 查询数据\nSELECT a.publish_time AS publish_time,\n       COUNT (*) AS listen_times\nFROM\n(\n    SELECT song_id,\n        publish_time\n    FROM life_service_alimusic_songs\n    WHERE artist_id = 'e087f8842fe66efa5ccee42ff791e0ca'\n) a\nLEFT JOIN\n(\n    SELECT song_id,\n        behavior_type\n    FROM life_service_alimusic_user\n    WHERE behavior_type = '1'\n) b\nON a.song_id = b.song_id\nGROUP BY publish_time\nORDER BY publish_time ASC;",
        datasetId: 705
      },
      {
        tableName: "play_amount_of_singer_in_alibaba_music",
        statementType: "SCENARIO",
        engineType: "HOLOGRES",
        statements: "-- 创建Hologres外部表\nCREATE FOREIGN TABLE IF NOT EXISTS public.life_service_alimusic_songs (\n    song_id    TEXT,\n    artist_id    TEXT,\n    publish_time    TEXT,\n    song_init_plays    TEXT,\n    language    TEXT,\n    gender    TEXT\n)\nSERVER odps_server\nOPTIONS (\n    project_name 'bigdata_public_dataset#life_service',\n    table_name 'life_service_alimusic_songs'\n);\n\n-- 为外部表及其字段添加注释\nCOMMENT ON FOREIGN TABLE public.life_service_alimusic_songs IS '阿里音乐数据集-歌曲艺人';\n-- COMMENT ON COLUMN public.life_service_alimusic_songs.song_id IS '歌曲ID';\n-- COMMENT ON COLUMN public.life_service_alimusic_songs.artist_id IS '艺人ID';\n-- COMMENT ON COLUMN public.life_service_alimusic_songs.publish_time IS '歌曲发行时间，精确到天';\n-- COMMENT ON COLUMN public.life_service_alimusic_songs.song_init_plays IS '歌曲的初始播放数，表明该歌曲的初始热度';\n-- COMMENT ON COLUMN public.life_service_alimusic_songs.language IS '数字表示1,2,3…';\n-- COMMENT ON COLUMN public.life_service_alimusic_songs.gender IS '性别';\n\n\n-- 创建Hologres外部表\nCREATE FOREIGN TABLE IF NOT EXISTS public.life_service_alimusic_user (\n    user_id    TEXT,\n    song_id    TEXT,\n    behavior_time    TEXT,\n    behavior_type    TEXT,\n    ds    TEXT\n)\nSERVER odps_server\nOPTIONS (\n    project_name 'bigdata_public_dataset#life_service',\n    table_name 'life_service_alimusic_user'\n);\n\n-- 为外部表及其字段添加注释\nCOMMENT ON FOREIGN TABLE public.life_service_alimusic_user IS '阿里音乐数据集-用户行为表';\n-- COMMENT ON COLUMN public.life_service_alimusic_user.user_id IS '用户ID（非真实ID），经抽样&字段脱敏处理后得到';\n-- COMMENT ON COLUMN public.life_service_alimusic_user.song_id IS '歌曲ID';\n-- COMMENT ON COLUMN public.life_service_alimusic_user.behavior_time IS '用户播放时间（unix时间戳表示）精确到小时';\n-- COMMENT ON COLUMN public.life_service_alimusic_user.behavior_type IS '行为类型：1，播放；2，下载，3，收藏';\n-- COMMENT ON COLUMN public.life_service_alimusic_user.ds IS '记录收集日';\n\n\n-- 执行查询SQL\nSELECT a.publish_time AS publish_time,\n       COUNT (*) AS listen_times\nFROM\n(\n    SELECT song_id,\n        publish_time\n    FROM public.life_service_alimusic_songs\n    WHERE artist_id = 'e087f8842fe66efa5ccee42ff791e0ca'\n) a\nLEFT JOIN\n(\n    SELECT song_id,\n        behavior_type\n    FROM public.life_service_alimusic_user\n    WHERE behavior_type = '1'\n) b\nON a.song_id = b.song_id\nGROUP BY publish_time\nORDER BY publish_time ASC;",
        datasetId: 705
      },
      {
        tableName: "play_amount_of_singer_in_alibaba_music",
        statementType: "SCENARIO",
        engineType: "MAXCOMPUTE",
        statements: "-- 如果您未开启租户级别Schema语法，需要在运行query前通过session flag的方式设置。\nSET odps.namespace.schema = true;\n\n-- 执行查询SQL\nSELECT a.publish_time AS publish_time,\n       COUNT (*) AS listen_times\nFROM\n(\n    SELECT song_id,\n        publish_time\n    FROM bigdata_public_dataset.life_service.life_service_alimusic_songs\n    WHERE artist_id = 'e087f8842fe66efa5ccee42ff791e0ca'\n) a\nLEFT JOIN\n(\n    SELECT song_id,\n        behavior_type\n    FROM bigdata_public_dataset.life_service.life_service_alimusic_user\n    WHERE behavior_type = '1'\n) b\nON a.song_id = b.song_id\nGROUP BY publish_time\nORDER BY publish_time ASC;",
        datasetId: 705
      }
    ],
  },
  {
    nameKey: 'publicDataset1004Name',
    descriptionKey: 'publicDataset1004Des',
    engines: ['MAXCOMPUTE', 'HOLOGRES', 'EMR_SPARK'],
    link: 'https://dataworks.console.aliyun.com/publicDatasets/1004',
    license: "CC-BY-4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    ref: "IEA",
    refUrl: "https://www.iea.org",
    scenarios: [
      {
        lastUpdateTime: 1697423511222,
        content: "基于环保、高效等优势，新能源电动车在全球范围内的热度正在逐渐升高。本示例统计了2010至2022年间，2种电动车类型（BEV：代表纯电动汽车、PHEV：代表混动电动车）在中国的每年销量情况及销量逐年变化趋势。\n\n## SQL内容\n``` sql\n!sqlcontent\n```\n## 分析结果\n\n![vis-img](https://img.alicdn.com/imgextra/i1/O1CN01Qu3H1H1TOsjqnzVmy_!!6000000002373-0-tps-1326-980.jpg)\n",
        code: "ev_sales_in_china_between_2010_and_2022",
        name: "2010年至2022年中国电动车销量"
      }
    ],
    tableList: [
      {
        tableName: "iea_global_ev_statistics",
        tableComment: "包含了2010年至2022年间，全球各国家和地区的电动车和充电桩的统计情况，并且覆盖了每年的电动车销售数量、充电桩数量、电动车总电量需求等指标，可以对全球的电动车需求和使用情况进行统计分析；同时可以参考历史数据对未来电动车需求进行展望和预测。",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_iea_global_ev_statistics/iea_global_ev_statistics.txt",
        dataSize: 8450,
        columnList: [
          {
            columnName: "region",
            columnType: "STRING",
            columnComment: "国家或地区的名称，例如：Australia、China、Poland等",
            isPartitionKey: false
          },
          {
            columnName: "parameter",
            columnType: "STRING",
            columnComment: "统计指标，枚举值包括：Electricity demand （代表电动车电量需求）、EV charging points（代表充电桩数量）、EV sales（代表电动车销售数量）、EV sales share（代表电动车销售数量的占比）、EV stock（代表电动车保有数量）、EV stock share（代表电动车保有数量的占比）、Oil displacement Mbd（代表替代了多少桶的传统石油）、Oil displacement, million lge（代表替代了多少百万升的传统石油）",
            isPartitionKey: false
          },
          {
            columnName: "mode",
            columnType: "STRING",
            columnComment: "车辆类型，枚举值包括：Buses、Cars、Trucks、Vans、EV",
            isPartitionKey: false
          },
          {
            columnName: "powertrain",
            columnType: "STRING",
            columnComment: "动力系统类型，枚举值包括：BEV（代表纯电动汽车）、PHEV（代表混动电动车）、EV（代表电动汽车的统称）",
            isPartitionKey: false
          },
          {
            columnName: "unit",
            columnType: "STRING",
            columnComment: "单位，与统计指标parameter相关",
            isPartitionKey: false
          },
          {
            columnName: "value",
            columnType: "DECIMAL(32,16)",
            columnComment: "值，统计指标的具体数值",
            isPartitionKey: false
          },
          {
            columnName: "year",
            columnType: "STRING",
            columnComment: "年份，枚举值从2010至2022",
            isPartitionKey: true
          }
        ],
        isPartitioned: true
      }
    ],
    engineStatements: [
      {
        tableName: "ev_sales_in_china_between_2010_and_2022",
        statementType: "SCENARIO",
        engineType: "EMR_SPARK",
        statements: "--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 创建OSS外部表\nCREATE EXTERNAL TABLE IF NOT EXISTS iea_global_ev_statistics (\n    region    STRING    COMMENT '国家或地区的名称，例如：Australia、China、Poland等',\n    parameter    STRING    COMMENT '统计指标，枚举值包括：Electricity demand （代表电动车电量需求）、EV charging points（代表充电桩数量）、EV sales（代表电动 stock（代表电动车保有数量）、EV stock share（代表电动车保有数量的占比）、Oil displacement Mbd（代表替代了多少桶的传统石油）、Oil displacement, million lge（代表替代了多少百万升的传统石油）',\n    mode    STRING    COMMENT '车辆类型，枚举值包括：Buses、Cars、Trucks、Vans、EV',\n    powertrain    STRING    COMMENT '动力系统类型，枚举值包括：BEV（代表纯电动汽车）、PHEV（代表混动电动车）、EV（代表电动汽车的统称）',\n    unit    STRING    COMMENT '单位，与统计指标parameter相关',\n    value    DECIMAL(32,16)    COMMENT '值，统计指标的具体数值'\n)\nCOMMENT '包含了2010年至2022年间，全球各国家和地区的电动车和充电桩的统计情况，并且覆盖了每年的电动车销售数量、充电桩数量、电动车总电量需求等指标，可以对全球的电动车需求和使用情况进行统计分析；同时可以参考历史数据对未来电动车需求进行展望和预测。'\nPARTITIONED BY (\n    year    STRING    COMMENT '年份，枚举值从2010至2022'\n)\nSTORED AS Parquet\nLOCATION 'oss://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_iea_global_ev_statistics/iea_global_ev_statistics/'\n;\n\n-- 对分区表 iea_global_ev_statistics 恢复分区数据\nMSCK REPAIR TABLE iea_global_ev_statistics;\n\n\n--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 执行查询SQL\nSELECT  powertrain,                          -- 动力系统类型，枚举值包括：BEV（代表纯电动汽车）、PHEV（代表混动电动车）、EV（代表电动汽车的统称）\n        CAST(SUM(value) AS BIGINT) AS value, -- 值，统计指标的具体数值\n        year                                 -- 年份，枚举值从2010至2022\nFROM  iea_global_ev_statistics\nWHERE region = 'China'\nAND   powertrain in ('PHEV', 'BEV')\nAND   unit = 'Vehicles'\nAND   year >= '2010'\nAND   year <= '2022'\nGROUP BY year, powertrain\nORDER BY year;",
        datasetId: 1004
      },
      {
        tableName: "ev_sales_in_china_between_2010_and_2022",
        statementType: "SCENARIO",
        engineType: "HOLOGRES",
        statements: "-- 创建Hologres外部表\nCREATE FOREIGN TABLE IF NOT EXISTS public.iea_global_ev_statistics (\n    region    TEXT,\n    parameter    TEXT,\n    mode    TEXT,\n    powertrain    TEXT,\n    unit    TEXT,\n    value    DECIMAL(32,16),\n    year    TEXT\n)\nSERVER odps_server\nOPTIONS (\n    project_name 'bigdata_public_dataset#life_service',\n    table_name 'iea_global_ev_statistics'\n);\n\n-- 为外部表及其字段添加注释\nCOMMENT ON FOREIGN TABLE public.iea_global_ev_statistics IS '包含了2010年至2022年间，全球各国家和地区的电动车和充电桩的统计情况，并且覆盖了每年的电动车销售数量、充电桩数量、电动车总电量需求等指标，可以对全球的电动车需求和使用情况进行统计分析；同时可以参考历史数据对未来电动车需求进行展望和预测。';\n--COMMENT ON COLUMN public.iea_global_ev_statistics.region IS '国家或地区的名称，例如：Australia、China、Poland等';\n--COMMENT ON COLUMN public.iea_global_ev_statistics.parameter IS '统计指标，枚举值包括：Electricity demand （代表电动车电量需求）、EV charging points（代表充电桩数量）、EV sales（代表电动 stock（代表电动车保有数量）、EV stock share（代表电动车保有数量的占比）、Oil displacement Mbd（代表替代了多少桶的传统石油）、Oil displacement, million lge（代表替代了多少百万升的传统石油）';\n--COMMENT ON COLUMN public.iea_global_ev_statistics.mode IS '车辆类型，枚举值包括：Buses、Cars、Trucks、Vans、EV';\n--COMMENT ON COLUMN public.iea_global_ev_statistics.powertrain IS '动力系统类型，枚举值包括：BEV（代表纯电动汽车）、PHEV（代表混动电动车）、EV（代表电动汽车的统称）';\n--COMMENT ON COLUMN public.iea_global_ev_statistics.unit IS '单位，与统计指标parameter相关';\n--COMMENT ON COLUMN public.iea_global_ev_statistics.value IS '值，统计指标的具体数值';\n--COMMENT ON COLUMN public.iea_global_ev_statistics.year IS '年份，枚举值从2010至2022';\n\n\n-- 读取样例数据\nSELECT  powertrain,                          -- 动力系统类型，枚举值包括：BEV（代表纯电动汽车）、PHEV（代表混动电动车）、EV（代表电动汽车的统称）\n        CAST(SUM(value) AS BIGINT) AS value, -- 值，统计指标的具体数值\n        year                                 -- 年份，枚举值从2010至2022\n  FROM public.iea_global_ev_statistics\nWHERE region = 'China'\nAND   powertrain in ('PHEV', 'BEV')\nAND   unit = 'Vehicles'\nAND   year >= '2010'\nAND   year <= '2022'\nGROUP BY year, powertrain\nORDER BY year;\n",
        datasetId: 1004
      },
      {
        tableName: "ev_sales_in_china_between_2010_and_2022",
        statementType: "SCENARIO",
        engineType: "MAXCOMPUTE",
        statements: "-- 如果您未开启租户级别Schema语法，需要在运行query前通过session flag的方式设置。\nSET odps.namespace.schema = true;\nSET odps.sql.validate.orderby.limit = false;\n\n-- 执行查询SQL\nSELECT  powertrain,                          -- 动力系统类型，枚举值包括：BEV（代表纯电动汽车）、PHEV（代表混动电动车）、EV（代表电动汽车的统称）\n        CAST(SUM(value) AS BIGINT) AS value, -- 值，统计指标的具体数值\n        year                                 -- 年份，枚举值从2010至2022\nFROM  bigdata_public_dataset.life_service.iea_global_ev_statistics\nWHERE region = 'China'\nAND   powertrain in ('PHEV', 'BEV')\nAND   unit = 'Vehicles'\nAND   year >= '2010'\nAND   year <= '2022'\nGROUP BY year, powertrain\nORDER BY year;",
        datasetId: 1004
      }
    ],
  },

  {
    nameKey: 'publicDataset702Name',
    descriptionKey: 'publicDataset702Des',
    engines: ['MAXCOMPUTE', 'HOLOGRES', 'EMR_SPARK'],
    link: 'https://dataworks.console.aliyun.com/publicDatasets/702',
    license: "CC BY-NC-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    scenarios: [
      {
        lastUpdateTime: 1697423511222,
        content: "基于用户行为信息表，统计各商品类别的成交量和成交率，筛选成交情况较好的Top20商品类别。\n\n## SQL内容\n``` sql\n!sqlcontent\n```\n## 分析结果\n\n![vis-img](https://img.alicdn.com/imgextra/i1/O1CN01d4YUln1SnKFYLPRLx_!!6000000002291-2-tps-900-781.png)\n",
        code: "best_sellers_categories",
        name: "热门商品类别"
      }
    ],
    tableList: [
      {
        tableName: "commerce_taobao_shopping",
        tableComment: "包含了2017年11月25日至2017年12月3日之间，约100万脱敏用户随机行为（行为包括点击、购买、加购、喜欢），其中用户数量987,994，商品数量4,162,024，所有行为数量100,150,807",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_commerce/L2_commerce_taobao_shopping/commerce_taobao_shopping.txt",
        dataSize: 100150806,
        columnList: [
          {
            columnName: "user_id",
            columnType: "string",
            columnComment: "用户ID（非真实ID），经抽样&字段脱敏处理后得到",
            isPartitionKey: false
          },
          {
            columnName: "item_id",
            columnType: "string",
            columnComment: "商品ID（非真实ID），经抽样&字段脱敏处理后得到",
            isPartitionKey: false
          },
          {
            columnName: "item_category",
            columnType: "string",
            columnComment: "商品类别ID（非真实ID），经抽样&字段脱敏处理后得到",
            isPartitionKey: false
          },
          {
            columnName: "behavior_type",
            columnType: "string",
            columnComment: "用户对商品的行为类型,包括浏览、收藏、加购物车、购买，pv,fav,cart,buy)",
            isPartitionKey: false
          },
          {
            columnName: "behavior_time",
            columnType: "string",
            columnComment: "行为时间,精确到小时级别",
            isPartitionKey: false
          }
        ],
        isPartitioned: false
      }
    ],
    engineStatements: [
      {
        tableName: "best_sellers_categories",
        statementType: "SCENARIO",
        engineType: "EMR_SPARK",
        statements: "--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 创建OSS外部表\nCREATE EXTERNAL TABLE IF NOT EXISTS commerce_taobao_shopping (\n    user_id    STRING    COMMENT '用户ID（非真实ID），经抽样&字段脱敏处理后得到',\n    item_id    STRING    COMMENT '商品ID（非真实ID），经抽样&字段脱敏处理后得到',\n    item_category    STRING    COMMENT '商品类别ID（非真实ID），经抽样&字段脱敏处理后得到',\n    behavior_type    STRING    COMMENT '用户对商品的行为类型,包括浏览、收藏、加购物车、购买，pv,fav,cart,buy)',\n    behavior_time    STRING    COMMENT '行为时间,精确到小时级别'\n)\nCOMMENT '包含了2017年11月25日至2017年12月3日之间，约100万脱敏用户随机行为（行为包括点击、购买、加购、喜欢），其中用户数量987,994，商品数量4,162,024，所有行为数量100,150,807'\nSTORED AS Parquet\nLOCATION 'oss://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_commerce/L2_commerce_taobao_shopping/commerce_taobao_shopping/'\n;\n\n-- 执行查询SQL\nSELECT a.item_category AS item_category,\n       b.total_buy,\n       ROUND((b.total_buy / a.total_pv) * 100,2) AS buy_percent_rate\nFROM\n(\n    SELECT item_category,\n           COUNT(*) as total_pv\n    FROM commerce_taobao_shopping\n    WHERE behavior_type = 'pv'\n    GROUP BY item_category\n) a\nINNER JOIN\n(\n    SELECT item_category,\n           COUNT(*) as total_buy\n    FROM commerce_taobao_shopping\n    WHERE behavior_type = 'buy'\n    GROUP BY item_category\n) b\nON a.item_category = b.item_category\nORDER BY b.total_buy DESC\nLIMIT 20;",
        datasetId: 702
      },
      {
        tableName: "best_sellers_categories",
        statementType: "SCENARIO",
        engineType: "HOLOGRES",
        statements: "-- 创建Hologres外部表\nCREATE FOREIGN TABLE IF NOT EXISTS public.commerce_taobao_shopping (\n    user_id    TEXT,\n    item_id    TEXT,\n    item_category    TEXT,\n    behavior_type    TEXT,\n    behavior_time    TEXT\n)\nSERVER odps_server\nOPTIONS (\n    project_name 'bigdata_public_dataset#commerce',\n    table_name 'commerce_taobao_shopping'\n);\n\n-- 为外部表及其字段添加注释\nCOMMENT ON FOREIGN TABLE public.commerce_taobao_shopping IS '包含了2017年11月25日至2017年12月3日之间，约100万脱敏用户随机行为（行为包括点击、购买、加购、喜欢），其中用户数量987,994，商品数量4,162,024，所有行为数量100,150,807';\n-- COMMENT ON COLUMN public.commerce_taobao_shopping.user_id IS '用户ID（非真实ID），经抽样&字段脱敏处理后得到';\n-- COMMENT ON COLUMN public.commerce_taobao_shopping.item_id IS '商品ID（非真实ID），经抽样&字段脱敏处理后得到';\n-- COMMENT ON COLUMN public.commerce_taobao_shopping.item_category IS '商品类别ID（非真实ID），经抽样&字段脱敏处理后得到';\n-- COMMENT ON COLUMN public.commerce_taobao_shopping.behavior_type IS '用户对商品的行为类型,包括浏览、收藏、加购物车、购买，pv,fav,cart,buy)';\n-- COMMENT ON COLUMN public.commerce_taobao_shopping.behavior_time IS '行为时间,精确到小时级别';\n\n\n--  执行查询SQL\nSELECT a.item_category AS item_category,\n       b.total_buy,\n       ROUND((b.total_buy / a.total_pv) * 100,2) AS buy_percent_rate\nFROM\n(\n    SELECT item_category,\n           COUNT(*) as total_pv\n    FROM  public.commerce_taobao_shopping\n    WHERE behavior_type = 'pv'\n    GROUP BY item_category\n) a\nINNER JOIN\n(\n    SELECT item_category,\n           COUNT(*) as total_buy\n    FROM public.commerce_taobao_shopping\n    WHERE behavior_type = 'buy'\n    GROUP BY item_category\n) b\nON a.item_category = b.item_category\nORDER BY b.total_buy DESC\nLIMIT 20;",
        datasetId: 702
      },
      {
        tableName: "best_sellers_categories",
        statementType: "SCENARIO",
        engineType: "MAXCOMPUTE",
        statements: "-- 如果您未开启租户级别Schema语法，需要在运行query前通过session flag的方式设置。\nSET odps.namespace.schema = true;\n\n-- 执行查询SQL\nSELECT a.item_category AS item_category,\n       b.total_buy,\n       ROUND((b.total_buy / a.total_pv) * 100,2) AS buy_percent_rate\nFROM\n(\n    SELECT item_category,\n           COUNT(*) as total_pv\n    FROM  bigdata_public_dataset.commerce.commerce_taobao_shopping\n    WHERE behavior_type = 'pv'\n    GROUP BY item_category\n) a\nINNER JOIN\n(\n    SELECT item_category,\n           COUNT(*) as total_buy\n    FROM bigdata_public_dataset.commerce.commerce_taobao_shopping\n    WHERE behavior_type = 'buy'\n    GROUP BY item_category\n) b\nON a.item_category = b.item_category\nORDER BY b.total_buy DESC\nLIMIT 20;",
        datasetId: 702
      }
    ],
  },

  {
    nameKey: 'publicDataset704Name',
    descriptionKey: 'publicDataset704Des',
    engines: ['MAXCOMPUTE', 'HOLOGRES', 'EMR_SPARK'],
    link: 'https://dataworks.console.aliyun.com/publicDatasets/704',
    license: "CC BY-NC 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-nc/4.0/",
    scenarios: [
      {
        lastUpdateTime: 1697423511222,
        content: "将飞猪存量用户的年龄划分为0-10、10-20、40-50等8个年龄段，统计各年龄段的用户数量。\n\n## SQL内容\n``` sql\n!sqlcontent\n```\n## 分析结果\n\n![vis-img](https://img.alicdn.com/imgextra/i3/O1CN01TfyTBB1IDT5Jz4obM_!!6000000000859-2-tps-800-694.png)\n",
        code: "user_age_distribution",
        name: "用户年龄段分布"
      }
    ],
    tableList: [
      {
        tableName: "life_service_pigfly_item_behavior",
        tableComment: "飞猪用户行为明细表",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_life_service_pigfly/life_service_pigfly_item_behavior.txt",
        dataSize: 224542017,
        columnList: [
          {
            columnName: "user_id",
            columnType: "string",
            columnComment: "用户ID（非真实ID），经抽样&字段脱敏处理后得到",
            isPartitionKey: false
          },
          {
            columnName: "item_id",
            columnType: "string",
            columnComment: "商品ID（非真实ID），经抽样&字段脱敏处理后得到",
            isPartitionKey: false
          },
          {
            columnName: "behavior_type",
            columnType: "string",
            columnComment: "用户对商品的行为类型,包括浏览、收藏、加购物车、购买，clk,fav,cart,buy",
            isPartitionKey: false
          },
          {
            columnName: "behavior_time",
            columnType: "string",
            columnComment: "行为时间",
            isPartitionKey: false
          }
        ],
        isPartitioned: false
      },
      {
        tableName: "life_service_pigfly_item_profile",
        tableComment: "飞猪商品信息维度表（包含类目、标签等商品属性）",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_life_service_pigfly/life_service_pigfly_item_profile.txt",
        dataSize: 273187,
        columnList: [
          {
            columnName: "item_id",
            columnType: "string",
            columnComment: "商品ID（非真实ID），经抽样&字段脱敏处理后得到",
            isPartitionKey: false
          },
          {
            columnName: "cate_id",
            columnType: "string",
            columnComment: "商品类目ID，经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          },
          {
            columnName: "item_city",
            columnType: "string",
            columnComment: "商品城市，经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          },
          {
            columnName: "item_tag_list",
            columnType: "string",
            columnComment: "商品标签列表，经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          }
        ],
        isPartitioned: false
      },
      {
        tableName: "life_service_pigfly_user_profile",
        tableComment: "飞猪用户信息维度表（包含年龄、性别、职业等用户属性）",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_life_service_pigfly/life_service_pigfly_user_profile.txt",
        dataSize: 5655137,
        columnList: [
          {
            columnName: "user_id",
            columnType: "string",
            columnComment: "用户ID（非真实ID），经抽样&字段脱敏处理后得到",
            isPartitionKey: false
          },
          {
            columnName: "age",
            columnType: "string",
            columnComment: "年龄，经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          },
          {
            columnName: "gender",
            columnType: "string",
            columnComment: "性别",
            isPartitionKey: false
          },
          {
            columnName: "occupation",
            columnType: "string",
            columnComment: "职业，经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          },
          {
            columnName: "habitual_city",
            columnType: "string",
            columnComment: "城市，经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          },
          {
            columnName: "user_tag_list",
            columnType: "string",
            columnComment: "用户标签列表 ，经字段脱敏处理后得到的序列化数据",
            isPartitionKey: false
          }
        ],
        isPartitioned: false
      }
    ],
    engineStatements: [
      {
        tableName: "user_age_distribution",
        statementType: "SCENARIO",
        engineType: "EMR_SPARK",
        statements: "--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 创建OSS外部表\nCREATE EXTERNAL TABLE IF NOT EXISTS life_service_pigfly_user_profile (\n    user_id    STRING    COMMENT '用户ID（非真实ID），经抽样&字段脱敏处理后得到',\n    age    STRING    COMMENT '年龄，经字段脱敏处理后得到的序列化数据',\n    gender    STRING    COMMENT '性别',\n    occupation    STRING    COMMENT '职业，经字段脱敏处理后得到的序列化数据',\n    habitual_city    STRING    COMMENT '城市，经字段脱敏处理后得到的序列化数据',\n    user_tag_list    STRING    COMMENT '用户标签列表 ，经字段脱敏处理后得到的序列化数据'\n)\nCOMMENT '飞猪推荐数据集-用户信息'\nSTORED AS Parquet\nLOCATION 'oss://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_life_service_pigfly/life_service_pigfly_user_profile/'\n;\n\n\n-- 执行查询SQL\nSELECT CASE WHEN age < 10 THEN '0-10'\n            WHEN age >= 10 AND age < 20 THEN '10-20'\n            WHEN age >= 20 AND age < 30 THEN '20-30'\n            WHEN age >= 30 AND age < 40 THEN '30-40'\n            WHEN age >= 40 AND age < 50 THEN '40-50'\n            WHEN age >= 50 AND age < 60 THEN '50-60'\n            WHEN age >= 60 AND age < 70 THEN '60-70'\n            WHEN age >= 70 AND age < 80 THEN '70-80'\n            END AS period,\n       COUNT(*) AS user_count\nFROM life_service_pigfly_user_profile\nWHERE age > 0\nAND   age < 80\nGROUP BY period\nORDER BY period;",
        datasetId: 704
      },
      {
        tableName: "user_age_distribution",
        statementType: "SCENARIO",
        engineType: "HOLOGRES",
        statements: "-- 创建Hologres外部表\nCREATE FOREIGN TABLE IF NOT EXISTS public.life_service_pigfly_user_profile (\n    user_id    TEXT,\n    age    TEXT,\n    gender    TEXT,\n    occupation    TEXT,\n    habitual_city    TEXT,\n    user_tag_list    TEXT\n)\nSERVER odps_server\nOPTIONS (\n    project_name 'bigdata_public_dataset#life_service',\n    table_name 'life_service_pigfly_user_profile'\n);\n\n-- 为外部表及其字段添加注释\nCOMMENT ON FOREIGN TABLE public.life_service_pigfly_user_profile IS '飞猪推荐数据集-用户信息';\n-- COMMENT ON COLUMN public.life_service_pigfly_user_profile.user_id IS '用户ID（非真实ID），经抽样&字段脱敏处理后得到';\n-- COMMENT ON COLUMN public.life_service_pigfly_user_profile.age IS '年龄，经字段脱敏处理后得到的序列化数据';\n-- COMMENT ON COLUMN public.life_service_pigfly_user_profile.gender IS '性别';\n-- COMMENT ON COLUMN public.life_service_pigfly_user_profile.occupation IS '职业，经字段脱敏处理后得到的序列化数据';\n-- COMMENT ON COLUMN public.life_service_pigfly_user_profile.habitual_city IS '城市，经字段脱敏处理后得到的序列化数据';\n-- COMMENT ON COLUMN public.life_service_pigfly_user_profile.user_tag_list IS '用户标签列表 ，经字段脱敏处理后得到的序列化数据';\n\n-- 执行查询SQL\nSELECT CASE WHEN age < 10 THEN '0-10'\n            WHEN age >= 10 AND age < 20 THEN '10-20'\n            WHEN age >= 20 AND age < 30 THEN '20-30'\n            WHEN age >= 30 AND age < 40 THEN '30-40'\n            WHEN age >= 40 AND age < 50 THEN '40-50'\n            WHEN age >= 50 AND age < 60 THEN '50-60'\n            WHEN age >= 60 AND age < 70 THEN '60-70'\n            WHEN age >= 70 AND age < 80 THEN '70-80'\n            END AS period,\n       COUNT(*) AS user_count\nFROM (\n    SELECT user_id, CAST(age AS BIGINT) AS age FROM public.life_service_pigfly_user_profile\n) t\nWHERE age > 0\nAND   age < 80\nGROUP BY period\nORDER BY period;",
        datasetId: 704
      },
      {
        tableName: "user_age_distribution",
        statementType: "SCENARIO",
        engineType: "MAXCOMPUTE",
        statements: "-- 如果您未开启租户级别Schema语法，需要在运行query前通过session flag的方式设置。\nSET odps.namespace.schema = true;\n\n-- 执行查询SQL\nSELECT CASE WHEN age < 10 THEN '0-10'\n            WHEN age >= 10 AND age < 20 THEN '10-20'\n            WHEN age >= 20 AND age < 30 THEN '20-30'\n            WHEN age >= 30 AND age < 40 THEN '30-40'\n            WHEN age >= 40 AND age < 50 THEN '40-50'\n            WHEN age >= 50 AND age < 60 THEN '50-60'\n            WHEN age >= 60 AND age < 70 THEN '60-70'\n            WHEN age >= 70 AND age < 80 THEN '70-80'\n            END AS period,\n       COUNT(*) AS user_count\nFROM bigdata_public_dataset.life_service.life_service_pigfly_user_profile\nWHERE age > 0\nAND   age < 80\nGROUP BY period\nORDER BY period;",
        datasetId: 704
      }
    ],
  },

  {
    nameKey: 'publicDataset1003Name',
    descriptionKey: 'publicDataset1003Des',
    engines: ['MAXCOMPUTE', 'HOLOGRES', 'EMR_SPARK'],
    link: 'https://dataworks.console.aliyun.com/publicDatasets/1003',
    license: "国家统计局用户使用协议",
    licenseDescription: "数据版权归中华人民共和国国家统计局所有",
    licenseUrl: "https://data.stats.gov.cn/login.htm?m=toDisclimer",
    ref: "中华人民共和国国家统计局",
    refUrl: "https://data.stats.gov.cn/index.htm",
    scenarios: [
      {
        lastUpdateTime: 1697423511222,
        content: "统计中国大陆各地区的2022年人均生产总值情况\n\n## SQL内容\n``` sql\n!sqlcontent\n```\n## 分析结果\n\n![vis-img](https://img.alicdn.com/imgextra/i3/O1CN01yEAOfN1bWE0mjKpGN_!!6000000003472-0-tps-1274-850.jpg)\n",
        code: "gdp_per_capita_by_region_in_2022",
        name: "2022年各地区人均生产总值"
      }
    ],
    tableList: [
      {
        tableName: "mainland_gross_regional_product",
        tableComment: "包含了2003年至2022年间，中国大陆（不包含港、澳、台）各省份的年度生产总值数据，可以通过省份名称、年份来查询和探索各地区的人均地区生产总值、第一产业增加值、工业增加值、批发和零售业增加值等指标变化情况。",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_mainland_gross_regional_product/mainland_gross_regional_product.txt",
        dataSize: 620,
        columnList: [
          {
            columnName: "gross_regional_product",
            columnType: "decimal(26,4)",
            columnComment: "地区生产总值（亿元）",
            isPartitionKey: false
          },
          {
            columnName: "value_added_of_the_primary_industry",
            columnType: "decimal(26,4)",
            columnComment: "第一产业增加值（亿元）。第一产业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事第一产业生产活动的最终成果。第一产业是指农、林、牧、渔业。",
            isPartitionKey: false
          },
          {
            columnName: "value_added_of_the_secondary_industry",
            columnType: "decimal(26,4)",
            columnComment: "第二产业增加值（亿元）。第二产业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事第二产业生产活动的最终成果。第二产业是指采矿业，制造业，电力、煤气及水的生产和供应业，建筑业。",
            isPartitionKey: false
          },
          {
            columnName: "value_added_of_the_tertiary_industry",
            columnType: "decimal(26,4)",
            columnComment: "第三产业增加值（亿元）。第三产业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事第三产业生产活动的最终成果。第三产业是指除第一、二产业以外的其他行业。",
            isPartitionKey: false
          },
          {
            columnName: "value_added_of_agriculture_forestry_animal_husbandry_and_fishery",
            columnType: "decimal(26,4)",
            columnComment: "农林牧渔业增加值（亿元）",
            isPartitionKey: false
          },
          {
            columnName: "value_added_of_industry",
            columnType: "decimal(26,4)",
            columnComment: "工业增加值（亿元）。工业增加值是指工业企业在报告期内以货币形式表现的从事工业生产活动的最终成果。",
            isPartitionKey: false
          },
          {
            columnName: "value_added_of_construction",
            columnType: "decimal(26,4)",
            columnComment: "建筑业增加值（亿元）。建筑业增加值是指建筑业企业在报告期内以货币形式表现的从事建筑业生产活动的最终成果。",
            isPartitionKey: false
          },
          {
            columnName: "value_added_of_wholesale_and_retail_trades",
            columnType: "decimal(26,4)",
            columnComment: "批发和零售业增加值（亿元）。批发和零售业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事批发和零售业生产活动的最终成果。",
            isPartitionKey: false
          },
          {
            columnName: "value_added_of_transport_storage_and_post",
            columnType: "decimal(26,4)",
            columnComment: "交通运输、仓储和邮政业增加值（亿元）。交通运输、仓储和邮政业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事交通运输、仓储和邮政业生产活动的最终成果。",
            isPartitionKey: false
          },
          {
            columnName: "value_added_of_hotels_and_catering_services",
            columnType: "decimal(26,4)",
            columnComment: "住宿和餐饮业增加值（亿元）。住宿和餐饮业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事住宿和餐饮业生产活动的最终成果。",
            isPartitionKey: false
          },
          {
            columnName: "value_added_of_financial_intermediation",
            columnType: "decimal(26,4)",
            columnComment: "金融业增加值（亿元）。金融业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事金融业生产活动的最终成果。",
            isPartitionKey: false
          },
          {
            columnName: "value_added_of_real_estate",
            columnType: "decimal(26,4)",
            columnComment: "房地产业增加值（亿元）。房地产业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事房地产业生产活动的最终成果。",
            isPartitionKey: false
          },
          {
            columnName: "value_added_of_others",
            columnType: "decimal(26,4)",
            columnComment: "其他行业增加值（亿元）。其他行业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事其他行业生产活动的最终成果。",
            isPartitionKey: false
          },
          {
            columnName: "per_capital_gross_regional_product",
            columnType: "decimal(26,4)",
            columnComment: "人均地区生产总值(元/人)。人均国内生产总值是指国内生产总值的绝对值与该年平均人口的比值，是衡量一个国家或地区每个居民对该国家或地区的经济贡献或创造价值的指标。",
            isPartitionKey: false
          },
          {
            columnName: "region",
            columnType: "string",
            columnComment: "地区，枚举值包括中国大陆的31个省市地区，例如：北京市、浙江省、内蒙古自治区。",
            isPartitionKey: false
          },
          {
            columnName: "year",
            columnType: "string",
            columnComment: "年份，枚举值从2003至2022",
            isPartitionKey: true
          }
        ],
        isPartitioned: true
      }
    ],
    engineStatements: [
      {
        tableName: "gdp_per_capita_by_region_in_2022",
        statementType: "SCENARIO",
        engineType: "EMR_SPARK",
        statements: "--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 创建OSS外部表\nCREATE EXTERNAL TABLE IF NOT EXISTS mainland_gross_regional_product (\n    gross_regional_product    DECIMAL(26,4)    COMMENT '地区生产总值（亿元）',\n    value_added_of_the_primary_industry    DECIMAL(26,4)    COMMENT '第一产业增加值（亿元）。第一产业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事第一产业生产活动的最终成果。第一产业是指农、林、牧、渔业。',\n    value_added_of_the_secondary_industry    DECIMAL(26,4)    COMMENT '第二产业增加值（亿元）。第二产业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事第二产业生产活动的最终成果。第二产业是指采矿业，制造业，电力、煤气及水的生产和供应业，建筑业。',\n    value_added_of_the_tertiary_industry    DECIMAL(26,4)    COMMENT '第三产业增加值（亿元）。第三产业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事第三产业生产活动的最终成果。第三产业是指除第一、二产业以外的其他行业。',\n    value_added_of_agriculture_forestry_animal_husbandry_and_fishery    DECIMAL(26,4)    COMMENT '农林牧渔业增加值（亿元）',\n    value_added_of_industry    DECIMAL(26,4)    COMMENT '工业增加值（亿元）。工业增加值是指工业企业在报告期内以货币形式表现的从事工业生产活动的最终成果。',\n    value_added_of_construction    DECIMAL(26,4)    COMMENT '建筑业增加值（亿元）。建筑业增加值是指建筑业企业在报告期内以货币形式表现的从事建筑业生产活动的最终成果。',\n    value_added_of_wholesale_and_retail_trades    DECIMAL(26,4)    COMMENT '批发和零售业增加值（亿元）。批发和零售业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事批发和零售业生产活动的最终成果。',\n    value_added_of_transport_storage_and_post    DECIMAL(26,4)    COMMENT '交通运输、仓储和邮政业增加值（亿元）。交通运输、仓储和邮政业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事交通运输、仓储和邮政业生产活动的最终成果。',\n    value_added_of_hotels_and_catering_services    DECIMAL(26,4)    COMMENT '住宿和餐饮业增加值（亿元）。住宿和餐饮业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事住宿和餐饮业生产活动的最终成果。',\n    value_added_of_financial_intermediation    DECIMAL(26,4)    COMMENT '金融业增加值（亿元）。金融业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事金融业生产活动的最终成果。',\n    value_added_of_real_estate    DECIMAL(26,4)    COMMENT '房地产业增加值（亿元）。房地产业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事房地产业生产活动的最终成果。',\n    value_added_of_others    DECIMAL(26,4)    COMMENT '其他行业增加值（亿元）。其他行业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事其他行业生产活动的最终成果。',\n    per_capital_gross_regional_product    DECIMAL(26,4)    COMMENT '人均地区生产总值(元/人)。人均国内生产总值是指国内生产总值的绝对值与该年平均人口的比值，是衡量一个国家或地区每个居民对该国家或地区的经济贡献或创造价值的指标。',\n    region    STRING    COMMENT '地区，枚举值包括中国大陆的31个省市地区，例如：北京市、浙江省、内蒙古自治区。'\n)\nCOMMENT '包含了2003年至2022年间，中国大陆（不包含港、澳、台）各省份的年度生产总值数据，可以通过省份名称、年份来查询和探索各地区的人均地区生产总值、第一产业增加值、工业增加值、批发和零售业增加值等指标变化情况。'\nPARTITIONED BY (\n    year    string    COMMENT '年份，枚举值从2003至2022'\n)\nSTORED AS Parquet\nLOCATION 'oss://dataworks-dataset-cn-shanghai.oss-cn-shanghai-internal.aliyuncs.com/public-datasets/L1_life_service/L2_mainland_gross_regional_product/mainland_gross_regional_product/'\n;\n\n-- 对分区表 mainland_gross_regional_product 恢复分区数据\nMSCK REPAIR TABLE mainland_gross_regional_product ADD PARTITIONS;\n\n-- 查询数据\nSELECT per_capital_gross_regional_product, region\n  FROM mainland_gross_regional_product\n WHERE year = '2022'\n;",
        datasetId: 1003
      },
      {
        tableName: "gdp_per_capita_by_region_in_2022",
        statementType: "SCENARIO",
        engineType: "HOLOGRES",
        statements: "-- 创建Hologres外部表\nCREATE FOREIGN TABLE IF NOT EXISTS public.mainland_gross_regional_product (\n    gross_regional_product    DECIMAL(26,4),\n    value_added_of_the_primary_industry    DECIMAL(26,4),\n    value_added_of_the_secondary_industry    DECIMAL(26,4),\n    value_added_of_the_tertiary_industry    DECIMAL(26,4),\n    value_added_of_agriculture_forestry_animal_husbandry_and_fishery    DECIMAL(26,4),\n    value_added_of_industry    DECIMAL(26,4),\n    value_added_of_construction    DECIMAL(26,4),\n    value_added_of_wholesale_and_retail_trades    DECIMAL(26,4),\n    value_added_of_transport_storage_and_post    DECIMAL(26,4),\n    value_added_of_hotels_and_catering_services    DECIMAL(26,4),\n    value_added_of_financial_intermediation    DECIMAL(26,4),\n    value_added_of_real_estate    DECIMAL(26,4),\n    value_added_of_others    DECIMAL(26,4),\n    per_capital_gross_regional_product    DECIMAL(26,4),\n    region    TEXT,\n    year    TEXT\n)\nSERVER odps_server\nOPTIONS (\n    project_name 'bigdata_public_dataset#life_service',\n    table_name 'mainland_gross_regional_product'\n);\n\n-- 为外部表及其字段添加注释\nCOMMENT ON FOREIGN TABLE public.mainland_gross_regional_product IS '包含了2003年至2022年间，中国大陆（不包含港、澳、台）各省份的年度生产总值数据，可以通过省份名称、年份来查询和探索各地区的人均地区生产总值、第一产业增加值、工业增加值、批发和零售业增加值等指标变化情况。';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.gross_regional_product IS '地区生产总值（亿元）';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.value_added_of_the_primary_industry IS '第一产业增加值（亿元）。第一产业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事第一产业生产活动的最终成果。第一产业是指农、林、牧、渔业。';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.value_added_of_the_secondary_industry IS '第二产业增加值（亿元）。第二产业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事第二产业生产活动的最终成果。第二产业是指采矿业，制造业，电力、煤气及水的生产和供应业，建筑业。';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.value_added_of_the_tertiary_industry IS '第三产业增加值（亿元）。第三产业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事第三产业生产活动的最终成果。第三产业是指除第一、二产业以外的其他行业。';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.value_added_of_agriculture_forestry_animal_husbandry_and_fishery IS '农林牧渔业增加值（亿元）';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.value_added_of_industry IS '工业增加值（亿元）。工业增加值是指工业企业在报告期内以货币形式表现的从事工业生产活动的最终成果。';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.value_added_of_construction IS '建筑业增加值（亿元）。建筑业增加值是指建筑业企业在报告期内以货币形式表现的从事建筑业生产活动的最终成果。';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.value_added_of_wholesale_and_retail_trades IS '批发和零售业增加值（亿元）。批发和零售业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事批发和零售业生产活动的最终成果。';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.value_added_of_transport_storage_and_post IS '交通运输、仓储和邮政业增加值（亿元）。交通运输、仓储和邮政业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事交通运输、仓储和邮政业生产活动的最终成果。';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.value_added_of_hotels_and_catering_services IS '住宿和餐饮业增加值（亿元）。住宿和餐饮业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事住宿和餐饮业生产活动的最终成果。';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.value_added_of_financial_intermediation IS '金融业增加值（亿元）。金融业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事金融业生产活动的最终成果。';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.value_added_of_real_estate IS '房地产业增加值（亿元）。房地产业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事房地产业生产活动的最终成果。';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.value_added_of_others IS '其他行业增加值（亿元）。其他行业增加值是指按市场价格计算的一个国家（或地区）所有常住单位在一定时期内从事其他行业生产活动的最终成果。';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.per_capital_gross_regional_product IS '人均地区生产总值(元/人)。人均国内生产总值是指国内生产总值的绝对值与该年平均人口的比值，是衡量一个国家或地区每个居民对该国家或地区的经济贡献或创造价值的指标。';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.region IS '地区，枚举值包括中国大陆的31个省市地区，例如：北京市、浙江省、内蒙古自治区。';\n-- COMMENT ON COLUMN public.mainland_gross_regional_product.year IS '年份，枚举值从2003至2022';\n\n\n-- 执行查询SQL\nSELECT per_capital_gross_regional_product AS 人均生产总值, region\n  FROM public.mainland_gross_regional_product\n WHERE year = '2022'\n;",
        datasetId: 1003
      },
      {
        tableName: "gdp_per_capita_by_region_in_2022",
        statementType: "SCENARIO",
        engineType: "MAXCOMPUTE",
        statements: "-- 如果您未开启租户级别Schema语法，需要在运行query前通过session flag的方式设置。\nSET odps.namespace.schema=true;\nSET odps.sql.decimal.odps2=true;\n\n-- 步骤2: 执行查询SQL\nSELECT per_capital_gross_regional_product AS 人均生产总值, region\n  FROM bigdata_public_dataset.life_service.mainland_gross_regional_product\n WHERE year = '2022'\n;",
        datasetId: 1003
      }
    ],
  },

  {
    nameKey: 'publicDataset1005Name',
    descriptionKey: 'publicDataset1005Des',
    engines: ['MAXCOMPUTE', 'HOLOGRES', 'EMR_SPARK'],
    link: 'https://dataworks.console.aliyun.com/publicDatasets/1005',
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    ref: "kaggle - Asian Games Medal Tally",
    refUrl: "https://www.kaggle.com/datasets/srikarkashyap/asiangamestop10?resource=download",
    scenarios: [
      {
        lastUpdateTime: 1697505839434,
        content: "2022年亚运会已在中国杭州召开。作为一名体育赛事爱好者，想查看上一届亚运会中各国家和地区获得的奖牌数量。\n\n## SQL内容\n``` sql\n!sqlcontent\n```\n## 分析结果\n\n![vis-img](https://img.alicdn.com/imgextra/i1/O1CN01ORUSaZ1KgtmgrAMhm_!!6000000001194-0-tps-1294-920.jpg)\n",
        code: "asian_games_metal_statistics_2018",
        name: "2018年亚运会各国家和地区获得奖牌数量情况"
      }
    ],
    tableList: [
      {
        tableName: "asian_games_medal_statistics",
        tableComment: "本数据集包含了从1951年至2022年历届亚运会中各国家和地区获得奖牌的情况。",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_asian_games_medal_statistics/asian_games_medal_statistics.txt",
        dataSize: 485,
        columnList: [
          {
            columnName: "year",
            columnType: "string",
            columnComment: "年份，枚举值从1951至2022（注：每四年一届）",
            isPartitionKey: false
          },
          {
            columnName: "region",
            columnType: "string",
            columnComment: "国家或地区的名称（包括缩写），例如：China (CHN)、Indonesia (INA)等",
            isPartitionKey: false
          },
          {
            columnName: "gold",
            columnType: "bigint",
            columnComment: "金牌数量",
            isPartitionKey: false
          },
          {
            columnName: "silver",
            columnType: "bigint",
            columnComment: "银牌数量",
            isPartitionKey: false
          },
          {
            columnName: "bronze",
            columnType: "bigint",
            columnComment: "铜牌数量",
            isPartitionKey: false
          },
          {
            columnName: "total",
            columnType: "bigint",
            columnComment: "全部奖牌数量",
            isPartitionKey: false
          }
        ],
        isPartitioned: false
      }
    ],
    engineStatements: [
      {
        tableName: "asian_games_metal_statistics_2018",
        statementType: "SCENARIO",
        engineType: "EMR_SPARK",
        statements: "--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 创建OSS外部表\nCREATE EXTERNAL TABLE IF NOT EXISTS asian_games_medal_statistics (\n    year    STRING    COMMENT '年份，枚举值从1951至2018（注：每四年一届）',\n    region    STRING    COMMENT '国家或地区的名称（包括缩写），例如：China (CHN)、Indonesia (INA)等',\n    gold    BIGINT    COMMENT '金牌数量',\n    silver    BIGINT    COMMENT '银牌数量',\n    bronze    BIGINT    COMMENT '铜牌数量',\n    total    BIGINT    COMMENT '全部奖牌数量'\n)\nCOMMENT '本数据集包含了从1951年至2018年历届亚运会中各国家和地区获得奖牌的情况。'\nSTORED AS Parquet\nLOCATION 'oss://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_life_service/L2_asian_games_medal_statistics/asian_games_medal_statistics/'\n;\n\n\n--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 执行查询SQL\nSELECT year,    -- 年份，枚举值从1951至2018（注：每四年一届）\n       region,  -- 国家或地区的名称（包括缩写），例如：China (CHN)、Indonesia (INA)等\n       total    -- 全部奖牌数量\nFROM asian_games_medal_statistics\nWHERE year = '2018'\n;",
        datasetId: 1005
      },
      {
        tableName: "asian_games_metal_statistics_2018",
        statementType: "SCENARIO",
        engineType: "HOLOGRES",
        statements: "-- 创建Hologres外部表\nCREATE FOREIGN TABLE IF NOT EXISTS public.asian_games_medal_statistics (\n    year    TEXT,\n    region    TEXT,\n    gold    INT8,\n    silver    INT8,\n    bronze    INT8,\n    total    INT8\n)\nSERVER odps_server\nOPTIONS (\n    project_name 'bigdata_public_dataset#life_service',\n    table_name 'asian_games_medal_statistics'\n);\n\n-- 为外部表及其字段添加注释\nCOMMENT ON FOREIGN TABLE public.asian_games_medal_statistics IS '本数据集包含了从1951年至2018年历届亚运会中各国家和地区获得奖牌的情况。';\n-- COMMENT ON COLUMN public.asian_games_medal_statistics.year IS '年份，枚举值从1951至2018（注：每四年一届）';\n-- COMMENT ON COLUMN public.asian_games_medal_statistics.region IS '国家或地区的名称（包括缩写），例如：China (CHN)、Indonesia (INA)等';\n-- COMMENT ON COLUMN public.asian_games_medal_statistics.gold IS '金牌数量';\n-- COMMENT ON COLUMN public.asian_games_medal_statistics.silver IS '银牌数量';\n-- COMMENT ON COLUMN public.asian_games_medal_statistics.bronze IS '铜牌数量';\n-- COMMENT ON COLUMN public.asian_games_medal_statistics.total IS '全部奖牌数量';\n\n\n-- 执行查询SQL\nSELECT year,    -- 年份，枚举值从1951至2018（注：每四年一届）\n       region,  -- 国家或地区的名称（包括缩写），例如：China (CHN)、Indonesia (INA)等\n       total    -- 全部奖牌数量\nFROM public.asian_games_medal_statistics\nWHERE year = '2018'\n;",
        datasetId: 1005
      },
      {
        tableName: "asian_games_metal_statistics_2018",
        statementType: "SCENARIO",
        engineType: "MAXCOMPUTE",
        statements: "-- 如果您未开启租户级别Schema语法，需要在运行query前通过session flag的方式设置。\nSET odps.namespace.schema = true;\n\n-- 执行查询SQL\nSELECT year,    -- 年份，枚举值从1951至2018（注：每四年一届）\n       region,  -- 国家或地区的名称（包括缩写），例如：China (CHN)、Indonesia (INA)等\n       total    -- 全部奖牌数量\nFROM bigdata_public_dataset.life_service.asian_games_medal_statistics\nWHERE year = '2018'\n;",
        datasetId: 1005
      }
    ],
  },

  {
    nameKey: 'publicDataset1006Name',
    descriptionKey: 'publicDataset1006Des',
    engines: ['MAXCOMPUTE', 'HOLOGRES', 'EMR_SPARK'],
    link: 'https://dataworks.console.aliyun.com/publicDatasets/1006',
    license: "国家统计局用户使用协议",
    licenseDescription: "数据版权归中华人民共和国国家统计局所有",
    licenseUrl: "https://data.stats.gov.cn/login.htm?m=toDisclimer",
    ref: "中华人民共和国国家统计局",
    refUrl: "https://data.stats.gov.cn/index.htm",
    scenarios: [
      {
        lastUpdateTime: 1697423511221,
        content: "根据专利申请的总受理量和总授权量，统计中国大陆各地区的2021年专利申请获批率情况。\n\n## SQL内容\n``` sql\n!sqlcontent\n```\n## 分析结果\n\n![vis-img](https://img.alicdn.com/imgextra/i3/O1CN0189ox6C1LmgP1ioI6I_!!6000000001342-0-tps-1186-874.jpg)\n",
        code: "patent_approval_percentage_by_region_in_2021",
        name: "2021年各地区专利申请获批率"
      }
    ],
    tableList: [
      {
        tableName: "mainland_domestic_patents_application",
        tableComment: "本数据集包含了2003年至2021年间，中国大陆（不包含港、澳、台）各省份的三大类专利申请和授权数据，可以通过省份名称、年份来查询和探索各地区的发明专利、实用新型专利、外观设计专利的申请和授权数量的变化趋势。",
        sampleDataLocation: "https://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_update/L2_mainland_domestic_patents_application/mainland_domestic_patents_application.txt",
        dataSize: 589,
        columnList: [
          {
            columnName: "patents_application_accepted",
            columnType: "bigint",
            columnComment: "专利申请的总受理量(项)",
            isPartitionKey: false
          },
          {
            columnName: "invention_patents_accepted",
            columnType: "bigint",
            columnComment: "发明专利申请受理量(项)。发明（专利）指对产品、方法或者其改进所提出的新的技术方案。",
            isPartitionKey: false
          },
          {
            columnName: "utility_models_patents_accepted",
            columnType: "bigint",
            columnComment: "实用新型专利申请受理量(项)。实用新型（专利）指对产品的形状、构造或者其结合所提出的适于实用的新的技术方案。",
            isPartitionKey: false
          },
          {
            columnName: "designs_patents_accepted",
            columnType: "bigint",
            columnComment: "外观设计专利申请受理量(项)。外观设计（专利）指对产品的形状、图案、色彩或者其结合所作出的富有美感并适于工业上应用的新设计。",
            isPartitionKey: false
          },
          {
            columnName: "patents_application_granted",
            columnType: "bigint",
            columnComment: "专利申请的总授权量(项)",
            isPartitionKey: false
          },
          {
            columnName: "invention_patents_granted",
            columnType: "bigint",
            columnComment: "发明专利申请授权量(项)。发明（专利）指对产品、方法或者其改进所提出的新的技术方案。",
            isPartitionKey: false
          },
          {
            columnName: "utility_models_patents_granted",
            columnType: "bigint",
            columnComment: "实用新型专利申请授权量(项)。实用新型（专利）指对产品的形状、构造或者其结合所提出的适于实用的新的技术方案。",
            isPartitionKey: false
          },
          {
            columnName: "designs_patents_granted",
            columnType: "bigint",
            columnComment: "外观设计专利申请授权量(项)。外观设计（专利）指对产品的形状、图案、色彩或者其结合所作出的富有美感并适于工业上应用的新设计。",
            isPartitionKey: false
          },
          {
            columnName: "region",
            columnType: "string",
            columnComment: "地区，枚举值包括中国大陆的31个省市地区，例如：北京市、浙江省、内蒙古自治区。",
            isPartitionKey: false
          },
          {
            columnName: "year",
            columnType: "string",
            columnComment: "年份，枚举值从2003至2021",
            isPartitionKey: true
          }
        ],
        isPartitioned: true
      }
    ],
    engineStatements: [
      {
        tableName: "patent_approval_percentage_by_region_in_2021",
        statementType: "SCENARIO",
        engineType: "EMR_SPARK",
        statements: "--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 创建OSS外部表\nCREATE EXTERNAL TABLE IF NOT EXISTS mainland_domestic_patents_application (\n    patents_application_accepted    BIGINT    COMMENT '专利申请的总受理量(项)',\n    invention_patents_accepted    BIGINT    COMMENT '发明专利申请受理量(项)。发明（专利）指对产品、方法或者其改进所提出的新的技术方案。',\n    utility_models_patents_accepted    BIGINT    COMMENT '实用新型专利申请受理量(项)。实用新型（专利）指对产品的形状、构造或者其结合所提出的适于实用的新的技术方案。',\n    designs_patents_accepted    BIGINT    COMMENT '外观设计专利申请受理量(项)。外观设计（专利）指对产品的形状、图案、色彩或者其结合所作出的富有美感并适于工业上应用的新设计。',\n    patents_application_granted    BIGINT    COMMENT '专利申请的总授权量(项)',\n    invention_patents_granted    BIGINT    COMMENT '发明专利申请授权量(项)。发明（专利）指对产品、方法或者其改进所提出的新的技术方案。',\n    utility_models_patents_granted    BIGINT    COMMENT '实用新型专利申请授权量(项)。实用新型（专利）指对产品的形状、构造或者其结合所提出的适于实用的新的技术方案。',\n    designs_patents_granted    BIGINT    COMMENT '外观设计专利申请授权量(项)。外观设计（专利）指对产品的形状、图案、色彩或者其结合所作出的富有美感并适于工业上应用的新设计。',\n    region    STRING    COMMENT '地区，枚举值包括中国大陆的31个省市地区，例如：北京市、浙江省、内蒙古自治区。'\n)\nCOMMENT '本数据集包含了2003年至2021年间，中国大陆（不包含港、澳、台）各省份的三大类专利申请和授权数据，可以通过省份名称、年份来查询和探索各地区的发明专利、实用新型专利、外观设计专利的申请和授权数量的变化趋势。'\nPARTITIONED BY (\n    year    STRING    COMMENT '年份，枚举值从2003至2021'\n)\nSTORED AS Parquet\nLOCATION 'oss://dataworks-dataset-cn-shanghai.oss-cn-shanghai.aliyuncs.com/public-datasets/L1_update/L2_mainland_domestic_patents_application/mainland_domestic_patents_application/'\n;\n\n-- 对分区表 mainland_domestic_patents_application 恢复分区数据\nMSCK REPAIR TABLE mainland_domestic_patents_application;\n\n\n--若运行以下SQL的EMR集群非上海地域，请检查集群是否已开启挂载公网，或对集群各节点绑定弹性公网IP，帮助文档： https://help.aliyun.com/document_detail/471255.html\n-- 执行查询SQL\nSELECT ROUND(designs_patents_granted/patents_application_accepted*100,2)  AS designs_patents_granted_rate,    -- 专利申请获得授权的百分比\n       region,    -- 地区，枚举值包括中国大陆的31个省市地区，例如：北京市、浙江省、内蒙古自治区。\n       year       -- 年份，枚举值从2003至2021\nFROM mainland_domestic_patents_application\nWHERE year = '2021'\n;",
        datasetId: 1006
      },
      {
        tableName: "patent_approval_percentage_by_region_in_2021",
        statementType: "SCENARIO",
        engineType: "HOLOGRES",
        statements: "-- 创建Hologres外部表\nCREATE FOREIGN TABLE IF NOT EXISTS public.mainland_domestic_patents_application (\n    patents_application_accepted    INT8,\n    invention_patents_accepted    INT8,\n    utility_models_patents_accepted    INT8,\n    designs_patents_accepted    INT8,\n    patents_application_granted    INT8,\n    invention_patents_granted    INT8,\n    utility_models_patents_granted    INT8,\n    designs_patents_granted    INT8,\n    region    TEXT,\n    year    TEXT\n)\nSERVER odps_server\nOPTIONS (\n    project_name 'bigdata_public_dataset#education',\n    table_name 'mainland_domestic_patents_application'\n);\n\n-- 为外部表及其字段添加注释\nCOMMENT ON FOREIGN TABLE public.mainland_domestic_patents_application IS '本数据集包含了2003年至2021年间，中国大陆（不包含港、澳、台）各省份的三大类专利申请和授权数据，可以通过省份名称、年份来查询和探索各地区的发明专利、实用新型专利、外观设计专利的申请和授权数量的变化趋势。';\n-- COMMENT ON COLUMN public.mainland_domestic_patents_application.patents_application_accepted IS '专利申请的总受理量(项)';\n-- COMMENT ON COLUMN public.mainland_domestic_patents_application.invention_patents_accepted IS '发明专利申请受理量(项)。发明（专利）指对产品、方法或者其改进所提出的新的技术方案。';\n-- COMMENT ON COLUMN public.mainland_domestic_patents_application.utility_models_patents_accepted IS '实用新型专利申请受理量(项)。实用新型（专利）指对产品的形状、构造或者其结合所提出的适于实用的新的技术方案。';\n-- COMMENT ON COLUMN public.mainland_domestic_patents_application.designs_patents_accepted IS '外观设计专利申请受理量(项)。外观设计（专利）指对产品的形状、图案、色彩或者其结合所作出的富有美感并适于工业上应用的新设计。';\n-- COMMENT ON COLUMN public.mainland_domestic_patents_application.patents_application_granted IS '专利申请的总授权量(项)';\n-- COMMENT ON COLUMN public.mainland_domestic_patents_application.invention_patents_granted IS '发明专利申请授权量(项)。发明（专利）指对产品、方法或者其改进所提出的新的技术方案。';\n-- COMMENT ON COLUMN public.mainland_domestic_patents_application.utility_models_patents_granted IS '实用新型专利申请授权量(项)。实用新型（专利）指对产品的形状、构造或者其结合所提出的适于实用的新的技术方案。';\n-- COMMENT ON COLUMN public.mainland_domestic_patents_application.designs_patents_granted IS '外观设计专利申请授权量(项)。外观设计（专利）指对产品的形状、图案、色彩或者其结合所作出的富有美感并适于工业上应用的新设计。';\n-- COMMENT ON COLUMN public.mainland_domestic_patents_application.region IS '地区，枚举值包括中国大陆的31个省市地区，例如：北京市、浙江省、内蒙古自治区。';\n-- COMMENT ON COLUMN public.mainland_domestic_patents_application.year IS '年份，枚举值从2003至2021';\n\n\n-- 执行查询SQL\nSELECT\n       ROUND((designs_patents_granted / patents_application_accepted::numeric) * 100, 2) AS designs_patents_granted_rate, -- 专利申请获得授权的百分比\n       region,    -- 地区，枚举值包括中国大陆的31个省市地区，例如：北京市、浙江省、内蒙古自治区。\n       year       -- 年份，枚举值从2003至2021\nFROM public.mainland_domestic_patents_application\nWHERE year = '2021'\n;",
        datasetId: 1006
      },
      {
        tableName: "patent_approval_percentage_by_region_in_2021",
        statementType: "SCENARIO",
        engineType: "MAXCOMPUTE",
        statements: "-- 如果您未开启租户级别Schema语法，需要在运行query前通过session flag的方式设置。\nSET odps.namespace.schema = true;\n\n-- 执行查询SQL\nSELECT ROUND(designs_patents_granted/patents_application_accepted*100,2)  AS designs_patents_granted_rate,    -- 专利申请获得授权的百分比\n       region,    -- 地区，枚举值包括中国大陆的31个省市地区，例如：北京市、浙江省、内蒙古自治区。\n       year       -- 年份，枚举值从2003至2021\nFROM bigdata_public_dataset.education.mainland_domestic_patents_application\nWHERE year = '2021'\n;",
        datasetId: 1006
      }
    ],
  },
];
