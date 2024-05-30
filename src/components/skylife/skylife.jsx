/* eslint-disable jsx-a11y/alt-text */
/* global lottie */
import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";


import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";

import "./main.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { assetsObj } from "../../services/images";

const SkyLife = () => {
  const HeadingContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  });

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [muted1, setMuted1] = useState(true);
  const [muted2, setMuted2] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef1.current.play();
        } else {
          videoRef1.current.pause();
        }
      });
    }, options);

    observer1.observe(videoRef1.current);

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef2.current.play();
        } else {
          videoRef2.current.pause();
        }
      });
    }, options);

    observer2.observe(videoRef2.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  const toggleMute1 = () => {
    const video1 = videoRef1.current;
    setMuted1(!video1.muted);
  };

  const toggleMute2 = () => {
    const video2 = videoRef2.current;
    setMuted2(!video2.muted);
  };

  useEffect(() => {
    const container = document.getElementById("animation-container");
    const svgContainers = document.querySelectorAll(".svg-container");
    const quoteContainers = document.querySelectorAll(".quote-container");
    let svgIndex = 0;
    let quoteIndex = 0;

    const fadeSVGs = () => {
      const prevSvgIndex = svgIndex;
      svgIndex = (svgIndex + 1) % svgContainers.length;
      svgContainers[prevSvgIndex].classList.remove("active");
      svgContainers[svgIndex].classList.add("active");
      setTimeout(fadeSVGs, 6000); // Change interval here (in milliseconds)
    };

    const fadeQuotes = () => {
      const prevQuoteIndex = quoteIndex;
      quoteIndex = (quoteIndex + 1) % quoteContainers.length;
      quoteContainers[prevQuoteIndex].classList.remove("show");
      quoteContainers[quoteIndex].classList.add("show");
      setTimeout(fadeQuotes, 6000); // Change interval here (in milliseconds)
    };

    fadeSVGs();
    fadeQuotes();

    const fetchData = async () => {
      try {
        let url =
          "https://affirmate.app/wp-content/uploads/2024/05/Affirmate-1.json";

        const response = await fetch(url, {
          headers: {
            accept: "application/json",
            "User-agent": "learning app",
          },
        });

        const jsonData = await response.json();
        const container = document.getElementById("animation-container");
        if (!container) {
          console.error("Container element not found");
          return;
        }
        lottie.loadAnimation({
          container: container,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: jsonData,
          width: 200,
        });
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    };

    fetchData();

    return () => {
      lottie.destroy();
    };
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    window.location.href = 'https://affirmate.app/app/trial-signup';
    sessionStorage.setItem('pageType',2)
  };

  return (
    <>
      <div className="main-box">
        <div className="gradient-container">
          <div className="gradient-container2">
            <div style={{ textAlign: "center" }}>
              <HeadingContainer>
                <Link
                  href="https://affirmate.app/"
                  style={{
                    textDecoration: "none",
                    color: "#FFFFFF",
                    fontWeight: 300,
                    fontSize: "28px",
                    marginBottom: "-9px",
                  }}
                >
                  AFFIRMATE
                </Link>
                <Link
                  href="https://affirmate.app/"
                  style={{
                    textDecoration: "none",
                    color: "#ffffffe6",
                    lineHeight: 1.77143,
                    fontWeight: 200,
                    fontSize: "18px",
                    wordWrap: "nowrap",
                    "@media (max-width: 334px)": {
                      fontSize: "17px",
                    },
                  }}
                  target="_blank"
                >
                  you are what you repeat
                </Link>
              </HeadingContainer>

              <Container
                maxWidth="lg"
                sx={{
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  marginBlock: { xs: "255px", sm: "10px" },
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  sx={{ mb: { xs: 5, sm: 5 } }}
                >
                  <Grid item xs={11} sm={6} md={5} lg={5} xl={7}>
                    <Box
                      component="img"
                      src={assetsObj.twoMobile}
                      alt="mobile group"
                      className="mobile-grp"
                      sx={{ width: { xs: "100%", sm: "100%" }, margin: "auto" }}
                    />
                  </Grid>

                  <Grid item xs={11} sm={5} md={5} lg={5} xl={5}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: { xs: "column" },
                        gap: { xs: 2, sm: 2, md: 2, xl: 6 },
                      }}
                    >
                      <Box
                        sx={{
                          marginBlock: "20px",
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            textAlign: { xs: "center", sm: "left" },
                            color: "#FFFFFF",
                            fontWeight: 400,
                            lineHeight: 1.1,
                            // fontSize: { xs: "12px", sm: "16px", md: "24px", lg: '30px', xl: '30px' },
                            fontSize: "calc(100vw*0.022) !important",
                            "@media (max-width: 600px)": {
                              fontSize: "calc(100vw*0.053) !important",
                            },
                            "@media (min-width: 1200px)": {
                              fontSize: "calc(100vw*0.020) !important",
                            },
                            "@media (min-width: 1500px)": {
                              fontSize: "calc(100vw*0.016) !important",
                            },
                          }}
                        >
                          Discover the Benefits of Affirmate, <br /> a Powerful
                          Mindfulness Tool for Daily Affirmations
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: {
                            xs: "center",
                            sm: "flex-end",
                            md: "center",
                          },
                          gap: { xs: 2, sm: 6, lg: 4 },
                          flexDirection: { xs: "column", sm: "row" },
                        }}
                      >
                        <Box
                          component="img"
                          src={assetsObj.discount}
                          // className="mobile-grp"
                          sx={{
                            width: {
                              xs: "90%",
                              sm: "40%",
                              md: "40%",
                              lg: "42%",
                              xl: "55%",
                            },
                          }}
                        />

                        <Box
                          sx={{
                            width: {
                              xs: "100%",
                              sm: "40%",
                              md: "45%",
                              lg: "50%",
                              xl: "70%",
                            },
                          }}
                        >
                          <img
                            // className="mx-3"
                            src={assetsObj.heart}
                            alt="mobile group"
                          />
                          <Box
                            className="d-flex align-items-center justify-content-center gap-1"
                          // sx={{ mb: { xs: 2, sm: 8, md: 3, lg: 14 } }}
                          >
                            <Typography className="price-container {">
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontSize: {
                                    xs: "40px",
                                    sm: "20px",
                                    md: "30px",
                                    lg: "26px",
                                    xl: "32px",
                                  },
                                }}
                                className="price"
                              >
                                $29
                              </span>
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: "94px",
                                  sm: "54px",
                                  md: "66px",
                                  lg: "72px",
                                  xl: "84px",
                                },
                                color: "#fff",
                                fontFamily: "Montserrat",
                                fontWeight: 600,
                              }}
                            >
                              $19
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: "20px",
                                  sm: "14px",
                                  md: "16px",
                                  lg: "20px",
                                  xl: "20px",
                                },
                                color: "#fff",
                                fontFamily: "Montserrat",
                                fontWeight: 600,
                                // display: "block",
                                mt: 3
                              }}
                            >
                              /year
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sx={{ marginBlock: "20px" }}>
                    <Box>
                      <Button
                        disableRipple={true}
                        onClick={() => handleNavigate()}
                        variant="outlined"
                        sx={{
                          color: "#FFFFFF",
                          fontSize: {
                            xs: "13px",
                            sm: "8px",
                            md: "10px",
                            lg: "12px",
                            xl: "14px",
                          },
                          px: 6,
                          py: 1,
                          fontWeight: 600,
                          border: "1px solid #fff",
                          borderRadius: 10,
                          "&:hover": {
                            color: "#000",
                            backgroundColor: "#FFFFFF",
                            transition: "0.2s ease-in-out",
                            px: 6,
                            py: 1,
                          },
                        }}
                      >
                        Start 7-Day Free Trial
                      </Button>

                    </Box>
                    <Typography
                      sx={{
                        mt: { xs: 4, sm: 2 },
                        color: "#FFFFFF",
                        fontSize: {
                          xs: "14px",
                          sm: "12px",
                          md: "14px",
                          lg: "14px",
                          xl: "16px",
                        },
                        whiteSpace: "nowrap",
                        fontWeight: 400,
                        "@media (max-width: 350px)": {
                          fontSize: {
                            xs: "12px",
                          },
                        },
                      }}
                    >
                      Create Your Free Account - No Credit Card Required
                    </Typography>
                  </Grid>
                </Grid>
              </Container>

              <Container maxWidth="lg" sx={{ padding: { xs: 0 } }}>
                <Box
                  className="moon-box"
                  sx={{
                    backgroundImage: `url(${assetsObj.moon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: {
                      xl: "80% 90%",
                      lg: "80% 90%",
                      md: "90% 90%",
                      xs: "cover",
                    },
                    height: { xl: 800, lg: 800, md: 800, xs: "100%" },
                    backgroundPosition: "center",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ color: "#fff", mb: 2, fontWeight: 500 }}
                  >
                    Only 90-seconds a day
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      mb: 4,
                      fontWeight: 400,
                      padding: 0.5,
                      maxWidth: "60%",
                      "@media (max-width: 450px)": {
                        maxWidth: "90%",
                      },
                    }}
                  >
                    Affirmate is a powerful mindfulness tool connecting the body
                    and mind in a 90-second practice that easily fits into your
                    daily routine
                  </Typography>
                  <Grid container justifyContent="center" alignItems="center">
                    <Grid
                      container
                      spacing={2}
                      item
                      xs={11}
                      sm={10}
                      md={8}
                      xl={8}
                    >
                      <Grid item xs={12} sm={6} md={4}>
                        <img
                          className="custom_card"
                          src={assetsObj.card1}
                          alt="flower"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <img
                          className="custom_card"
                          src={assetsObj.card2}
                          alt="flower"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <img
                          className="custom_card"
                          src={assetsObj.card3}
                          alt="flower"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Button
                    disableRipple={true}
                    onClick={() => handleNavigate()}
                    variant="outlined"
                    sx={{
                      mt: 4,
                      color: "#FFFFFF",
                      fontSize: {
                        xs: "13px",
                        sm: "8px",
                        md: "10px",
                        lg: "12px",
                        xl: "14px",
                      },
                      px: 6,
                      py: 1,
                      fontWeight: 600,
                      border: "1px solid #fff",
                      borderRadius: 10,
                      "&:hover": {
                        color: "#000",
                        backgroundColor: "#FFFFFF",
                        transition: "0.2s ease-in-out",
                        px: 6,
                        py: 1,
                      },
                    }}
                  >
                    Start 7-Day Free Trial
                  </Button>
                  <Typography
                    sx={{
                      mt: { xs: 4, sm: 2 },
                      color: "#FFFFFF",
                      fontSize: {
                        xs: "14px",
                        sm: "12px",
                        md: "14px",
                        lg: "14px",
                        xl: "16px",
                      },
                      whiteSpace: "nowrap",
                      fontWeight: 400,
                      "@media (max-width: 350px)": {
                        fontSize: {
                          xs: "12px",
                        },
                      },
                    }}
                  >
                    Create Your Free Account - No Credit Card Required
                  </Typography>
                </Box>
              </Container>

              <Box>
                <div>
                  <style>
                    {`
          #muteButton {
              position: absolute;
              right: 20px;
              background-color: transparent;
              width: 50px;
              top: 100px;    
              height: 50px;
              border: none;
              user-select: none;
          }

          #muteButton2 {
              position: absolute;
              right: 20px;
              background-color: transparent;
              width: 40px;
              height: 50px;
              border: none;
              user-select: none;
          }

          @media screen and (max-width:480px) {
              .web {
                  display: none;
              }
          }
          @media screen and (min-width:480px) {
              .mob {
                  display: none;
              }
          }
        `}
                  </style>
                  <div className="web">
                    <video
                      ref={videoRef1}
                      loop
                      muted={muted1}
                      style={{ width: "100%" }}
                      className="video-element"
                    >
                      <source
                        src="https://affirmate.app/wp-content/uploads/2024/03/Horizontal-full-video.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <button onClick={toggleMute1} className="mute-button">
                      {muted1 ? (
                        <div style={{ background: "transparent", }}>

                          <img
                            style={{ background: "transparent", backgroundColor: "transparent" }}
                            src={assetsObj.mutebutton}
                            alt="mobile group"
                          />
                        </div>

                      ) : (
                        <div>
                          <img
                            // className="mx-3"
                            src={assetsObj.unmutebutton}
                            alt="mobile group"
                          />
                        </div>
                      )}
                    </button>


                  </div>

                  <div className="mob">
                    <video
                      ref={videoRef2}
                      loop
                      muted={muted2}
                      style={{ width: "100%" }}
                    >
                      <source
                        src="https://affirmate.app/wp-content/uploads/2024/03/Vertical-full-video-1.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <button onClick={toggleMute2} className="mute-button-mob">
                      {muted2 ? (
                        <div>
                          <img
                            // className="mx-3"
                            src={assetsObj.mutebutton}
                            alt="mobile group"
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            // className="mx-3"
                            src={assetsObj.unmutebutton}
                            alt="mobile group"
                          />
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </Box>
              <Box>
                <Typography
                  sx={{
                    lineHeight: 1.5,
                    fontWeight: 300,
                    color: "white",
                    maxWidth: " calc(100vw*0.63) !important",
                    margin: "auto",
                    mt: 8,
                    "@media (max-width: 600px)": {
                      maxWidth: "calc(100vw*0.97) !important",
                    },
                  }}
                >
                  The app integrates your favorite personal items into our
                  unique practice, transforming them into a powerful reminder
                  that helps maintain a mindful state throughout the day. <br /> In
                  other words, you wear your intention.
                </Typography>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 30,
                  marginBottom: 30
                }}
              >
                <Box>
                  <div>
                    <style>
                      {`
            /* Common Styles */
            .svg-container {
                max-width: 60vw;
                position: absolute;
                top: 90%;
                left: 50%;
                transform: translate(-50%, -90%);
                opacity: 0;
                transition: opacity 1s ease-in-out;
            }

            .svg-container.active {
                opacity: 1;
            }

            .quote-container {
                width: 80vw;
                text-align: center;
                position: absolute;
                top: calc(50% + 100px);
                left: 50%;
                transform: translateX(-50%);
                opacity: 0;
                transition: opacity 1s ease-in-out;
                margin-block: 10px

            }

            .quote-container.show {
                opacity: 1;
            }

            .userquotes {
                font-family: Raleway;
                font-size: 16px;
                font-weight: 500;
                line-height: 28px;
                color: #fff;
            }

            .username {
                font-family: Raleway;
                font-size: 16px;
                font-weight: 500;
                line-height: 28px;
                color: #959595;
            }

            .lottie {
                position: absolute;
                top: calc(50% + -150px);
                left: 50%;
                transform: translateX(-50%);
            }
          `}
                    </style>

                    <Container
                      id="animation-container"
                      className="lottie"
                      sx={{
                        width: "250px",
                        height: "200px",
                      }}
                    ></Container>

                    <div className="svg-container fade-container">
                      <object
                        type="image/svg+xml"
                        data="https://affirmate.app/wp-content/uploads/2024/05/Frame-1.svg"
                      ></object>
                    </div>
                    <div className="svg-container fade-container">
                      <object
                        type="image/svg+xml"
                        data="https://affirmate.app/wp-content/uploads/2024/05/Frame-2.svg"
                      ></object>
                    </div>
                    <div className="svg-container fade-container">
                      <object
                        type="image/svg+xml"
                        data="https://affirmate.app/wp-content/uploads/2024/05/Frame-3.svg"
                      ></object>
                    </div>
                    <div className="svg-container fade-container">
                      <object
                        type="image/svg+xml"
                        data="https://affirmate.app/wp-content/uploads/2024/05/Frame-4.svg"
                      ></object>
                    </div>
                    <div className="svg-container fade-container">
                      <object
                        type="image/svg+xml"
                        data="https://affirmate.app/wp-content/uploads/2024/05/Frame-5.svg"
                      ></object>
                    </div>
                    <div className="svg-container fade-container">
                      <object
                        type="image/svg+xml"
                        data="https://affirmate.app/wp-content/uploads/2024/05/Frame-6.svg"
                      ></object>
                    </div>
                    <div className="svg-container fade-container">
                      <object
                        type="image/svg+xml"
                        data="https://affirmate.app/wp-content/uploads/2024/05/Frame-7.svg"
                      ></object>
                    </div>
                    <div className="svg-container fade-container">
                      <object
                        type="image/svg+xml"
                        data="https://affirmate.app/wp-content/uploads/2024/05/Frame-8.svg"
                      ></object>
                    </div>
                    <div className="svg-container fade-container">
                      <object
                        type="image/svg+xml"
                        data="https://affirmate.app/wp-content/uploads/2024/05/Frame-9.svg"
                      ></object>
                    </div>

                    {/* Quotes */}
                    <div className="quote-container fade-container">
                      <span className="fullquote">
                        <span className="userquotes">
                          "Affirmate feels like a magical portal. I absolutely
                          love the sounds, visuals, and how easy it is to fit
                          into my busy schedule."
                        </span>
                        <span className="username">- Olivia</span>
                      </span>
                    </div>
                    <div className="quote-container fade-container">
                      <span className="fullquote">
                        <span className="userquotes">
                          "I felt relaxed on many levels and having the feeling
                          anchored to my crystal is truly remarkable."
                        </span>
                        <span className="username">- Diane</span>
                      </span>
                    </div>
                    <div className="quote-container fade-container">
                      <span className="fullquote">
                        <span className="userquotes">
                          "It’s incredible how impactful this 90-second session
                          is."
                        </span>
                        <span className="username">- Liam</span>
                      </span>
                    </div>
                    <div className="quote-container fade-container">
                      <span className="fullquote">
                        <span className="userquotes">
                          "Love this app! What a great way to unwind, destress,
                          and practice mindfulness."
                        </span>
                        <span className="username">- Holly</span>
                      </span>
                    </div>
                    <div className="quote-container fade-container">
                      <span className="fullquote">
                        <span className="userquotes">
                          "I've always struggled with mindfulness and
                          meditation, yet this tool has somehow managed to
                          change my mindset where others could not."
                        </span>
                        <span className="username">- Daniel</span>
                      </span>
                    </div>
                    <div className="quote-container fade-container">
                      <span className="fullquote">
                        <span className="userquotes">
                          "Affirmate is such a special experience. I've been
                          feeling more positive and present since I started
                          using it daily."
                        </span>
                        <span className="username">- Kylie</span>
                      </span>
                    </div>
                    <div className="quote-container fade-container">
                      <span className="fullquote">
                        <span className="userquotes">
                          "The instrumentals are powerful, I immediately felt an
                          impact, like I was transitioning to another world."
                        </span>
                        <span className="username">- Noah</span>
                      </span>
                    </div>
                    <div className="quote-container fade-container">
                      <span className="fullquote">
                        <span className="userquotes">
                          "I really love the special connection it makes with my
                          engagement ring."
                        </span>
                        <span className="username">- Emma</span>
                      </span>
                    </div>
                    <div className="quote-container fade-container">
                      <span className="fullquote">
                        <span className="userquotes">
                          "I’ve been using Affirmate every day for the last 2
                          weeks and I already feel a positive change in my
                          mindset."
                        </span>
                        <span className="username">- Mia</span>
                      </span>
                    </div>
                    {/* Add more .quote-container divs for additional quotes */}
                  </div>
                </Box>
              </Box>

              <Box sx={{
                mt: 35,
                mb: 15,

              }}>
                <Button
                  disableRipple={true}
                  onClick={() => handleNavigate()}
                  variant="outlined"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: {
                      xs: "13px",
                      sm: "8px",
                      md: "10px",
                      lg: "12px",
                      xl: "14px",
                    },

                    px: 6,
                    py: 1,
                    fontWeight: 600,
                    border: "1px solid #fff",
                    borderRadius: 10,
                    "&:hover": {
                      color: "#000",
                      backgroundColor: "#FFFFFF",
                      transition: "0.2s ease-in-out",
                      px: 6,
                      py: 1,
                    },
                  }}
                >
                  Start 7-Day Free Trial
                </Button>
                <Typography
                  sx={{
                    mt: { xs: 4, sm: 2 },
                    color: "#FFFFFF",
                    fontSize: {
                      xs: "14px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                    },
                    whiteSpace: "nowrap",
                    fontWeight: 400,
                    "@media (max-width: 350px)": {
                      fontSize: {
                        xs: "12px",
                      },
                    },
                  }}
                >
                  Create Your Free Account - No Credit Card Required
                </Typography>

              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkyLife;
