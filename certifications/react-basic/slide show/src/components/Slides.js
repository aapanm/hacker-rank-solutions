import React, { useEffect, useState } from "react";

function Slides({ slides }) {
  const [slideShow, setSlideShow] = useState(0);
  const [prevButtonDisable, setPrevButtonDisable] = useState(Boolean);
  const [nextButtonDisable, setNextButtonDisable] = useState(Boolean);

  const onRestartClick = () => {
    setSlideShow(0);
  };

  const onPrevClick = () => {
    setSlideShow(slideShow - 1);
  };

  const onNextClick = () => {
    setSlideShow(slideShow + 1);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={onRestartClick}
          disabled={slideShow === 0 ? true : false}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={onPrevClick}
          disabled={slideShow === 0 ? true : false}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={onNextClick}
          disabled={slideShow === slides.length - 1 ? true : false}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[slideShow].title}</h1>
        <p data-testid="text">{slides[slideShow].text}</p>
      </div>
    </div>
  );
}

export default Slides;
