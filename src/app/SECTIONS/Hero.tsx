"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
	const [VideoSrc, setVideoSrc] = useState("/assets/videos/hero.mp4");

	useEffect(() => {
		if (window.innerWidth < 768) {
			setVideoSrc("/assets/videos/smallHero.mp4");
		}
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

	useGSAP(() => {
		gsap.to("#itemTitle", { opacity: 1, y: -5, duration: 0.75 });
		gsap.to("#videoContainer", {
			opacity: 1,
			y: -5,
			duration: 0.75,
			delay: 0.75,
		});
		gsap.to("#cta", { opacity: 1, y: -5, duration: 0.75, delay: 1.5 });
	}, []);

	return (
		<div className="relative flex flex-col items-center gap-8 justify-center min-w-full min-h-screen bg-black text-white">
			<div id="itemTitle" className="opacity-0">
				<h3 className="text-gray font-bold text-3xl">Iphone 15 pro</h3>
			</div>
			<div id="videoContainer" className="opacity-0">
				<video autoPlay muted playsInline={true} loop key={VideoSrc}>
					<source src={VideoSrc} type="video/mp4" />
				</video>
			</div>
			<div id="cta" className=" opacity-0 text-center">
				<button className="px-4 py-2 my-4 bg-blue rounded-2xl hover:bg-black hover:text-blue border border-blue transition-colors uppercase">
					buy now
				</button>
				<p className="text-gray">From &#36;199 /month</p>
			</div>
		</div>
	);
};

export default Hero;
