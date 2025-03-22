const jsLoaderBg = ".js-loader-bg";
const closeLoadingScreen = (jsLoaderBg) => {
  gsap.timeline().to(jsLoaderBg, {
    opacity: 0,
    direction: 1.1
  });
};

const showLoadingScreen = (jsLoaderBg) => {
  gsap.timeline().to(jsLoaderBg, {
    opacity: 1
  });
};

// ロード完了したら
window.onload = () => {
  setTimeout(() => {
    closeLoadingScreen(jsLoaderBg);
  }, 2500);
};

// h2エレメントを配列で取得
const heads = gsap.utils.toArray("h2")
console.log(heads)
// 配列headsから一つずつ要素を取り出してheadに格納→中の関数を実行
heads.forEach((head) => {
    // ここに実行する処理
    gsap.fromTo(
        head,
        0.5,
        {
            y: 80,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: head,
                start: "top 65%",
                markers: false,
            }
        }
    )
    
})

gsap.registerPlugin(ScrollTrigger);

// ヘッダーをスクロール時に隠す
let lastScrollY = 0;
const header = document.querySelector("header");

ScrollTrigger.create({
  onUpdate: (self) => {
    const currentScrollY = self.scroll();
    if (currentScrollY > lastScrollY) {
      // 下方向にスクロール中: ヘッダーを隠す
      gsap.to(header, { y: -header.offsetHeight, duration: 0.7 });
    } else {
      // 上方向にスクロール中: ヘッダーを表示
      gsap.to(header, { y: 0, duration: 0.7 });
    }
    lastScrollY = currentScrollY;
  }
});

gsap.fromTo("h1",{y:-100},{y:0,duration:1, delay:2.7})

gsap.fromTo(".about-content__left",
{y:30, opacity:0},
{y:0, opacity:1, 
    scrollTrigger: {
        trigger: ".about-content__left",
        start: "top 65%"}
})

gsap.fromTo(".about-content__right",
{y:30, opacity:0},
{y:0, opacity:1, 
    scrollTrigger: {
        trigger: ".about-content__right",
        start: "top 65%"}
})

gsap.fromTo(".design-content__video",
{scale:0.7, opacity:0},
{scale:1, opacity:1, duration: 1.5,
    scrollTrigger: {
        trigger: ".head2",
        start: "top 70%"}
})

gsap.to(".design-text", {
    left: "-100%", 
    duration: 20, 
    ease: "linear", 
    repeat: -1, 
  });

gsap.fromTo(".product-content",
{y:30, opacity:0},
{y:0, opacity:1, 
    scrollTrigger: {
        trigger: ".product-content",
        start: "top 65%"}
})

gsap.to("#contact", {
    backgroundColor: "#e8e8e8", 
    duration: 0.6,
    scrollTrigger: {
        trigger: ".head4",
        start: "top 35%"}
  })

gsap.to(".head4", {
color: "#232323", 
duration: 0.6,
scrollTrigger: {
    trigger: ".head4",
    start: "top 35%"}
})

gsap.fromTo(".contact-content__ja, .contact-content__en", {
    opacity:0},{
    color: "#e8e8e8", opacity:1,
    duration: 0.6,
    opacity: 1,
    scrollTrigger: {
        trigger: ".head4",
        start: "top 65%",}
})

gsap.to(".contact-content__ja, .contact-content__en", {
    color: "#232323", opacity:1,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".head4",
        start: "top 35%"}
})


const mm = gsap.matchMedia();mm.add("(max-width: 599px)", () => {

    gsap.to(".design-text", {
        left: "-360%", 
        duration: 17, 
        ease: "linear", 
        repeat: -1, 
      });

    gsap.to("#contact", {
        backgroundColor: "#FFFFFF", 
        duration: 0.6,
        scrollTrigger: {
            trigger: ".head4",
            start: "top 60%"}
      })
    
    gsap.to(".head4", {
    color: "#232323", 
    duration: 0.6,
    scrollTrigger: {
        trigger: ".head4",
        start: "top 60%"}
    })
    gsap.to(".contact-content__ja, .contact-content__en", {
        color: "#232323", opacity:1,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".head4",
            start: "top 60%"}
    })
})
// const box = document.querySelector("#contact");
// box.addEventListener("mouseenter", () => {
//   gsap.to(box, { backgroundColor: "orange", duration: 1 });
// });
// box.addEventListener("mouseleave", () => {
//   gsap.to(box, { backgroundColor: "red", duration: 1 });
// });

// gsap.fromTo(".product-img__photo1",
// {x:-500, opacity:0},
// {x:0, opacity:1,
//     scrollTrigger:{
//         trigger: ".product-img__photo1",start: "top 55%"}
// })

// gsap.fromTo(".product-img__photo2",
// {x:500, opacity:0},
// {x:0, opacity:1,
//     scrollTrigger:{
//         trigger: ".product-img__photo2",start: "top 55%"}
// })

  