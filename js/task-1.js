const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const items = item.querySelectorAll('ul li');
    console.log(`Category: ${title}, Elements: ${items.length}`);
});
