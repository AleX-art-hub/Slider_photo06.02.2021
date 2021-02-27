 import Slide from './model/Slide.js';

 import Carousel from './model/Carousel.js';


const carousel = new Carousel([
   new Slide('https://ugra-news.ru/upload/iblock/19f/20170720_zaa_p133_142.jpg',
   'pic1'
   ),
   new Slide('https://cdnimg.rg.ru/img/content/165/60/35/iStock-9661183921000_d_850.jpg',
   'pic2'
   ),
   new Slide('https://fit4brain.com/wp-content/uploads/2016/02/lion-family.jpg',
   'pic3'
   ),
   new Slide('https://s3-eu-west-1.amazonaws.com/s3.mediazona.ca/entry/ff042a17a127c2d5155a7aa08556917a_1400x850',
   'pic4'
   ),
   new Slide('https://kotsobaka.com/wp-content/uploads/2018/04/Puma1.jpg',
   'pic5'),
]);

const [prevButtonElem, nextButtonElem] = document.querySelectorAll('.btn');

const sliderClick = (direction = 'next') => (e) => {
  carousel.currentIndex =
    carousel[direction == 'next' ? 'nextIndex' : 'prevIndex'];
  updateSlide(direction);
};

prevButtonElem.addEventListener('click', sliderClick('prev'));
nextButtonElem.addEventListener('click', sliderClick('next'));

updateSlide();

function updateSlide(direction) {
  const oldCurrentImg = document.querySelector('.currentImage');
  const newCurrentImg = document.querySelector('.nextImage');
  const currentSlide = carousel.currentSlide;
  //const nextSlide = carousel[direction == 'next' ? 'nextSlide' : 'prevSlide'];
  newCurrentImg.classList.replace('nextImage', 'currentImage');
  oldCurrentImg.classList.replace('currentImage', 'nextImage');
  newCurrentImg.setAttribute('src', currentSlide.src);
  //console.log('new event');
}