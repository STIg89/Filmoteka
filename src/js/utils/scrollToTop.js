import { refs } from '../dom/refs';

const { scrollUp, scrollUpSvgPath } = refs;

const offSet = 700;
const pageLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pageLength} ${pageLength}`;
scrollUpSvgPath.style.transition = `stroke-dashoffset 25ms`;

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

window.addEventListener('scroll', () => {
    UpdateDashOffSet();
    if (offSet > window.pageYOffset) {
        scrollUp.classList.add('visually-hidden');
    } else {
        scrollUp.classList.remove('visually-hidden');
    }
});

function UpdateDashOffSet () {
    let currentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const dashOffSet = pageLength - (window.pageYOffset * pageLength / currentHeight);
    scrollUpSvgPath.style.strokeDashoffset = dashOffSet;
};
