export function TxtType(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 3000; // Longer wait between typing and deleting
    this.txt = '';
    this.tick();
    this.isDeleting = false;
    this.isFinished = false;
}

TxtType.prototype.tick = function() {
    if (this.isFinished) return; // Exit if animation is complete

    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    this.txt = fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    if (fullTxt === "We are Dickie & Lyman Lawyers LLP") {
        this.el.getElementsByTagName('span')[0].style.color = 'var(--secondary-color)';
        this.el.getElementsByTagName('span')[0].style.fontWeight = 'bold';
        this.period = 4000; 
    } else {
        this.el.getElementsByTagName('span')[0].style.color = ''; 
        this.period = 3000; 
    }

    var that = this;
    var delta = 200; // Increase for slower typing

    if (this.isDeleting) {
        delta /= 2; 
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period; // Pause after full text is typed
        this.isDeleting = false;
        this.el.getElementsByTagName('span')[0].classList.add('blink');
    } else {
        this.el.getElementsByTagName('span')[0].classList.remove('blink');
    }

    if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        
        // Ensure the animation stops if there are no more items
        if (this.loopNum >= this.toRotate.length) {
            this.isFinished = true; // Stop the effect if all items have been processed
        }
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};
