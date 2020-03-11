import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import NAVMENU from "@lugia/lugia-web/dist/navmenu/lugia.navmenu.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const HorizontalNavMenu = require("./HorizontalNavMenu").default;
const DefaultNavMenu = require("./DefaultNavMenu").default;
const EllipseNavMenu = require("./EllipseNavMenu").default;
const VerticalNavMenu = require("./VerticalNavMenu").default;

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
                title={"导航菜单"}
                subTitle={"Navmenu"}
                desc={"为页面提供导航功能的菜单"}
              />
              <Demo
                title={"水平导航导航"}
                titleID={"navmenu-0"}
                code={
                  <code>{`import React from \"react\";\nimport { Navmenu, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport styled from \"styled-components\";\n\nconst NavMenuWrap = styled.div\`\n  display: inline-block;\n  margin: 10px;\n\`;\n\nconst data = [\n  {\n    value: \"Lugia Design of React\",\n    text: \"Lugia Design of React\",\n    icon: \"lugia-icon-financial_add_pic\"\n  },\n  {\n    value: \"Lugia-web\",\n    text: \"Lugia-web\",\n    icon: \"lugia-icon-financial_columns\"\n  },\n  { value: \"Lugia-mobile\", text: \"Lugia-mobile\" },\n  {\n    value: \"Components\",\n    text: \"Components\",\n    children: [\n      {\n        value: \"General\",\n        text: \"General\",\n        describe: true,\n        children: [\n          {\n            value: \"Button\",\n            text: \"Button\",\n            icon: \"lugia-icon-financial_add_pic\"\n          },\n          {\n            value: \"Icon\",\n            text: \"Icon\",\n            icon: \"lugia-icon-financial_archive\"\n          }\n        ]\n      },\n\n      {\n        value: \"Layout\",\n        text: \"Layout\",\n        describe: true,\n        children: [{ value: \"Grid\", text: \"Grid\" }]\n      },\n\n      {\n        value: \"Navigation\",\n        text: \"Navigation\",\n        describe: true,\n        children: [\n          { value: \"Affix\", text: \"Affix\" },\n          { value: \"tag\", text: \"tag\" }\n        ]\n      },\n\n      {\n        value: \"Data Entry\",\n        text: \"Data Entry\",\n        describe: true,\n        children: [\n          { value: \"rate\", text: \"rate\" },\n          { value: \"Cascader\", text: \"Cascader\" }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class DefaultBreadcrumb extends React.Component<any, any> {\n  render() {\n    return [\n      <NavMenuWrap>\n        <Navmenu data={data} mode={\"horizontal\"} />\n      </NavMenuWrap>,\n      <NavMenuWrap>\n        <Navmenu data={data} mode={\"horizontal\"} themeStyle={\"dark\"} />\n      </NavMenuWrap>\n    ];\n  }\n}\n`}</code>
                }
                desc={
                  "通过mode: horizontal 设置水平导航菜单,,通过themeStyle：dark 切换不同的主题风格"
                }
                demo={<HorizontalNavMenu />}
              ></Demo>
              <Demo
                title={"侧栏导航 Primary 风格"}
                titleID={"navmenu-1"}
                code={
                  <code>{`import React from \'react\';\nimport { Navmenu, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst NavMenuWrap = styled.div\`\n  display: inline-block;\n  margin: 10px;\n\`;\n\nconst data = [\n  {\n    value: \'Lugia Design of React\',\n    text: \'Lugia Design of React\',\n    icon: \'lugia-icon-financial_add_pic\'\n  },\n  {\n    value: \'Lugia-web\',\n    text: \'Lugia-web\',\n    icon: \'lugia-icon-financial_columns\'\n  },\n  { value: \'Lugia-mobile\', text: \'Lugia-mobile\' },\n  {\n    value: \'Components\',\n    text: \'Components\',\n    children: [\n      {\n        value: \'General\',\n        text: \'General\',\n        describe: true,\n        children: [\n          {\n            value: \'Button\',\n            text: \'Button\',\n            icon: \'lugia-icon-financial_add_pic\'\n          },\n          {\n            value: \'Icon\',\n            text: \'Icon\',\n            icon: \'lugia-icon-financial_archive\'\n          }\n        ]\n      },\n\n      {\n        value: \'Layout\',\n        text: \'Layout\',\n        describe: true,\n        children: [\n          { value: \'Grid\', text: \'Grid\' },\n        ]\n      },\n\n      {\n        value: \'Navigation\',\n        text: \'Navigation\',\n        describe: true,\n        children: [\n          { value: \'Affix\', text: \'Affix\' },\n          { value: \'Breadcrumb\', text: \'Breadcrumb\' }\n        ]\n      },\n\n      {\n        value: \'Data Entry\',\n        text: \'Data Entry\',\n        describe: true,\n        children: [\n          { value: \'AutoComplete\', text: \'AutoComplete\' },\n          { value: \'Cascader\', text: \'Cascader\' }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class DefaultBreadcrumb extends React.Component<any, any> {\n  render() {\n    return [\n      <NavMenuWrap>\n        <Theme config={{ [Widget.Navmenu]: { height: 400 } }}>\n          <Navmenu data={data} />\n        </Theme>\n      </NavMenuWrap>,\n      <NavMenuWrap>\n        <Theme config={{ [Widget.Navmenu]: { height: 400 } }}>\n          <Navmenu data={data} themeStyle={\'dark\'} />\n        </Theme>\n      </NavMenuWrap>\n    ];\n  }\n}\n`}</code>
                }
                desc={
                  "可内嵌子菜单,默认为 Primary 风格的侧栏导航,通过themeStyle：dark 切换不同的主题风格"
                }
                demo={<DefaultNavMenu />}
              ></Demo>
              <Demo
                title={"侧栏导航 Ellipse 风格"}
                titleID={"navmenu-2"}
                code={
                  <code>{`import React from \'react\';\nimport { Navmenu, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst NavMenuWrap = styled.div\`\n  display: inline-block;\n  margin: 10px;\n\`;\n\nconst data = [\n  {\n    value: \'Lugia Design of React\',\n    text: \'Lugia Design of React\',\n    icon: \'lugia-icon-financial_add_pic\'\n  },\n  {\n    value: \'Lugia-web\',\n    text: \'Lugia-web\',\n    icon: \'lugia-icon-financial_columns\'\n  },\n  { value: \'Lugia-mobile\', text: \'Lugia-mobile\' },\n  {\n    value: \'Components\',\n    text: \'Components\',\n    children: [\n      {\n        value: \'General\',\n        text: \'General\',\n        describe: true,\n        children: [\n          {\n            value: \'Button\',\n            text: \'Button\',\n            icon: \'lugia-icon-financial_add_pic\'\n          },\n          {\n            value: \'Icon\',\n            text: \'Icon\',\n            icon: \'lugia-icon-financial_archive\'\n          }\n        ]\n      },\n\n      {\n        value: \'Layout\',\n        text: \'Layout\',\n        describe: true,\n        children: [\n          { value: \'Grid\', text: \'Grid\' },\n        ]\n      },\n\n      {\n        value: \'Navigation\',\n        text: \'Navigation\',\n        describe: true,\n        children: [\n          { value: \'Affix\', text: \'Affix\' },\n          { value: \'Breadcrumb\', text: \'Breadcrumb\' }\n        ]\n      },\n\n      {\n        value: \'Data Entry\',\n        text: \'Data Entry\',\n        describe: true,\n        children: [\n          { value: \'AutoComplete\', text: \'AutoComplete\' },\n          { value: \'Cascader\', text: \'Cascader\' }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class DefaultBreadcrumb extends React.Component<any, any> {\n  render() {\n    return [\n      <NavMenuWrap>\n        <Navmenu data={data} inlineType={\'ellipse\'} />\n      </NavMenuWrap>,\n      <NavMenuWrap>\n        <Navmenu data={data} themeStyle={\'dark\'} inlineType={\'ellipse\'} />\n      </NavMenuWrap>\n    ];\n  }\n}\n`}</code>
                }
                desc={
                  "可内嵌子菜单,通过 inlineType：ellipse 设置ellipse风格的侧栏导航，通过themeStyle：dark 切换不同的主题风格"
                }
                demo={<EllipseNavMenu />}
              ></Demo>
              <Demo
                title={"垂直菜单"}
                titleID={"navmenu-3"}
                code={
                  <code>{`import React from \"react\";\nimport { Navmenu, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport styled from \"styled-components\";\n\nconst NavMenuWrap = styled.div\`\n  margin: 10px;\n\`;\n\nconst data = [\n  {\n    value: \"Lugia Design of React\",\n    text: \"Lugia Design of React\",\n    icon: \"lugia-icon-financial_add_pic\"\n  },\n  {\n    value: \"Lugia-web\",\n    text: \"Lugia-web\",\n    icon: \"lugia-icon-financial_columns\"\n  },\n  { value: \"Lugia-mobile\", text: \"Lugia-mobile\" },\n  {\n    value: \"Components\",\n    text: \"Components\",\n    children: [\n      {\n        value: \"General\",\n        text: \"General\",\n        describe: true,\n        children: [\n          {\n            value: \"Button\",\n            text: \"Button\",\n            icon: \"lugia-icon-financial_add_pic\"\n          },\n          {\n            value: \"Icon\",\n            text: \"Icon\",\n            icon: \"lugia-icon-financial_archive\"\n          }\n        ]\n      },\n\n      {\n        value: \"Layout\",\n        text: \"Layout\",\n        describe: true,\n        children: [{ value: \"Grid\", text: \"Grid\" }]\n      },\n\n      {\n        value: \"Navigation\",\n        text: \"Navigation\",\n        describe: true,\n        children: [\n          { value: \"Affix\", text: \"Affix\" },\n          { value: \"Breadcrumb\", text: \"Breadcrumb\" }\n        ]\n      },\n\n      {\n        value: \"Data Entry\",\n        text: \"Data Entry\",\n        describe: true,\n        children: [\n          { value: \"AutoComplete\", text: \"AutoComplete\" },\n          { value: \"Cascader\", text: \"Cascader\" }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class DefaultBreadcrumb extends React.Component<any, any> {\n  render() {\n    return [\n      <NavMenuWrap>\n        <Navmenu data={data} mode={\"vertical\"} />\n      </NavMenuWrap>,\n      <NavMenuWrap>\n        <Navmenu data={data} mode={\"vertical\"} themeStyle={\"dark\"} />\n      </NavMenuWrap>\n    ];\n  }\n}\n`}</code>
                }
                desc={
                  "通过 mode: vertical 设置垂直菜单, 通过themeStyle：dark 切换不同的主题风格"
                }
                demo={<VerticalNavMenu />}
              ></Demo>
              <EditTables dataSource={NAVMENU} />
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
                <Link title={"水平导航导航"} href={"#navmenu-0"} />
                <Link title={"侧栏导航 Primary 风格"} href={"#navmenu-1"} />
                <Link title={"侧栏导航 Ellipse 风格"} href={"#navmenu-2"} />
                <Link title={"垂直菜单"} href={"#navmenu-3"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
