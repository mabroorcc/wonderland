import React from "react";
import { motion } from 'framer-motion'

const Landingpage = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    margin: "0 1rem",
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.44)",
        position: "relative",
      }}
    >
      <nav
        style={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ height: "30%", marginLeft: "3rem" }}>
          <svg
            height="100%"
            viewBox="0 0 187 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.91992 45H0.0913086V0.887695H8.91992V18.5449H26.5464V0.887695H35.375V45H26.5464V27.3735H8.91992V45Z"
              fill="white"
            />
            <path
              d="M74.104 45H72.0737L68.813 40.478C68.0132 41.1958 67.1621 41.8726 66.2598 42.5083C65.3779 43.1235 64.4448 43.667 63.4604 44.1387C62.4761 44.5898 61.4609 44.9487 60.415 45.2153C59.3896 45.4819 58.3438 45.6152 57.2773 45.6152C54.96 45.6152 52.7759 45.2256 50.7251 44.4463C48.6948 43.667 46.9106 42.5391 45.3726 41.0625C43.855 39.5654 42.6553 37.7402 41.7734 35.5869C40.8916 33.4336 40.4507 30.9829 40.4507 28.2349C40.4507 25.6714 40.8916 23.3232 41.7734 21.1904C42.6553 19.0371 43.855 17.1914 45.3726 15.6533C46.9106 14.1152 48.6948 12.9258 50.7251 12.085C52.7759 11.2236 54.96 10.793 57.2773 10.793C58.3438 10.793 59.3999 10.9263 60.4458 11.1929C61.4917 11.4595 62.5068 11.8286 63.4912 12.3003C64.4756 12.772 65.4087 13.3257 66.2905 13.9614C67.1929 14.5972 68.0337 15.2842 68.813 16.0225L72.0737 12.1157H74.104V45ZM65.6445 28.2349C65.6445 27.0864 65.4189 25.979 64.9678 24.9126C64.5371 23.8257 63.9424 22.8721 63.1836 22.0518C62.4248 21.2109 61.5327 20.5444 60.5073 20.0522C59.5024 19.5396 58.4258 19.2832 57.2773 19.2832C56.1289 19.2832 55.042 19.478 54.0166 19.8677C53.0117 20.2573 52.1299 20.8315 51.3711 21.5903C50.6328 22.3491 50.0483 23.2925 49.6177 24.4204C49.187 25.5278 48.9717 26.7993 48.9717 28.2349C48.9717 29.6704 49.187 30.9521 49.6177 32.0801C50.0483 33.1875 50.6328 34.1206 51.3711 34.8794C52.1299 35.6382 53.0117 36.2124 54.0166 36.6021C55.042 36.9917 56.1289 37.1865 57.2773 37.1865C58.4258 37.1865 59.5024 36.9404 60.5073 36.4482C61.5327 35.9355 62.4248 35.269 63.1836 34.4487C63.9424 33.6079 64.5371 32.6543 64.9678 31.5879C65.4189 30.501 65.6445 29.3833 65.6445 28.2349Z"
              fill="white"
            />
            <path
              d="M88.9927 57.5508H80.5332V12.0542H82.5635L85.9165 16.0225C86.6753 15.3047 87.5059 14.6279 88.4082 13.9922C89.3105 13.3564 90.2437 12.813 91.2075 12.3618C92.1919 11.8901 93.207 11.521 94.2529 11.2544C95.2988 10.9878 96.355 10.8545 97.4214 10.8545C99.7388 10.8545 101.913 11.2749 103.943 12.1157C105.994 12.936 107.778 14.105 109.295 15.6226C110.833 17.1401 112.043 18.9756 112.925 21.1289C113.807 23.2617 114.248 25.6304 114.248 28.2349C114.248 30.9419 113.807 33.3823 112.925 35.5562C112.043 37.7095 110.833 39.5449 109.295 41.0625C107.778 42.5596 105.994 43.708 103.943 44.5078C101.913 45.3076 99.7388 45.7075 97.4214 45.7075C96.6831 45.7075 95.9448 45.6255 95.2065 45.4614C94.4888 45.2974 93.771 45.082 93.0532 44.8154C92.356 44.5283 91.6587 44.2104 90.9614 43.8618C90.2847 43.5132 89.6284 43.1543 88.9927 42.7852V57.5508ZM105.819 28.2349C105.819 26.8403 105.594 25.5894 105.143 24.4819C104.712 23.3745 104.117 22.4414 103.358 21.6826C102.6 20.9033 101.708 20.3086 100.682 19.8984C99.6567 19.4883 98.5698 19.2832 97.4214 19.2832C96.2729 19.2832 95.186 19.4883 94.1606 19.8984C93.1558 20.3086 92.2739 20.9033 91.5151 21.6826C90.7563 22.4414 90.1514 23.3745 89.7002 24.4819C89.2695 25.5894 89.0542 26.8403 89.0542 28.2349C89.0542 29.5679 89.2695 30.7881 89.7002 31.8955C90.1514 33.0029 90.7563 33.9463 91.5151 34.7256C92.2739 35.5049 93.1558 36.1099 94.1606 36.5405C95.186 36.9712 96.2729 37.1865 97.4214 37.1865C98.5698 37.1865 99.6567 36.9712 100.682 36.5405C101.708 36.1099 102.6 35.5049 103.358 34.7256C104.117 33.9463 104.712 33.0029 105.143 31.8955C105.594 30.7881 105.819 29.5679 105.819 28.2349Z"
              fill="white"
            />
            <path
              d="M127.383 57.5508H118.924V12.0542H120.954L124.307 16.0225C125.066 15.3047 125.896 14.6279 126.799 13.9922C127.701 13.3564 128.634 12.813 129.598 12.3618C130.583 11.8901 131.598 11.521 132.644 11.2544C133.689 10.9878 134.746 10.8545 135.812 10.8545C138.129 10.8545 140.303 11.2749 142.333 12.1157C144.384 12.936 146.168 14.105 147.686 15.6226C149.224 17.1401 150.434 18.9756 151.316 21.1289C152.198 23.2617 152.639 25.6304 152.639 28.2349C152.639 30.9419 152.198 33.3823 151.316 35.5562C150.434 37.7095 149.224 39.5449 147.686 41.0625C146.168 42.5596 144.384 43.708 142.333 44.5078C140.303 45.3076 138.129 45.7075 135.812 45.7075C135.074 45.7075 134.335 45.6255 133.597 45.4614C132.879 45.2974 132.162 45.082 131.444 44.8154C130.747 44.5283 130.049 44.2104 129.352 43.8618C128.675 43.5132 128.019 43.1543 127.383 42.7852V57.5508ZM144.21 28.2349C144.21 26.8403 143.984 25.5894 143.533 24.4819C143.103 23.3745 142.508 22.4414 141.749 21.6826C140.99 20.9033 140.098 20.3086 139.073 19.8984C138.047 19.4883 136.96 19.2832 135.812 19.2832C134.664 19.2832 133.577 19.4883 132.551 19.8984C131.546 20.3086 130.665 20.9033 129.906 21.6826C129.147 22.4414 128.542 23.3745 128.091 24.4819C127.66 25.5894 127.445 26.8403 127.445 28.2349C127.445 29.5679 127.66 30.7881 128.091 31.8955C128.542 33.0029 129.147 33.9463 129.906 34.7256C130.665 35.5049 131.546 36.1099 132.551 36.5405C133.577 36.9712 134.664 37.1865 135.812 37.1865C136.96 37.1865 138.047 36.9712 139.073 36.5405C140.098 36.1099 140.99 35.5049 141.749 34.7256C142.508 33.9463 143.103 33.0029 143.533 31.8955C143.984 30.7881 144.21 29.5679 144.21 28.2349Z"
              fill="white"
            />
            <path
              d="M165.251 57.5508V49.0913L169.927 49.1528C170.747 49.1528 171.537 49.0195 172.295 48.7529C173.054 48.4863 173.751 48.1172 174.387 47.6455C175.043 47.1738 175.618 46.6099 176.11 45.9536C176.602 45.3179 177.002 44.6206 177.31 43.8618C176.387 44.2515 175.443 44.6411 174.479 45.0308C173.536 45.4204 172.583 45.6152 171.619 45.6152C169.588 45.6152 167.681 45.2563 165.897 44.5386C164.113 43.8208 162.544 42.8057 161.19 41.4932C159.857 40.1602 158.801 38.5503 158.022 36.6636C157.263 34.7563 156.884 32.6235 156.884 30.2651V12.0542H165.251V30.2651C165.251 31.4341 165.415 32.4595 165.743 33.3413C166.092 34.2026 166.553 34.9307 167.127 35.5254C167.702 36.0996 168.368 36.5303 169.127 36.8174C169.906 37.1045 170.737 37.248 171.619 37.248C172.48 37.248 173.29 37.0532 174.049 36.6636C174.828 36.2534 175.505 35.7202 176.079 35.064C176.653 34.4077 177.104 33.6694 177.433 32.8491C177.761 32.0083 177.925 31.147 177.925 30.2651V12.0542H186.384V40.8472C186.364 43.1646 185.913 45.3384 185.031 47.3687C184.149 49.3989 182.939 51.1729 181.401 52.6904C179.883 54.208 178.109 55.4077 176.079 56.2896C174.049 57.1714 171.875 57.6123 169.558 57.6123L165.251 57.5508Z"
              fill="white"
            />
          </svg>
        </div>
        <motion.div
          whileHover={{ color: "black", backgroundColor: "white",scale:1.1}}
          style={{
            fontSize: "1.5rem",
            color: "white",
            marginRight: "3rem",
            backgroundColor: "#141414",
            padding: "1rem 3rem",
            borderRadius: "2rem",
            cursor: "pointer",
          }}
        >
          Sign up
        </motion.div>
      </nav>
      <h1
        style={{
          color: "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: "6rem",
        }}
      >
        Wonderland.
      </h1>
      <div
        style={{
          display: "flex",
          position: "absolute",
          bottom: "3%",
          right: "3%",
        }}
      >
        <a
          style={linkStyle}
          onClick={(e) => e.preventDefault()}
          target="blank"
          href="#"
        >
          Instagram
        </a>
        <a
          style={linkStyle}
          onClick={(e) => e.preventDefault()}
          target="blank"
          href="#"
        >
          Facebook
        </a>
        <a
          style={linkStyle}
          onClick={(e) => e.preventDefault()}
          target="blank"
          href="#"
        >
          Dribble
        </a>
      </div>
    </div>
  );
};

export default Landingpage;