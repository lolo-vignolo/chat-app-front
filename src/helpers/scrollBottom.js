import { animateScroll } from 'react-scroll';

export const scrollBottom = (id) => {
  setTimeout(() => {
    animateScroll.scrollToBottom({
      containerId: id,
      duration: 0,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -50,
    });
  }, 10);
};

export const scrollBottomAnimated = (id) => {
  setTimeout(() => {
    animateScroll.scrollToBottom({
      containerId: id,
      duration: 250,
      display: 0,
      smooth: 'easeInOutQuart',
      offset: -50,
    });
  }, 10);
};
