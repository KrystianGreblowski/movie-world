export const theme = {
  color: {
    white: "#FFFFFF",
    alto: "#DFDFDF",
    gray: "#8C8787",
    scorpion: "#565656",
    mineShaft: "#3E3E3E",
    mineShaftDark: "#212121",
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
