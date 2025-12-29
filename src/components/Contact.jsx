// Fixed Contact.jsx
import React from "react";
import {CONTACT} from "../constants";
import {motion} from "framer-motion";

export default function Contact(){
    return(
        <div className="border-b border-neutral-900 pb-16 lg:pb-24">
            <motion.h1 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:-100}}
                transition={{duration:0.5}}
                className="my-16 lg:my-20 text-center text-4xl lg:text-5xl"
            >
                Contact
            </motion.h1>
            
            <div className="text-center tracking-tighter max-w-2xl mx-auto">
                <motion.p 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className="my-4 text-base sm:text-lg"
                >
                    {CONTACT.address}
                </motion.p>
                <motion.p 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className="my-4 text-base sm:text-lg"
                >
                    {CONTACT.phoneNo}
                </motion.p>
                <div className="space-y-2 text-base sm:text-lg">
                    <a href={`mailto:${CONTACT.email1}`} className="block text-cyan-400 hover:underline">
                        {CONTACT.email1}
                    </a>
                    <a href={`mailto:${CONTACT.email2}`} className="block text-cyan-400 hover:underline">
                        {CONTACT.email2}
                    </a>
                </div>
            </div>
        </div>
    );
}