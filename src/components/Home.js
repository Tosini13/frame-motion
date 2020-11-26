import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const LinkStyled = motion.custom(styled(Link)``);

export const variantsButton = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.9)",
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ fontSize: 50, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          type: "spring",
          stiffness: 300,
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <LinkStyled animate={{ fontSize: 10, color: "red" }} to="/base">
        <motion.button variants={variantsButton} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </LinkStyled>
    </motion.div>
  );
};

export default Home;
