class Slider{
    constructor(src, description){
        this._src = src;
        this._description= description;
    }
    get src(){
        return this._src;
    }
    get description(){
        return this._description;
    }

}
class Carousel{
    constructor(slides, currentIndex=0){
        this._slides=slides;
        this._currentIndex = currentIndex;
    }
    get currentIndex(){
        return this._currentIndex;
    }
    set currentIndex(value){
        if(typeof value!=="number") throw new TypeError();
        if(!Number.isSafeInteger(value) || value<0 || value>=this._slides.length) throw new RangeError();
        this._currentIndex=value;
    }
    get currentSlide(){
        return this._slides[this._currentIndex];
    }
    get nextSlide(){
        return this._slides[this.nextIndex];
    }
    get prevSlide(){
        return this._slides[this.prevIndex];
    }
    get nexttSlide(){
        return (this._curentIndex+1) % this._slides.length;
    }
    get prevSlide(){
        return (this._curentIndex-1 + this._slides.length) % this._slides.length;
    }
}
 const carousel = new Carousel([
     new Slider('https://images.ua.prom.st/1837765903_holst-dlya-risovaniya.jpg','ZhiraPH'),
     new Slider('https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg','London'),
     new Slider('https://thumbs.dreamstime.com/b/%D0%B2%D0%B5%D1%81%D0%B5%D0%BB%D1%8B%D0%B9-%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%B0-%D0%B3%D0%B5%D1%80%D0%BC%D0%B0%D0%BD-%D1%88%D0%B5%D0%BF%D0%B0%D1%80%D0%B4-158632858.jpg','sobaka'),
     new Slider('https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz','London2'),
     new Slider('https://bituk.media/wp-content/uploads/2020/04/my.jpg','Milan'),
 ]);

 const [prevButton, nextButton] = document.querySelectorAll('.btn');

 const sliderClick= (direction = "next")=>(event)=> {
    carousel.currentIndex = carousel[direction =="next" ? "nextIndex": "prevIndex"];
 };
    prevButton.addEventListener("click", sliderClick("prev"));
    nextButton.addEventListener("click", sliderClick("next"));

    updateSlide();

    function updateSlide(direction){
    const oldCurrentImg = document.querySelector(".currentImage");
    const newCurrentImg = document.querySelector(".nextImage");
    const currentSlide = carousel.currentSlide;
    //const nextSlide = carousel[direction =="next" ? "nextSlide": "prev"];
    newCurrentImg.classList.replace("nextImage", "currentImage");
    oldCurrentImg.classList.replace("currentImage", "nextImage");
    newCurrentImg.setAttribute("src", currentSlide.src);
    }