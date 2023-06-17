import React, { useState, useEffect } from 'react';
import TypingComponent from './TypingComponent';
import { Fade } from 'react-awesome-reveal';
import { Parallax } from 'react-parallax';

const Banner = () => {
    const [currentText, setCurrentText] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentText((prevText) => (prevText + 1) % 3);
        }, 4000);

        return () => clearTimeout(timer);
    }, [currentText]);

    const bannerTexts = [
        {
            heading: "Speak the World",
            content: "Learn Languages, Expand Horizons"
        },
        {
            heading: "Language Mastery Starts Here",
            content: "Transform Your Communication Skills"
        },
        {
            heading: "Breaking Barriers through Language",
            content: "Learn, Adapt, Thrive"
        },
        {
            heading: "Unlock the World",
            content: "Learn Any Language, Anywhere"
        },
        {
            heading: "Discover the Power of Words",
            content: "Learn Languages, Unleash Potential"
        }
    ];

    return (
        <Parallax bgImage={'https://img.freepik.com/premium-photo/abstract-planet-against-background-flags-world_476363-2825.jpg?w=1060'} strength={500} className="min-h-[100vh] w-full" >

            {/* <div className="hero-overlay"></div> */}
            <Fade duration={2000} delay={300}>
                <div className="text-center py-5 md:py-10">
                    <div className="max-w-md banner-text mx-auto">
                        <h1 className="mb-3 text-5xl font-bold leading-relaxed">Speak the World</h1>
                        {/* <p className="mb-5 text-sm font-bold text-slate-500">{bannerTexts[currentText].content} </p> */}
                        <p className="mb-5 text-sm font-bold text-slate-500">
                            Learn Any Language and <TypingComponent /></p>
                        <button className="btn btn-primary my-10">Get Started</button>
                    </div>
                </div>
            </Fade>

        </Parallax>
    );
};

export default Banner;
