import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { variantSlideIn } from "./Base";

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={variantSlideIn}
      initial="hidden"
      animate="visible"
    >
      <h2 exit={{ y: -100 }}>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
