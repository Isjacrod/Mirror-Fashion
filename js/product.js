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


// Update sizes output
var availableSizes = [12, 24, 42, 60, 80];
const $sizeInput = document.getElementById('_size_input');
const $sizeOutput = document.getElementById('_size_output');
// Initial Values
$sizeInput.min = availableSizes[0];
$sizeInput.max = availableSizes[availableSizes.length - 1];
$sizeInput.step = 12;
$sizeOutput.value = $sizeInput.value = availableSizes[parseInt(availableSizes.length / 2)];
// Update output value
$sizeInput.oninput = function updateSize() {
    // Copy array to reverse
    let temporarySizes = availableSizes.slice();
    let lastValue = $sizeOutput.value;
    let newValue = $sizeInput.value;
    let calbackFunction;
    if (newValue > lastValue)
        // Find the size greater than newValue
        calbackFunction = function(el, findValue=newValue) {return el >= newValue};
    else if (newValue < lastValue) {
        // Find the size smaller than newValue
        temporarySizes.reverse();
        calbackFunction = function(el, findValue=newValue) {return el <= newValue};
    // Equal case
    } else 
        return
    outputValue = temporarySizes.find(calbackFunction);
    $sizeOutput.value = outputValue;
}
// Update input value using output value
$sizeInput.onchange = function() {$sizeInput.value = $sizeOutput.value};
