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
        this._currentIndex = value;
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
    get nextIndex(){
        return (this._currentIndex+1) % this._slides.length;
    }
    get prevIndex(){
        return (this._currentIndex-1 + this._slides.length) % this._slides.length;
    }
}
 const carousel = new Carousel([
     new Slider('','pic1'),
     new Slider('','pic2'),
     new Slider('','pic3'),
     new Slider('','pic4'),
     new Slider('','pic5'),
 ]);

 const [prevButton, nextButton] = document.querySelectorAll('.btn');

 const sliderClick= (direction = "next")=>(event)=> {
    carousel.currentIndex = carousel[direction == "next" ? "nextIndex" : "prevIndex"];
    updateSlide(direction);
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