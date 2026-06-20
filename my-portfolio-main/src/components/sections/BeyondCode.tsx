import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUsers, FaBullhorn } from 'react-icons/fa';

interface SectionProps {
    isOpen: boolean;
    onToggle: () => void;
}

const BeyondCode: React.FC<SectionProps> = ({ isOpen, onToggle }) => {
    return (
        <motion.section
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="w-[95%] md:w-[85%] lg:w-[75%] relative bg-custom-purple border-4 border-l-0 border-black shadow-neo"
        >

            <div className="flex items-center justify-between px-6 md:px-10 py-6">
                <h2 className="text-3xl md:text-4xl font-shrikhand text-black uppercase tracking-wide">BEYOND CODE</h2>
                <button
                    onClick={onToggle}
                    className="bg-white text-black px-6 py-2 font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider"
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
                        <div className="px-6 md:px-10 pb-10 pt-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto relative z-10">
                                <div className="bg-white border-4 border-black p-8 border-b-8 border-r-8 hover:-translate-y-1 transition-all relative shadow-neo mt-4">
                                    <div className="absolute -top-10 -right-6 w-32 h-32 bg-custom-yellow rounded-full border-4 border-black overflow-hidden shadow-neo z-20">
                                        <img src="/Anterix.jpeg" alt="Anterix" className="w-full h-full object-cover" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <FaUsers className="text-4xl text-custom-red" />
                                            <h3 className="text-3xl font-shrikhand">Tech Co-Lead</h3>
                                        </div>
                                        <p className="font-bold text-xl mb-4">@ Anterix Club</p>
                                        <p className="text-sm font-mono bg-custom-blue text-black font-bold inline-block px-3 py-1 border-2 border-black rounded-full mb-6 shadow-sm">
                                            2026 - Present
                                        </p>
                                        <p className="text-base font-medium leading-relaxed bg-gray-100 p-4 rounded-2xl border-2 border-black">
                                            Recruited, mentored, and managed <span className="font-bold bg-custom-yellow px-1 border border-black">8 Developers</span> across 2 full-stack projects.
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

export default BeyondCode;
