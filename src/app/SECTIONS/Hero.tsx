"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
	const [VideoSrc, setVideoSrc] = useState("/assets/videos/hero.mp4");
	useEffect(() => {
		const resizeHandler = () => {
			if (window.innerWidth > 768) {
				setVideoSrc("/assets/videos/hero.mp4");
			} else {
				setVideoSrc("/assets/videos/smallHero.mp4");
			}
		};
		window.addEventListener("resize", resizeHandler);
		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, []);

	useGSAP(() => {}, []);
	return (
		<div className="relative flex flex-col items-center gap-8 justify-center min-w-full min-h-screen bg-black text-white">
			<div>
				<h3 className="text-gray">iphone 15 pro</h3>
			</div>
			<div>
				<video autoPlay muted playsInline={true} loop key={VideoSrc}>
					<source src={VideoSrc} type="video/mp4" />
				</video>
			</div>
		</div>
	);
};

export default Hero;
