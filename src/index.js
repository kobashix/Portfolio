import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { SpeedInsights } from "@vercel/speed-insights/next"

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
