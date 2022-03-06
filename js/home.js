//Verificação do formulário
//Simplismente use 'required' no input, estile usando pseudo classe :invalid/:valid/:focus
/*document.getElementById('search-form').addEventListener('submit', (event) => {
    var $inputTarget = event.target.querySelector('input[name="q"');
    if ($inputTarget.value == ''){
        event.preventDefault();
        $inputTarget.style.border="1px solid red";
    }
}) */

// Banner object and slide controll
const Banner = {
    $banner: document.querySelector(".featured-banner > .banner_image"),
    bannerImages: ["destaque-home.png", "destaque-home-2.png", "familia-pelho.jpg"],
    timer: null,

    nextBanner() {
        this.bannerImages.push(this.bannerImages.shift());
        this.$banner.src = `img/${this.bannerImages[0]}`;
    },

    toggleSlide(miliseconds=1000) {
        if (this.timer == null) {
            this.timer = setInterval(() => this.nextBanner(), miliseconds);
        } else {
            clearInterval(this.timer);
            this.timer = null
        }
    }
}
Banner.toggleSlide(5000);
