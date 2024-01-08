document.addEventListener('DOMContentLoaded', () => {
    const bar = document.querySelector('#bar-b');
    const over = document.querySelector('#over');
    const con = document.querySelector('#con');
    const pro = document.querySelector('.pro');
    const probox = document.querySelector('#box');
    bar.addEventListener('click', () => {
        con.classList.toggle('open');

    });
    over.addEventListener('click', () => {
        con.classList.remove('open');
    });
    probox.addEventListener('mouseover', () => {
        pro.classList.add('show');
    });
    probox.addEventListener('mouseout', () => {
        pro.classList.remove('show');
    });
});