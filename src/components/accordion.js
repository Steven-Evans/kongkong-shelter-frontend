import React, {useState, useRef} from "react";
import {Row, Col} from "antd";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import {RightOutlined} from "@ant-design/icons";

import styles from "./accordion.module.less";

const Accordion = (props) => {
  const{title, content, media} = props;

  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggle = () => {
    setActive(active === "" ? "active" : "");
    setHeight(active === "active" ? "0px" : `${contentRef.current.scrollHeight}px`);
  };

  return (
    <div className={styles.accordion__section}>
      <button className={`${styles.accordion} ${styles.active}`} onClick={toggle}>
        <RightOutlined className={styles.accordion__icon} rotate={active ? 90 : 0} />
        <p className={styles.accordion__title}>{title}</p>
      </button>
      <div
        ref={contentRef}
        className={styles.accordion__content}
        style={{ maxHeight: `${height}` }}
      >
        <Row>
          <Col span={media ? 18 : 24}>
            <div className={styles.accordion__content_text}>
              {content}
            </div>
          </Col>
          <Col span={media ? 6 : 0}>
            <div style={{"width": "200px"}}>
              {media && <Img fluid={props.media.childImageSharp.fluid} />}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  media: PropTypes.object     // will return an image object, should be rendered by graphql
};

export default Accordion;
