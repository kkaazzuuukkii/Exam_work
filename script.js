const button = document.querySelector('.asidebutton')
const asidebuttons = document.querySelector('.asidebuttons')

const array = [
{
    title: 'Blocks',
    link: 'blocks.html'
},
{
    title: 'Color',
    link: 'color.html'
},
{
    title: 'Gradient',
    link: 'gradient.html'
},
{
    title: 'Img',
    link: 'img.html'
},
{
    title: 'Links',
    link: 'links.html'
},
{
    title: 'Lists',
    link: 'lists.html'
},
{
    title: 'Map',
    link: 'map.html'
},
{
    title: 'Map2',
    link: 'test.html'
},
{
    title: 'site',
    link: 'site.html'
},
{
    title: 'Symbols',
    link: 'symbols.html'
},
{
    title: 'table',
    link: 'table.html'
},
{
    title: 'text',
    link: 'text.html'
},
{
    title: 'Ukraine',
    link: 'Ukraine.html'
}]

array.map((value) => {
const clone = button.cloneNode(true);
clone.href = value.link
clone.firstElementChild.innerText = value.title
asidebuttons.appendChild(clone)
})