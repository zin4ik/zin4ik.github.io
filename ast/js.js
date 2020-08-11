$(document).ready(function () {
  var owl = $("#owl-carousel4");
  owl.owlCarousel({
    margin: 0,
    loop: true,
    animateOut: false,
    smartSpeed: 500,
    autoplay: true,
    rewind: true,
    callbacks: true,
    nav: true,
    navText: ["<img src='./img/prev.png'/>", "<img src='./img/next.png'/>"],
    dots: false,
    margin: 10,
    center: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    items: 1,
  });

  var c = document.getElementById("canvas");

  var div = document.getElementById("canvas-container");
  var conteiner = document.getElementById("owl-carousel4");
  var sliderActive = $("#owl-carousel4 .active");

  (ctx = c.getContext("2d")),
    (cw = c.width = div.offsetWidth+20),
    (ch = c.height = div.offsetHeight+20),
    (size = 10),
    (border = -7),
    (isTweening = false),
    (particles = []),
    (Particle = function (index, x, y) {
      //console.log(index)
      this.x = x - Math.abs(border) / 2;
      this.y = y - Math.abs(border) / 2;
      this.scale = size;
      this.opacity = 1;
      this.draw = function () {
        //console.log()
        ctx.translate(this.x, this.y);
        ctx.globalAlpha = this.opacity;
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = "hsl(0, 0%, 85%)"; //'rgb('+(75+index*1.5)+','+(index/(y+1))+',50)';
        ctx.fillRect(
          (size - this.scale) / 2,
          (size - this.scale) / 2,
          this.scale - border,
          this.scale - border
        );
        ctx.globalAlpha = 1;
        ctx.translate(-this.x, -this.y);
      };
      this.draw();
    });

  function setGrid() {
    cw = Math.ceil((div.offsetWidth +20)/ size);
    ch = Math.ceil((div.offsetHeight +20) / size);

    c.width = div.offsetWidth+20;
    c.height = div.offsetHeight+20;
    particles = [];

    for (var _x = (i = 0); _x < cw; _x++) {
      for (var _y = 0; _y < ch; _y++) {
        particles.push(new Particle(i, _x * size, _y * size));
        i++;
      }
    }
  }

  window.onresize = setGrid;
  setGrid();

  function animetaParticle(e) {
    if (isTweening) return; //prevent overlap
    isTweening = true;
    console.log(e.clientX);
    console.log(e.clientY);
    gsap.ticker.add(redraw);
    gsap.to(particles, {
      duration: 1,
      scale: size / 4,
      opacity: 1,
      ease: Back.easeIn.config(1),
      stagger: {
        yoyo: true,
        repeat: 1,
        amount: 2,
        grid: [cw, ch],
        from: Math.floor(e.clientX / size) * ch + Math.floor(e.clientY / size),
      },
      //compute the index of the current box

      onComplete: function () {
        isTweening = false;
        gsap.ticker.remove(redraw);
      },
    });
  }
  owl.on("changed.owl.carousel", function (event) {
    var pTop = $(".alfa-waiting__number").offset().top;
    var pLeft = $(".alfa-waiting__number").position().left;
    if (isTweening) return; //prevent overlap
    isTweening = true;
    gsap.ticker.add(redraw);
    gsap.to(particles, {
      duration: 0.8,
      
      scale: size / 4,
      opacity: 1,
      ease: Back.easeIn.config(1),
      stagger: {
        yoyo: true,
        repeat: 1,
        amount: 1,
        grid: [cw, ch],
        from: Math.floor(pTop / size) * ch + Math.floor(pLeft / size),
      },
      //compute the index of the current box

      onComplete: function () {
        isTweening = false;
        gsap.ticker.remove(redraw);
      },
    });
  });

  function redraw() {
    ctx.clearRect(0, 0, c.width, c.height);
    for (var i = 0; i < particles.length; i++) particles[i].draw();
  }
});
