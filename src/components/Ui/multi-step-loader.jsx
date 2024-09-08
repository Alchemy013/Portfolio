import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const CheckFilled = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-6 h-6", className)}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const LoaderCore = ({ text }) => (
  <div className="flex items-center justify-center h-full">
    <motion.div
      className="text-left flex gap-2 mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CheckFilled className="text-black dark:text-white" />
      <span className="text-black dark:text-white">{text}</span>
    </motion.div>
  </div>
);

export const MultiStepLoader = ({ text, loading }) => (
  <AnimatePresence>
    {loading && (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center bg-black backdrop-blur-2xl"
      >
        <div className="h-96 relative">
          <LoaderCore text={text} />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
