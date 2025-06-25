"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface Image {
  id: number
  src: string
  alt: string
}

interface Carousel3DProps {
  images: Image[]
  autoplayInterval?: number
  className?: string
}

const Carousel3D: React.FC<Carousel3DProps> = ({ images, autoplayInterval = 4000, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Enhanced autoplay with transition state
  useEffect(() => {
    if (!isAutoplay || images.length <= 1) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsTransitioning(false)
      }, 100)
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoplay, images.length, autoplayInterval])

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 100)
  }

  const getVisibleImages = () => {
    const visibleImages = []
    const totalImages = images.length

    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + totalImages) % totalImages
      visibleImages.push({
        ...images[index],
        position: i,
        index: index,
      })
    }

    return visibleImages
  }

  // Responsive values based on screen size
  const getResponsiveValues = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth
      if (width < 640) {
        // Mobile
        return {
          translateX: 120,
          perspective: "600px",
          rotateY: -15,
          translateZ: { center: "0px", side: "-50px" },
          translateY: { center: "8px", side: "0px" },
        }
      } else if (width < 1024) {
        // Tablet
        return {
          translateX: 200,
          perspective: "800px",
          rotateY: -20,
          translateZ: { center: "0px", side: "-75px" },
          translateY: { center: "12px", side: "0px" },
        }
      }
    }
    // Desktop (default)
    return {
      translateX: 320,
      perspective: "1200px",
      rotateY: -25,
      translateZ: { center: "0px", side: "-100px" },
      translateY: { center: "16px", side: "0px" },
    }
  }

  const responsiveValues = getResponsiveValues()

  return (
    <div
      className={`relative w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-2xl lg:max-w-6xl h-48 sm:h-64 lg:h-96 flex items-center justify-center"
        style={{
          perspective: responsiveValues.perspective,
          perspectiveOrigin: "center center",
        }}
        onMouseEnter={() => setIsAutoplay(false)}
        onMouseLeave={() => setIsAutoplay(true)}
        // Touch events for mobile
        onTouchStart={() => setIsAutoplay(false)}
        onTouchEnd={() => setIsAutoplay(true)}
      >
        {getVisibleImages().map((image, idx) => {
          const { position } = image

          return (
            <div
              key={`${image.index}-${currentIndex}`}
              className={`absolute transition-all duration-1000 ease-out cursor-pointer transform-gpu group ${
                position === 0 ? "z-30" : "z-10"
              } ${isTransitioning ? "transition-duration-300" : ""}`}
              style={{
                transform: `
                  translateX(${position * responsiveValues.translateX}px) 
                  translateY(${position === 0 ? responsiveValues.translateY.center : responsiveValues.translateY.side}) 
                  translateZ(${position === 0 ? responsiveValues.translateZ.center : responsiveValues.translateZ.side}) 
                  rotateY(${position * responsiveValues.rotateY}deg)
                  ${position !== 0 ? `perspective(${responsiveValues.perspective}) rotateX(${position > 0 ? "2deg" : "-2deg"})` : ""}
                `,
                transformStyle: "preserve-3d",
                transformOrigin: position > 0 ? "left center" : position < 0 ? "right center" : "center center",
              }}
              onClick={() => position !== 0 && goToSlide(image.index)}
            >
              {/* Image Container with Book Effect and Flat Bottom */}
              <div
                className={`relative overflow-hidden shadow-2xl transition-all duration-1000 rounded-lg sm:rounded-xl group-hover:shadow-3xl ${
                  position === 0
                    ? "w-32 h-40 sm:w-48 sm:h-60 lg:w-72 lg:h-90 shadow-black/50 group-hover:shadow-purple-500/30"
                    : "w-28 h-36 sm:w-40 sm:h-52 lg:w-64 lg:h-80 shadow-black/70 group-hover:shadow-black/90"
                }`}
                style={{
                  clipPath:
                    position !== 0
                      ? position > 0
                        ? "polygon(0% 8%, 100% 0%, 100% 100%, 0% 100%)" // Right image - slant from top-left
                        : "polygon(0% 0%, 100% 8%, 100% 100%, 0% 100%)" // Left image - slant from top-right
                      : "none", // Center image - no slant
                  background:
                    position !== 0
                      ? "linear-gradient(to right, rgba(0,0,0,0.1) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.1) 100%)"
                      : "none",
                }}
              >
                {/* Animated glow for center image */}
                {position === 0 && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                )}

                {/* Book spine shadow for side images */}
                {position !== 0 && (
                  <div
                    className={`absolute inset-y-0 w-1 sm:w-2 bg-gradient-to-r transition-opacity duration-500 ${
                      position > 0
                        ? "left-0 from-black/30 to-transparent group-hover:from-black/50"
                        : "right-0 from-transparent to-black/30 group-hover:to-black/50"
                    } z-10`}
                  />
                )}

                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-all duration-1000 rounded-lg sm:rounded-xl group-hover:scale-105 ${
                    position === 0
                      ? "brightness-100 group-hover:brightness-110"
                      : "brightness-75 group-hover:brightness-85"
                  }`}
                  style={{
                    filter: position !== 0 ? "contrast(0.9) saturate(0.8)" : "none",
                  }}
                />

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/20 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg sm:rounded-xl" />

                {/* Overlay for non-center images */}
                {position !== 0 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 rounded-lg sm:rounded-xl transition-opacity duration-500 group-hover:from-black/10 group-hover:to-black/10" />
                )}

                {/* Highlight effect for center image */}
                {position === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-lg sm:rounded-xl transition-opacity duration-500 group-hover:to-white/10" />
                )}
              </div>

              {/* Reflection effect */}
              <div
                className={`absolute top-full left-0 w-full transition-all duration-1000 rounded-b-lg ${
                  position === 0
                    ? "h-8 sm:h-12 lg:h-20 opacity-30 group-hover:opacity-40"
                    : "h-6 sm:h-10 lg:h-16 opacity-20 group-hover:opacity-30"
                }`}
                style={{
                  background: `linear-gradient(to bottom, 
                    ${position === 0 ? "rgba(147,51,234,0.1)" : "rgba(255,255,255,0.1)"} 0%, 
                    transparent 70%
                  )`,
                  transform: "scaleY(-1)",
                  transformOrigin: "top",
                  filter: "blur(1px)",
                }}
              />
            </div>
          )
        })}
      </div>

      {/* Navigation dots for mobile */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:hidden">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-purple-500 w-6" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Touch indicators for mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-xs sm:hidden">
        Tap side images to navigate
      </div>
    </div>
  )
}

export default Carousel3D
