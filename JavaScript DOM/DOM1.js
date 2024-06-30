console.log("Hello DOM")
console.log(document)


//....01....CSS in js
const sections =document.querySelectorAll('section')
for(const section of sections){
    section.style.border='2px solid steelblue'
    section.style.marginBottom='5px'
    section.style.borderRadius='15px'
    section.style.paddingLeft='7px'
    section.style.backgroundColor='lightgray'
}


//....02....class add and remove in js
const placesContainer=document.getElementById('places-container')
placesContainer.classList.add('text-center')
placesContainer.classList.remove('large-text')


//....03.... create new element
const PlacesList=document.getElementById('Places-list')
const li=document.createElement('li')
li.innerText='brand'
PlacesList.appendChild(li)

const mainContainer=document.getElementById('main-container')//....where to add
const section=document.createElement('section')//....what to be to added
const h1=document.createElement('h1')
h1.innerText='My food list'
section.appendChild(h1);

const Ul=document.createElement('ul')
const Li=document.createElement('li')
Li.innerText='birani';
Ul.appendChild(Li);
section.appendChild(Ul);

mainContainer.appendChild(section)//....add the child


//....04.... set innerHtml Directly
const sectionDress=document.createElement('sectin')
sectionDress.innerHTML=`
<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>genji</li>
    <li>Lungi</li>
`
mainContainer.appendChild(sectionDress)