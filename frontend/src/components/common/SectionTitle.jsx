import { motion } from "framer-motion";

const SectionTitle = ({
  subtitle,
  title,
  description,
  center = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`
        mb-16
        ${center ? "text-center" : ""}
      `}
    >

      {/* SUBTITLE */}

      <p
        className="
          text-primaryGreen
          uppercase
          tracking-[4px]
          font-semibold
          mb-4
        "
      >
        {subtitle}
      </p>

      {/* TITLE */}

      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          leading-tight
          text-darkNavy
          mb-6
        "
      >
        {title}
      </h2>

      {/* DESCRIPTION */}

      <p
        className="
          text-slate-500
          text-lg
          leading-relaxed
          max-w-3xl
          mx-auto
        "
      >
        {description}
      </p>

    </motion.div>
  );
};

export default SectionTitle;