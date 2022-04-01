const $productForm = document.getElementById('_product-form');

/* Images */
const productImages = {
    blue: 'img/produtos/foto15-azul.png',
    red: 'img/produtos/foto15-rosa.png',
    green: 'img/produtos/foto15-verde.png',
}


/* Change Image from input choose */
const $colorInputColection = $productForm.querySelectorAll('.color_input');
const $productImage = $productForm.querySelector('.product_figure > .product_image');

(function colorInputAddEventHandler() {
    $colorInputColection.forEach($inputColor => {
        $inputColor.addEventListener('click', changeProductImage);
    });
})();

function changeProductImage(ev) {
    let imageId = ev.target.id;
    $productImage.src = productImages[imageId];
}
