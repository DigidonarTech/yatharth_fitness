import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-darkNavy">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-white mb-6">
          Transform Yourself
        </h1>

        <p className="text-slate-300 text-lg mb-8">
          Yatharth Fitness Event Platform
        </p>

        <button className="primary-btn">
          Book Event
        </button>
      </motion.div>

    </div>
  );
};

export default Home;