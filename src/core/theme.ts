export const theme = {
  color: {
    white: "#FFFFFF",
    gray: "#8C8787",
    scorpion: "#565656",
    codGray: "#131313",
    mineShaft: "#2F2F2F",
    black: "#000000",
  },
  breakpoint: {
    desktop: 1200,
    laptop: 1024,
    tablet: 768,
    mobile: 480,
  },
  gapBetweenTiles: {
    wideScreen: {
      px: 12,
    },
    desktop: {
      vw: 1,
    },
    tablet: {
      vw: 1.8,
    },
    mobile: {
      vw: 2.6,
    },
  },
} as const;
