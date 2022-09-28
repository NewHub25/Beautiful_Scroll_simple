document.querySelectorAll('section').forEach(el=>el.classList.add('hidden'));
const hiddenElements = document.querySelectorAll('.hidden');

const options = {
    root: null,
    rootMargin: '-200px 0px',
    threshold: 0
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, options);

hiddenElements.forEach(el => observer.observe(el));

// function watchY() {
//     let s = window.scrollY;
//     let h = document.documentElement.clientHeight;
//     console.clear();
//     console.log(`
// scrollY: ${s},
// 100vh: ${h},
// Nº página: ${
//     Math.ceil(s / h) + 1
// }
// `);
// }
// window.addEventListener('scroll', watchY);