import Lottie from 'lottie-web';
// import { animationData } from './animationData';
import { animationDataSample2 } from './animationDataSample2';

const animation = Lottie.loadAnimation({
  container: document.querySelector('#lottie'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  animationData: animationDataSample2,
});

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  console.log('Mouse X: ', mouseX);
  console.log('Mouse Y: ', mouseY);
  console.log('x%', mouseX / window.innerWidth);

  animation.goToAndStop((mouseX / window.innerWidth) * 60, true);
});
