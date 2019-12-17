import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import TREE from "@lugia/lugia-web/dist/tree/lugia.tree.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const DefaultTree = require("./DefaultTree").default;
const RoundtTree = require("./RoundtTree").default;
const DefaultMutlipleTree = require("./DefaultMutlipleTree").default;
const DigDataTree = require("./DigDataTree").default;
const InlineDataSingleTree = require("./InlineDataSingleTree").default;
const InlineDataMutlipleTree = require("./InlineDataMutlipleTree").default;
const SuffixTree = require("./SuffixTree").default;
const ShowMenuTree = require("./ShowMenuTree").default;

const { Link } = Anchor;
const { Row, Col } = Grid;

export default PageNavHoC(
  widgetrouter,
  class ComDemo extends React.Component {
    handleLinkClick = (e, href) => {
      if (href) {
        const name = href.slice(1);
        const anchorElement = document.getElementById(name);
        if (anchorElement) {
          anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
    };

    render() {
      const { next, prev, isMobile = false } = this.props;
      const span = isMobile ? 24 : 20;
      const style = isMobile ? {} : { paddingRight: "50px" };
      return (
        <Row>
          <Col span={span}>
            <div style={style}>
              <Title
                title={"树形控件"}
                subTitle={"Tree"}
                desc={"清晰地展示层级结构的信息,可展开或折叠。"}
              />
              <Demo
                title={"基本用法"}
                titleID={"tree-0"}
                code={
                  <code>{`/**\n *\n * create by szfeng\n *\n */\nimport * as React from \'react\';\nimport { Tree, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\n\nconst data = [\n  { value: \'1\', text: \'选项 1\' },\n  { value: \'1.1\', text: \'选项 1.1\', pid: \'1\', path: \'1\' },\n  {\n    value: \'1.1.1\',\n    text: \'选项 1.1.1\',\n    pid: \'1.1\',\n    path: \'1/1.1\',\n    isLeaf: true\n  },\n  {\n    value: \'1.1.2\',\n    text: \'选项 1.1.2\',\n    pid: \'1.1\',\n    path: \'1/1.1\',\n    isLeaf: true,\n    notCanSelect: true\n  },\n\n  { value: \'1.2\', text: \'选项 1.2\', pid: \'1\', path: \'1\' },\n  {\n    value: \'1.2.1\',\n    text: \'选项 1.2.1\',\n    pid: \'1.2\',\n    path: \'1/1.2\',\n    isLeaf: true\n  },\n  { value: \'1.2.2\', text: \'选项 1.2.2\', pid: \'1.2\', path: \'1/1.2\' },\n  {\n    value: \'1.2.2.1\',\n    text: \'选项 1.2.2.1\',\n    pid: \'1.2.2\',\n    path: \'1/1.2/1.2.2\',\n    isLeaf: true\n  },\n\n  {\n    value: \'1.2.2.2\',\n    text: \'选项 1.2.2.2\',\n    pid: \'1.2.2\',\n    path: \'1/1.2/1.2.2\',\n    isLeaf: true\n  },\n\n  { value: \'1.3\', text: \'选项 1.3\', pid: \'1\', path: \'1\', isLeaf: true },\n\n  { value: \'2\', text: \'选项 2\' },\n  { value: \'2.1\', text: \'选项 2.1\', pid: \'2\', path: \'2\', isLeaf: true },\n  { value: \'2.2\', text: \'选项 2.2\', pid: \'2\', path: \'2\', isLeaf: true }\n];\n\nexport default class DefaultTree extends React.Component<Object, Object> {\n  render() {\n    const config = {\n      [Widget.Tree]: {\n        TreeWrap: {\n          normal: {\n            width: 300\n          }\n        }\n      }\n    };\n\n    return (\n      <Tree\n        theme={config}\n        data={data}\n        igronSelectField={\'notCanSelect\'}\n        autoHeight\n      />\n    );\n  }\n}\n`}</code>
                }
                desc={"默认为单选,可通过igronSelectField指定禁选的标识符"}
                demo={<DefaultTree />}
              ></Demo>
              <Demo
                title={"不同样式风格的单选树"}
                titleID={"tree-1"}
                code={
                  <code>{`/**\n *\n * create by szfeng\n *\n */\nimport * as React from \'react\';\nimport { Tree, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\n\nconst data = [\n  { value: \'1\', text: \'选项 1\' },\n  { value: \'1.1\', text: \'选项 1.1\', pid: \'1\', path: \'1\' },\n  {\n    value: \'1.1.1\',\n    text: \'选项 1.1.1\',\n    pid: \'1.1\',\n    path: \'1/1.1\',\n    isLeaf: true\n  },\n  {\n    value: \'1.1.2\',\n    text: \'选项 1.1.2\',\n    pid: \'1.1\',\n    path: \'1/1.1\',\n    isLeaf: true,\n    notCanSelect: true\n  },\n\n  { value: \'1.2\', text: \'选项 1.2\', pid: \'1\', path: \'1\' },\n  {\n    value: \'1.2.1\',\n    text: \'选项 1.2.1\',\n    pid: \'1.2\',\n    path: \'1/1.2\',\n    isLeaf: true\n  },\n  { value: \'1.2.2\', text: \'选项 1.2.2\', pid: \'1.2\', path: \'1/1.2\' },\n  {\n    value: \'1.2.2.1\',\n    text: \'选项 1.2.2.1\',\n    pid: \'1.2.2\',\n    path: \'1/1.2/1.2.2\',\n    isLeaf: true\n  },\n\n  {\n    value: \'1.2.2.2\',\n    text: \'选项 1.2.2.2\',\n    pid: \'1.2.2\',\n    path: \'1/1.2/1.2.2\',\n    isLeaf: true\n  },\n\n  { value: \'1.3\', text: \'选项 1.3\', pid: \'1\', path: \'1\', isLeaf: true },\n\n  { value: \'2\', text: \'选项 2\' },\n  { value: \'2.1\', text: \'选项 2.1\', pid: \'2\', path: \'2\', isLeaf: true },\n  { value: \'2.2\', text: \'选项 2.2\', pid: \'2\', path: \'2\', isLeaf: true }\n];\n\nexport default class DefaultTree extends React.Component<Object, Object> {\n  render() {\n    const config = {\n      [Widget.Tree]: {\n        TreeWrap: {\n          normal: {\n            width: 300\n          }\n        }\n      }\n    };\n\n    return (\n      <Tree\n        theme={config}\n        data={data}\n        igronSelectField={\'notCanSelect\'}\n        autoHeight\n        shape={\'round\'}\n      />\n    );\n  }\n}\n`}</code>
                }
                desc={"设置shape：round,选中时圆角为全圆"}
                demo={<RoundtTree />}
              ></Demo>
              <Demo
                title={"多选的Tree"}
                titleID={"tree-2"}
                code={
                  <code>{`/**\n *\n * create by ligx\n *\n */\nimport * as React from \'react\';\nimport { Tree, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\n\nconst data = [\n  { value: \'1\', text: \'选项 1\' },\n  { value: \'1.1\', text: \'选项 1.1\', pid: \'1\', path: \'1\' },\n  {\n    value: \'1.1.1\',\n    text: \'选项 1.1.1\',\n    pid: \'1.1\',\n    path: \'1/1.1\',\n    isLeaf: true\n  },\n  {\n    value: \'1.1.2\',\n    text: \'选项 1.1.2\',\n    pid: \'1.1\',\n    path: \'1/1.1\',\n    isLeaf: true,\n    notCanSelect: true\n  },\n\n  { value: \'1.2\', text: \'选项 1.2\', pid: \'1\', path: \'1\' },\n  {\n    value: \'1.2.1\',\n    text: \'选项 1.2.1\',\n    pid: \'1.2\',\n    path: \'1/1.2\',\n    isLeaf: true\n  },\n  { value: \'1.2.2\', text: \'选项 1.2.2\', pid: \'1.2\', path: \'1/1.2\' },\n  {\n    value: \'1.2.2.1\',\n    text: \'选项 1.2.2.1\',\n    pid: \'1.2.2\',\n    path: \'1/1.2/1.2.2\',\n    isLeaf: true\n  },\n\n  {\n    value: \'1.2.2.2\',\n    text: \'选项 1.2.2.2\',\n    pid: \'1.2.2\',\n    path: \'1/1.2/1.2.2\',\n    isLeaf: true\n  },\n\n  { value: \'1.3\', text: \'选项 1.3\', pid: \'1\', path: \'1\', isLeaf: true },\n\n  { value: \'2\', text: \'选项 2\' },\n  { value: \'2.1\', text: \'选项 2.1\', pid: \'2\', path: \'2\', isLeaf: true },\n  { value: \'2.2\', text: \'选项 2.2\', pid: \'2\', path: \'2\', isLeaf: true }\n];\n\nexport default class DefaultMutlipleTree extends React.Component<\n  Object,\n  Object\n> {\n  render() {\n    const config = {\n      [Widget.Tree]: {\n        TreeWrap: {\n          normal: {\n            width: 300\n          }\n        }\n      }\n    };\n    return (\n      <Tree\n        theme={config}\n        autoHeight\n        mutliple\n        data={data}\n        igronSelectField={\'notCanSelect\'}\n      />\n    );\n  }\n}\n`}</code>
                }
                desc={"多选的Tree,可通过igronSelectField指定禁选的标识符"}
                demo={<DefaultMutlipleTree />}
              ></Demo>
              <Demo
                title={"可加载大数据"}
                titleID={"tree-3"}
                code={
                  <code>{`/**\n *\n * create by szfeng\n *\n */\nimport * as React from \'react\';\nimport { Tree, Theme, Input } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\n\nconst bigTree = [];\n\ngetNumberKey();\n\nfunction getNumberKey() {\n  let key = 0;\n  for (let a = 0; a < 5; a++) {\n    const keyA = key++;\n    bigTree.push({\n      value: \`\${keyA}\`,\n      text: \`\${a}\`\n    });\n    for (let b = 0; b < 5; b++) {\n      const titleB = \`\${a}.\${b}\`;\n      const keyb = key++;\n      bigTree.push({\n        value: keyb,\n        text: titleB,\n        pid: \`\${keyA}\`,\n        path: \`\${keyA}\`\n      });\n      for (let c = 0; c < 20; c++) {\n        const titleC = \`\${a}.\${b}.\${c}\`;\n        const keyc = key++;\n        bigTree.push({\n          value: keyc,\n          text: titleC,\n          pid: \`\${keyb}\`,\n          path: \`\${keyA}/\${keyb}\`\n        });\n        for (let d = 0; d < 400; d++) {\n          const text = \`\${a}.\${b}.\${c}.\${d}\`;\n          const keyD = key++;\n          bigTree.push({\n            value: keyD,\n            text,\n            pid: \`\${keyc}\`,\n            isLeaf: true,\n            path: \`\${keyA}/\${keyb}/\${keyc}\`\n          });\n        }\n      }\n    }\n  }\n}\n\nexport default class BigDataTree extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { query: \'\' };\n  }\n\n  render() {\n    const config = {\n      [Widget.Tree]: {\n        TreeWrap: {\n          normal: {\n            width: 300,\n            height: 400\n          }\n        }\n      }\n    };\n    const { query } = this.state;\n\n    return [\n      <Input\n        value={query}\n        placeholder={\'请输入查询条件\'}\n        onChange={this.onChange}\n      />,\n      <Tree query={query} theme={config} data={bigTree} expandAll mutliple />\n    ];\n  }\n\n  onChange = target => {\n    const { newValue: query } = target;\n    this.setState({ query });\n  };\n}\n`}</code>
                }
                desc={"可支持20万条数据快速加载成Tree控件"}
                demo={<DigDataTree />}
              ></Demo>
              <Demo
                title={"嵌套数据的单选Tree"}
                titleID={"tree-4"}
                code={
                  <code>{`/**\n *\n * create by szfeng\n *\n */\nimport * as React from \'react\';\nimport { Tree, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\n\nconst data = [\n  {\n    value: \'Components\',\n    text: \'Components\',\n    children: [\n      {\n        value: \'General\',\n        text: \'General\',\n        children: [\n          {\n            value: \'Button\',\n            text: \'Button\',\n            icon: \'lugia-icon-financial_add_pic\',\n            disabled: true\n          },\n          { value: \'Icon\', text: \'Icon\', icon: \'lugia-icon-financial_archive\' }\n        ]\n      },\n\n      {\n        value: \'Layout\',\n        text: \'Layout\',\n        children: [\n          { value: \'Grid\', text: \'Grid\', disabled: true }\n        ]\n      },\n\n      {\n        value: \'Navigation\',\n        text: \'Navigation\',\n        children: [\n          { value: \'Affix\', text: \'Affix\' },\n          { value: \'Breadcrumb\', text: \'Breadcrumb\' },\n          { value: \'Dropdown\', text: \'Dropdown\' },\n          { value: \'Menu\', text: \'Menu\' },\n          { value: \'Pagination\', text: \'Pagination\' },\n          { value: \'Steps\', text: \'Steps\' }\n        ]\n      },\n\n      {\n        value: \'Data Entry\',\n        text: \'Data Entry\',\n        children: [\n          { value: \'AutoComplete\', text: \'AutoComplete\' },\n          { value: \'Cascader\', text: \'Cascader\' },\n          { value: \'Checkbox\', text: \'Checkbox\' },\n          { value: \'DatePicker\', text: \'DatePicker\' },\n          { value: \'Form\', text: \'Form\' },\n          { value: \'Input\', text: \'Input\' }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class InlineDataSingleTree extends React.Component<\n  Object,\n  Object\n> {\n  render() {\n    const config = {\n      [Widget.Tree]: {\n        TreeWrap: {\n          normal: {\n            width: 300\n          }\n        }\n      }\n    };\n\n    return (\n      <Tree\n        theme={config}\n        autoHeight\n        data={data}\n        translateTreeData={true}\n        valueField={\'value\'}\n        displayField={\'text\'}\n      />\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "通过指定translateTreeData：true,组件内部将嵌套数据自动转换成Tree型展开数据,可通过disabled指定禁选的项。注意需要指定valueField和displayField"
                }
                demo={<InlineDataSingleTree />}
              ></Demo>
              <Demo
                title={"嵌套数据的多选Tree"}
                titleID={"tree-5"}
                code={
                  <code>{`/**\n *\n * create by szfeng\n *\n */\nimport * as React from \'react\';\nimport { Tree, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\n\nconst data = [\n  {\n    value: \'Components\',\n    text: \'Components\',\n    children: [\n      {\n        value: \'General\',\n        text: \'General\',\n        children: [\n          {\n            value: \'Button\',\n            text: \'Button\',\n            icon: \'lugia-icon-financial_add_pic\',\n            disabled: true\n          },\n          { value: \'Icon\', text: \'Icon\', icon: \'lugia-icon-financial_archive\' }\n        ]\n      },\n\n      {\n        value: \'Layout\',\n        text: \'Layout\',\n        children: [\n          { value: \'Grid\', text: \'Grid\', disabled: true }\n        ]\n      },\n\n      {\n        value: \'Navigation\',\n        text: \'Navigation\',\n        children: [\n          { value: \'Affix\', text: \'Affix\' },\n          { value: \'Breadcrumb\', text: \'Breadcrumb\' },\n          { value: \'Dropdown\', text: \'Dropdown\' },\n          { value: \'Menu\', text: \'Menu\' },\n          { value: \'Pagination\', text: \'Pagination\' },\n          { value: \'Steps\', text: \'Steps\' }\n        ]\n      },\n\n      {\n        value: \'Data Entry\',\n        text: \'Data Entry\',\n        children: [\n          { value: \'AutoComplete\', text: \'AutoComplete\' },\n          { value: \'Cascader\', text: \'Cascader\' },\n          { value: \'Checkbox\', text: \'Checkbox\' },\n          { value: \'DatePicker\', text: \'DatePicker\' },\n          { value: \'Form\', text: \'Form\' },\n          { value: \'Input\', text: \'Input\' }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class InlineDataMutlipleTree extends React.Component<\n  Object,\n  Object\n> {\n  render() {\n    const config = {\n      [Widget.Tree]: {\n        TreeWrap: {\n          normal: {\n            width: 300\n          }\n        }\n      }\n    };\n\n    return (\n      <Tree\n        theme={config}\n        autoHeight\n        data={data}\n        mutliple\n        translateTreeData={true}\n        valueField={\'value\'}\n        displayField={\'text\'}\n      />\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "通过指定translateTreeData：true,组件内部将嵌套数据自动转换成Tree型展开数据,可通过disabled指定禁选的项,通过mutliple生成多选Tree。注意需要指定valueField和displayField"
                }
                demo={<InlineDataMutlipleTree />}
              ></Demo>
              <Demo
                title={"自定义后缀图标的Tree"}
                titleID={"tree-6"}
                code={
                  <code>{`/**\n *\n * create by szfeng\n *\n */\nimport * as React from \'react\';\nimport { Tree, Icon, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst IconBox = styled.div\`\n  margin: 0 4px;\n  z-index: 1000;\n\`;\n\nconst data = [\n  { value: \'1\', text: \'选项 1\' },\n  { value: \'1.1\', text: \'选项 1.1\', pid: \'1\', path: \'1\' },\n  {\n    value: \'1.1.1\',\n    text: \'选项 1.1.1\',\n    pid: \'1.1\',\n    path: \'1/1.1\',\n    isLeaf: true\n  },\n  {\n    value: \'1.1.2\',\n    text: \'选项 1.1.2\',\n    pid: \'1.1\',\n    path: \'1/1.1\',\n    isLeaf: true,\n    notCanSelect: true\n  },\n\n  { value: \'1.2\', text: \'选项 1.2\', pid: \'1\', path: \'1\' },\n  {\n    value: \'1.2.1\',\n    text: \'选项 1.2.1\',\n    pid: \'1.2\',\n    path: \'1/1.2\',\n    isLeaf: true\n  },\n  { value: \'1.2.2\', text: \'选项 1.2.2\', pid: \'1.2\', path: \'1/1.2\' },\n  {\n    value: \'1.2.2.1\',\n    text: \'选项 1.2.2.1\',\n    pid: \'1.2.2\',\n    path: \'1/1.2/1.2.2\',\n    isLeaf: true\n  },\n\n  {\n    value: \'1.2.2.2\',\n    text: \'选项 1.2.2.2\',\n    pid: \'1.2.2\',\n    path: \'1/1.2/1.2.2\',\n    isLeaf: true\n  },\n\n  { value: \'1.3\', text: \'选项 1.3\', pid: \'1\', path: \'1\', isLeaf: true },\n\n  { value: \'2\', text: \'选项 2\' },\n  { value: \'2.1\', text: \'选项 2.1\', pid: \'2\', path: \'2\', isLeaf: true },\n  { value: \'2.2\', text: \'选项 2.2\', pid: \'2\', path: \'2\', isLeaf: true }\n];\n\nexport default class DefaultTree extends React.Component<Object, Object> {\n  render() {\n    const config = {\n      [Widget.Tree]: {\n        TreeWrap: {\n          normal: {\n            width: 320,\n            height: 290\n          }\n        }\n      }\n    };\n\n    return (\n      <Tree\n        data={data}\n        theme={config}\n        igronSelectField={\'notCanSelect\'}\n        autoHeight\n        expandAll\n        onSelect={this.onSelect}\n        renderSuffix={this.renderSuffix}\n        shape={\'round\'}\n      />\n    );\n  }\n\n  renderSuffix = (item: Object) => {\n    const { isLeaf } = item;\n    if (isLeaf) {\n      return [\n        <IconBox>\n          <Icon iconClass={\'lugia-icon-direction_rollback\'} />\n        </IconBox>,\n        <IconBox>\n          <Icon iconClass={\'lugia-icon-reminder_check_square\'} />\n        </IconBox>,\n        <IconBox>\n          <Icon iconClass={\'lugia-icon-financial_delete\'} />\n        </IconBox>\n      ];\n    }\n  };\n}\n`}</code>
                }
                desc={"通过renderSuffix回调函数, 可以自定义后缀图标"}
                demo={<SuffixTree />}
              ></Demo>
              <Demo
                title={"右键显示菜单的Tree"}
                titleID={"tree-7"}
                code={
                  <code>{`/**\n *\n * create by szfeng\n *\n */\nimport * as React from \'react\';\nimport { Tree, Icon, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst IconBox = styled.div\`\n  margin: 0 4px;\n\`;\n\nconst getCSS = props => {\n  const { visible, clientX, clientY } = props;\n\n  return !visible\n    ? \'display: none; opacity: 0\'\n    : \`display: block; left: \${clientX}px; top: \${clientY}px; opacity: 1\`;\n};\n\nconst MenuBox = styled.div\`\n  position: fixed;\n  width: 150px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);\n  \${getCSS}\n\`;\n\nconst Item = styled.div\`\n  width: 100%;\n  height: 35px;\n  line-height: 30px;\n  padding-left: 10px;\n  user-select: none;\n  color: #999;\n  cursor: pointer;\n  font-size: 12px;\n  &:hover {\n    background: rgba(77, 99, 255, 0.1);\n  }\n\`;\n\nconst data = [\n  { value: \'1\', text: \'选项 1\' },\n  { value: \'1.1\', text: \'选项 1.1\', pid: \'1\', path: \'1\' },\n  {\n    value: \'1.1.1\',\n    text: \'选项 1.1.1\',\n    pid: \'1.1\',\n    path: \'1/1.1\',\n    isLeaf: true\n  },\n  {\n    value: \'1.1.2\',\n    text: \'选项 1.1.2\',\n    pid: \'1.1\',\n    path: \'1/1.1\',\n    isLeaf: true,\n    notCanSelect: true\n  },\n\n  { value: \'1.2\', text: \'选项 1.2\', pid: \'1\', path: \'1\' },\n  {\n    value: \'1.2.1\',\n    text: \'选项 1.2.1\',\n    pid: \'1.2\',\n    path: \'1/1.2\',\n    isLeaf: true\n  },\n  { value: \'1.2.2\', text: \'选项 1.2.2\', pid: \'1.2\', path: \'1/1.2\' },\n  {\n    value: \'1.2.2.1\',\n    text: \'选项 1.2.2.1\',\n    pid: \'1.2.2\',\n    path: \'1/1.2/1.2.2\',\n    isLeaf: true\n  },\n\n  {\n    value: \'1.2.2.2\',\n    text: \'选项 1.2.2.2\',\n    pid: \'1.2.2\',\n    path: \'1/1.2/1.2.2\',\n    isLeaf: true\n  },\n\n  { value: \'1.3\', text: \'选项 1.3\', pid: \'1\', path: \'1\', isLeaf: true },\n\n  { value: \'2\', text: \'选项 2\' },\n  { value: \'2.1\', text: \'选项 2.1\', pid: \'2\', path: \'2\', isLeaf: true },\n  { value: \'2.2\', text: \'选项 2.2\', pid: \'2\', path: \'2\', isLeaf: true }\n];\n\nexport default class DefaultTree extends React.Component<Object, Object> {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible: false,\n      clientX: 0,\n      clientY: 0,\n      start: 0\n    };\n  }\n\n  componentDidMount() {\n    document.addEventListener(\'click\', this._handleClick);\n    document.addEventListener(\'scroll\', this._handleScroll);\n  }\n\n  componentWillUnmount() {\n    document.removeEventListener(\'click\', this._handleClick);\n    document.removeEventListener(\'scroll\', this._handleScroll);\n  }\n\n  _handleClick = (event: Object) => {\n    const { visible } = this.state;\n    if (visible) {\n      this.setState({ visible: false });\n    }\n  };\n\n  _handleScroll = (event: Object) => {\n    const { visible } = this.state;\n    if (visible) {\n      this.setState({ visible: false });\n    }\n  };\n\n  getTriggerMenu(isLeaf: boolean) {\n    return isLeaf\n      ? [\n          <Item\n            onContextMenu={e => {\n              e.preventDefault();\n              return;\n            }}\n          >\n            叶子结点选项1\n          </Item>,\n          <Item\n            onContextMenu={e => {\n              e.preventDefault();\n              return;\n            }}\n          >\n            叶子结点选项2\n          </Item>\n        ]\n      : [\n          <Item\n            onContextMenu={e => {\n              e.preventDefault();\n              return;\n            }}\n          >\n            父级节点选项1\n          </Item>,\n          <Item\n            onContextMenu={e => {\n              e.preventDefault();\n              return;\n            }}\n          >\n            父级节点选项2\n          </Item>\n        ];\n  }\n\n  onRightClick = (target: Object) => {\n    const { event, item } = target;\n    const { notCanSelect, isLeaf } = item;\n    if (notCanSelect) {\n      return;\n    }\n    this.isLeaf = isLeaf;\n    const { clientX, clientY } = event;\n\n    this.setState({\n      visible: true,\n      clientX,\n      clientY,\n      item\n    });\n  };\n\n  render() {\n    const config = {\n      [Widget.Tree]: {\n        TreeWrap: {\n          normal: {\n            width: 320,\n            height: 290\n          }\n        }\n      }\n    };\n    const { visible, clientX, clientY } = this.state;\n    const menu = this.getTriggerMenu(this.isLeaf);\n    return [\n      <Tree\n        data={data}\n        theme={config}\n        igronSelectField={\'notCanSelect\'}\n        autoHeight\n        expandAll\n        onSelect={this.onSelect}\n        shape={\'round\'}\n        onRightClick={this.onRightClick}\n      />,\n      <MenuBox visible={visible} clientX={clientX} clientY={clientY}>\n        {menu}\n      </MenuBox>\n    ];\n  }\n}\n`}</code>
                }
                desc={"通过onRightClick事件, 展示自定义菜单"}
                demo={<ShowMenuTree />}
              ></Demo>
              <EditTables dataSource={TREE} />
              <FooterNav prev={prev} next={next} />
            </div>
          </Col>
          {!isMobile && (
            <Col span={4}>
              <Anchor
                slideType="line"
                onClick={this.handleLinkClick}
                useHref={false}
              >
                <Link title={"基本用法"} href={"#tree-0"} />
                <Link title={"不同样式风格的单选树"} href={"#tree-1"} />
                <Link title={"多选的Tree"} href={"#tree-2"} />
                <Link title={"可加载大数据"} href={"#tree-3"} />
                <Link title={"嵌套数据的单选Tree"} href={"#tree-4"} />
                <Link title={"嵌套数据的多选Tree"} href={"#tree-5"} />
                <Link title={"自定义后缀图标的Tree"} href={"#tree-6"} />
                <Link title={"右键显示菜单的Tree"} href={"#tree-7"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
