import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Coding: React.FC<SectionProps> = ({ isOpen, onToggle }) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="w-[95%] md:w-[85%] lg:w-[75%] ml-auto relative bg-custom-yellow border-4 border-r-0 border-black shadow-neo"
    >

      <div className="flex items-center justify-between px-6 md:px-10 py-6">
        <h2 className="text-3xl md:text-4xl font-shrikhand text-black uppercase tracking-wide">CODING</h2>
        <button
          onClick={onToggle}
          className="bg-black text-custom-yellow px-6 py-2 font-bold border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider"
        >
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-10 pb-10">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white border-4 border-black p-8 border-b-8 border-r-8 hover:-translate-y-1 transition-all flex flex-col sm:flex-row items-center gap-6 shadow-neo">
                  <div className="bg-black p-6 rounded-full border-4 border-custom-yellow flex-shrink-0">
                    <span className="text-6xl">⚔️</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-3xl font-shrikhand text-green-700 mb-2">Grinding LeetCode</h3>
                    <p className="font-bold text-xl mb-3">
                    Current Rating: 1513
                    </p>
                    <p className="text-base font-medium bg-gray-100 p-3 border-2 border-black inline-block mb-3 shadow-[4px_4px_0_rgba(0,0,0,1)]">
                      <span className="text-custom-red font-bold underline decoration-custom-red">200+ DSA problems solved and still solving.</span>
                    </p>
                    <p className="font-mono text-sm font-bold bg-custom-blue text-black p-2 border-2 border-black w-fit shadow-[4px_4px_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
                      🏆 Rank 3757 in very first Weekly Contest 506 out of 37k+ participants
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 md:px-10 pb-10">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white border-4 border-black p-8 border-b-8 border-r-8 hover:-translate-y-1 transition-all flex flex-col sm:flex-row items-center gap-6 shadow-neo">
                  <div className="bg-black p-6 rounded-full border-4 border-custom-yellow flex-shrink-0">
                    <span className="text-6xl">⚔️</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-3xl font-shrikhand text-green-700 mb-2">Codeforces</h3>
                    <p className="font-bold text-xl mb-3">
                    Current Rating: ...
                    </p>
                    <p className="text-base font-medium bg-gray-100 p-3 border-2 border-black inline-block mb-3 shadow-[4px_4px_0_rgba(0,0,0,1)]">
                      <span className="text-custom-red font-bold underline decoration-custom-red">Will soon reach 1500+ rating.</span>
                    </p>
                    <p className="font-mono text-sm font-bold bg-custom-blue text-black p-2 border-2 border-black w-fit shadow-[4px_4px_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
                      Will soon make a mark on Codeforces!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Coding;
