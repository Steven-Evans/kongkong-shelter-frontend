/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";
import Image from "../logo-image";

import styles from "./nav-layout.module.css";

import { Layout, Menu, Row, Col } from "antd";
const { Header, Footer, Content } = Layout;


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

  return (
    <Layout>
      <Header className={styles.header}>
        {/* <div style={{ maxWidth: "1200px", margin: "0 auto" }}> */}
        <Row gutter={24} align={"middle"}>
          <Col span={3}>
            <Link to="/">
                <div style={{ maxWidth: `64px` }}>
                  <Image />
                </div>
            </Link>
          </Col>
          <Col span={9}>
            <Link to="/">
                <h1 style={{ marginBottom: `0px`}}>
                    {data.site.siteMetadata.title}
                </h1>
            </Link>
          
          </Col>
          <Col span={12}>
          <Menu
            className={styles.menu} 
            mode="horizontal"
          >
            <Menu.Item key="1">
              <Link to="/about-us/">About Us</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/adopting/">Adopting</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/donating/">Donating</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/faq/">FAQ</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/contact-us/">Contact Us</Link>
            </Menu.Item>
          </Menu>
          </Col>
        </Row>
        {/* </div> */}
      </Header>
      <Content
        style={{
          padding: "24px 50px",
          background: `#fff`,
          minHeight: "100vh", //edit this to change minimum page height
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        © Kongkong Dog Rescue {new Date().getFullYear()} made by Fellow Dog Lovers ૮ˆﻌˆ ა
      </Footer>
    </Layout>
  )
}

NavLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NavLayout
