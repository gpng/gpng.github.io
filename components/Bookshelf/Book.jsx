import Image from "next/legacy/image";
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import seedrandom from 'seedrandom';

const PATTERNS = ['argyle', 'tartan'];
const COLORS = [
  'maroon',
  'darkgreen',
  'darkolivegreen',
  'brown',
  'saddlebrown',
  'sienna',
  'midnightblue',
];
const MAX_HEIGHT = 280;
const MIN_HEIGHT = 220;

const generateBookDetails = (title, author) => {
  const randomNumber = new seedrandom(title)();

  const height = Math.floor(randomNumber * (MAX_HEIGHT - MIN_HEIGHT) + MIN_HEIGHT);
  const pattern = PATTERNS[Math.floor(randomNumber * PATTERNS.length)];
  const color = COLORS[Math.floor(randomNumber * COLORS.length)];
  const initials = author
    .split(' ')
    .map((name) => name[0])
    .join('');

  return {
    height,
    pattern,
    color,
    initials,
  };
};

const Book = ({ title, coverImageUrl, author }) => {
  // don't load all images, only load on hover
  // set default to true to enable, disabled now because it's slow,
  // and still under the open library rate limit of 100 calls per 5 min
  const [loadImage, setLoadImage] = useState(true);

  const { height, pattern, color, initials } = useMemo(
    () => generateBookDetails(title, author),
    [title, author],
  );

  const handleMouseEnter = () => {
    setLoadImage(true);
  };

  return (
    <div>
      <div className="book" onMouseEnter={handleMouseEnter}>
        <div
          className={`side spine pattern--${pattern}`}
          style={{
            backgroundColor: color,
            height: `${height}px`,
            top: `${MAX_HEIGHT - height}px`,
          }}
        >
          <span className="spine-title">{title}</span>
          <span className="spine-author">{initials}</span>
        </div>
        <div
          className="side top"
          style={{
            top: `${MAX_HEIGHT - height}px`,
          }}
        />
        <div
          className="side cover"
          style={{
            height: `${height}px`,
            top: `${MAX_HEIGHT - height}px`,
          }}
        >
          {loadImage && <Image src={coverImageUrl} alt={title} layout="fill" />}
        </div>
      </div>
      <style jsx>{`
        .book {
          width: 50px;
          height: 280px;
          position: relative;
          transform-style: preserve-3d;
          transform: translateZ(0) rotateY(0);
          transition: transform 1s;
        }

        .side {
          position: absolute;
          border: 2px solid black;
          border-radius: 3px;
          font-weight: bold;
          color: black;
          text-align: center;
          transform-origin: center left;
        }

        .spine {
          position: relative;
          width: 50px;
          height: 280px;
          /* Patterns from: https://projects.verou.me/css3patterns/ */
          transform: rotateY(0deg) translateZ(0px);
          background-size: 70px 120px;
        }

        .spine-title {
          margin: 8px 2px 2px 2px;
          position: absolute;
          top: 0px;
          left: 0px;
          font-size: 12px;
          color: gold;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          text-align: left;
        }

        .spine-author {
          position: absolute;
          color: goldenrod;
          bottom: 0px;
          left: 20%;
        }

        .top {
          width: 50px;
          height: 190px;
          top: -2px;
          background-image: linear-gradient(90deg, white 90%, gray 10%);
          background-size: 5px 5px;
          transform: rotateX(90deg) translateZ(95px) translateY(-95px);
        }

        .cover {
          width: 190px;
          height: 280px;
          top: 0px;
          left: 50px;
          transform: rotateY(90deg) translateZ(0);
          transition: transform 1s;
          background: white;
        }

        .cover > img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .book:hover {
          z-index: 1;
          transform: rotateX(-25deg) rotateY(-40deg) rotateZ(-15deg) translateY(50px)
            translateX(-30px);
        }

        .pattern--argyle {
          background-image: repeating-linear-gradient(
              120deg,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px,
              transparent 60px
            ),
            repeating-linear-gradient(
              60deg,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px,
              transparent 60px
            ),
            linear-gradient(
              60deg,
              rgba(0, 0, 0, 0.1) 25%,
              transparent 25%,
              transparent 75%,
              rgba(0, 0, 0, 0.1) 75%,
              rgba(0, 0, 0, 0.1)
            ),
            linear-gradient(
              120deg,
              rgba(0, 0, 0, 0.1) 25%,
              transparent 25%,
              transparent 75%,
              rgba(0, 0, 0, 0.1) 75%,
              rgba(0, 0, 0, 0.1)
            );
        }

        .pattern--tartan {
          background-image: repeating-linear-gradient(
              transparent,
              transparent 50px,
              rgba(0, 0, 0, 0.4) 50px,
              rgba(0, 0, 0, 0.4) 53px,
              transparent 53px,
              transparent 63px,
              rgba(0, 0, 0, 0.4) 63px,
              rgba(0, 0, 0, 0.4) 66px,
              transparent 66px,
              transparent 116px,
              rgba(0, 0, 0, 0.5) 116px,
              rgba(0, 0, 0, 0.5) 166px,
              rgba(255, 255, 255, 0.2) 166px,
              rgba(255, 255, 255, 0.2) 169px,
              rgba(0, 0, 0, 0.5) 169px,
              rgba(0, 0, 0, 0.5) 179px,
              rgba(255, 255, 255, 0.2) 179px,
              rgba(255, 255, 255, 0.2) 182px,
              rgba(0, 0, 0, 0.5) 182px,
              rgba(0, 0, 0, 0.5) 232px,
              transparent 232px
            ),
            repeating-linear-gradient(
              270deg,
              transparent,
              transparent 50px,
              rgba(0, 0, 0, 0.4) 50px,
              rgba(0, 0, 0, 0.4) 53px,
              transparent 53px,
              transparent 63px,
              rgba(0, 0, 0, 0.4) 63px,
              rgba(0, 0, 0, 0.4) 66px,
              transparent 66px,
              transparent 116px,
              rgba(0, 0, 0, 0.5) 116px,
              rgba(0, 0, 0, 0.5) 166px,
              rgba(255, 255, 255, 0.2) 166px,
              rgba(255, 255, 255, 0.2) 169px,
              rgba(0, 0, 0, 0.5) 169px,
              rgba(0, 0, 0, 0.5) 179px,
              rgba(255, 255, 255, 0.2) 179px,
              rgba(255, 255, 255, 0.2) 182px,
              rgba(0, 0, 0, 0.5) 182px,
              rgba(0, 0, 0, 0.5) 232px,
              transparent 232px
            ),
            repeating-linear-gradient(
              125deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.2) 2px,
              rgba(0, 0, 0, 0.2) 3px,
              transparent 3px,
              transparent 5px,
              rgba(0, 0, 0, 0.2) 5px
            );
        }
      `}</style>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
