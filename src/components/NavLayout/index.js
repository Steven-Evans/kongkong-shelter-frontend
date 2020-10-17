/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";
import { enquireScreen } from 'enquire-js';
import Image from "../logo-image";
import Footer from "../footer";
import styles from "./nav-layout.module.less";

import { Layout, Menu, Row, Col, Popover} from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;

const NavLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [menuVisible, setMenuVisible] = useState(false);
  const [menuMode, setMenuMode] = useState('horizontal');

  useEffect(() => {
    enquireScreen((mobile) => {
      setMenuMode(mobile ? 'inline' : 'horizontal');
    }, "only screen and (max-width: 1099.99px)");
  });

  const menu = (
    <Menu mode={menuMode} className={styles.menu} id="nav" key="nav">
      <Menu.Item key="about">
        <Link to="/about-us/">About Us</Link>
      </Menu.Item>
      <Menu.Item key="adopting">
        <Link to="/adopting/">Adopting</Link>
      </Menu.Item>
      <Menu.Item key="donating">
        <Link to="/donating/">Donating</Link>
      </Menu.Item>
      <Menu.Item key="faq">
        <Link to="/faq/">FAQ</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact-us/">Contact Us</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className={styles.header}>
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName={styles.popoverMenu}
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
          >
            <MenuOutlined
              className={styles.navMenuIcon}
              onClick={() => setMenuVisible(!menuVisible)}
            />
          </Popover>
        ) : null}
        <Row align="middle">
          <Col md={12} sm={24} xs={24} >
            <div className={styles.logo}>
              <Link to="/">
                  <Image className={styles.image}/>
              </Link>
              <Link to="/">
                <h1 className={styles.title}>
                  {data.site.siteMetadata.title}
                </h1>
              </Link>
            </div>
          </Col>
          <Col md={12} sm={0} xs={0}>
            {menuMode === 'horizontal' ? <div className={styles.horizontalMenu}>{menu}</div> : null}
          </Col>
        </Row>
        
      </Header>
      <Content className={styles.content}>
        <div className={styles.contentChildren}>{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};

NavLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavLayout;
