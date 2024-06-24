export function TxtType(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2500; // Longer wait between typing and deleting
    this.txt = '';
    this.tick();
    this.isDeleting = false;
}

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    
    if (fullTxt === "We are Dickie & Lyman Lawyers LLP") {
        this.el.getElementsByTagName('span')[0].style.color = 'var(--secondary-color)';
        this.el.getElementsByTagName('span')[0].style.fontWeight = 'bold';
        this.period = 4000; 
    } else {
        this.el.getElementsByTagName('span')[0].style.color = ''; 
        this.period = 2500; 
    }

    var that = this;
    var delta = 100;

    if (this.isDeleting) {
        delta /= 2; 
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};
