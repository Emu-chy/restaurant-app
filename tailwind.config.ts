import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        spin: 'spin 3s linear infinite', // You can adjust the duration and timing function
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      fontFamily: {
        body: ["var(--noto-sans)"],
        signature: ["var(--lobster)"],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        "extra-bold": "900",
      },
      container: {
        center: true,
        screens: {
          DEFAULT: "1440px",
          xl: "1140px",
          lg: "992px",
          md: "769px",
        },
      },
      colors: {
        primary: "#034693",
        secondary: "#ca3d26",
        primaryText: "#31333f",
        brandDark: "#FECACA",
        dark: "#1e1e1e",
        light: "#f5f5f5",
      },
      backgroundImage: {
        howToOrder: "url(/images/order-food.jpg)",
        bottomBanner: "url(/images/bottom-banner.jpg)",
        specialities: "url(https://x-grouprestaurant.com/frontend/images/xinxian-restaurant.png)",
        aboutUsBanner:
          "url(https://img.freepik.com/free-photo/group-friends-eating-restaurant_23-2148006589.jpg?t=st=1719159448~exp=1719163048~hmac=d64f218e789f778dda47342955a580a493ccf4c4851ecbea9178b3727b0def1a&w=1640)",
        ourMdBanner:
          "url(https://img.freepik.com/free-photo/man-enjoying-city-view_1098-21136.jpg?t=st=1719253068~exp=1719256668~hmac=7cd96f39c5780086f31ddf28deb8dda8eea6b1859172e4d093fae31148acbc84&w=1380)",
        restaurants:
          "url(https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?t=st=1719595478~exp=1719599078~hmac=0d8319f7a0e1f336b5ffcdfb55efd101ff1d26800ec2e02f0b03813120284b0a&w=996)",
        reservations:
          "url(https://images.pexels.com/photos/19766948/pexels-photo-19766948/free-photo-of-reserved-restaurant-table.jpeg)",
        contactUs:
          "url(https://images.pexels.com/photos/2098134/pexels-photo-2098134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        loginPage:
          "url(https://images.pexels.com/photos/2487438/pexels-photo-2487438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      },
      
    },
  },
  plugins: [],
};
export default config;
