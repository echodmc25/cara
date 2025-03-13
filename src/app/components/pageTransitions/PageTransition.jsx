'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/app/assets/images/carabliess-logo.png";

const PageTransition = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    const startLoading = () => {
      setLoading(true);
      setProgress(0);

      let value = 0;
      interval = setInterval(() => {
        value += 10; // Increases faster
        setProgress(value);
        if (value >= 90) {
          clearInterval(interval);
        }
      }, 200); // Faster loading animation
    };

    const handleComplete = () => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Short delay before hiding
    };

    router.events?.on("routeChangeStart", startLoading);
    router.events?.on("routeChangeComplete", handleComplete);
    router.events?.on("routeChangeError", handleComplete);

    return () => {
      router.events?.off("routeChangeStart", startLoading);
      router.events?.off("routeChangeComplete", handleComplete);
      router.events?.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="transition"
            className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Rotating Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Image src={Logo} alt="Logo" width={100} height={100} />
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="w-64 h-1 bg-gray-700 mt-4 relative overflow-hidden rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="h-full bg-white absolute top-0 left-0"
                style={{ width: `${progress}%` }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </motion.div>

            {/* Loading Percentage */}
            <motion.p
              className="text-white text-lg mt-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {progress}%
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};

export default PageTransition;
