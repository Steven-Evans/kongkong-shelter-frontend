import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { enquireScreen } from 'enquire-js';
import styles from "./hero.module.less";

const Hero = ({ children }) => {

  const data = useStaticQuery(graphql`
    query HeroQuery {
      strapiHeroImage {
        heroImageDesktop {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroImageMobile {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const [mobileImage, setMobileImage] = useState(false);

  useEffect(() => {
    enquireScreen((mobile) => {
      setMobileImage(mobile ? true : false);
    }, "only screen and (max-width: 575.99px)");
  });

  return (
    <div className={styles.container}>
      <Img 
        className={styles.image}
        fluid={
          mobileImage && data.strapiHeroImage.heroImageMobile ?
          data.strapiHeroImage.heroImageMobile.childImageSharp.fluid :
          data.strapiHeroImage.heroImageDesktop.childImageSharp.fluid 
        }
      />
      <div className={styles.bannerOverlay} />
      <div className={styles.textOverlay}>
        <h1 className={styles.heroText}>Welcome to our Dog Shelter!</h1>
        <h2 className={styles.heroTextSub}>We are a no-kill rescue shelter in South Korea, solely run by volunteers who are doing international work to find all of our 100+ dogs loving homes all over the world.</h2>
      </div>
    </div>
  );
}

export default Hero;