let desiredSize

function sizeRequester () {
    desiredSize = prompt("Please choose size of the board/nAllowed length of div size is between 16-64")
    for ( ; desiredSize < 16 || desiredSize > 64 ; ) {
        desiredSize = prompt('Invalid board size, please enter number between 16 and 64')
    }
}

sizeRequester()

let squareSize = 500/desiredSize

const boardSelector = document.querySelector(".board")
let count = 1

for (let i = 1 ; i <=desiredSize ; i++) {
  this["row"+i] = document.createElement('div')
  this["row"+i].classList.add("row"+i)
  this["row"+i].setAttribute('style',`height:${squareSize}px;width:500px;border-width:0; display:flex;margin:0px;padding:0px;`)
  boardSelector.appendChild(this["row"+i])
  this["row"+i+"Selector"] = document.querySelector(".row"+i)
  for (let c = 1;c<=desiredSize; c++, count++){
    this["square"+count] = document.createElement('div')
    this["square"+count].setAttribute('id',`square${count}`)
    this["square"+count].setAttribute('style',`height:${squareSize}px; width:${squareSize}px`)
    this["row"+i+"Selector"].appendChild(this["square"+count])
    this["row"+i+"Selector"].querySelectorAll('div')
  }
}

for (let p = 1 ; p<=Math.pow(desiredSize,2) ; p++){
    this["square"+p].addEventListener("mouseover", () => {
        this["square"+p].style.backgroundColor="grey"
        
    })
    this["square"+p].addEventListener("mouseout", () => {
        this["square"+p].style.backgroundColor="grey"

    })

}
const palette = ["red","blue","purple","white","yellow","green","orange","black","grey"]
function eraser(){
    for (let p = 1 ; p<=Math.pow(desiredSize,2) ; p++){
            this["square"+p].style.backgroundColor = ""

    }
}

const eraserSelector = document.querySelector('.eraser')
eraserSelector.addEventListener("click",() => eraser())

let currentColor

function rainbower (){
    for (let p = 1 ; p<=Math.pow(desiredSize,2) ; p++){
        this["square"+p].addEventListener("mouseover", () => {
            currentColor = palette[Math.floor(Math.random()*palette.length)]
            this["square"+p].style.backgroundColor = currentColor
        })
        this["square"+p].addEventListener("mouseout", () => {
            this["square"+p].style.backgroundColor = currentColor
        })
    
}}

const normaliserSelector = document.querySelector('.normaliser')
normaliserSelector.addEventListener('click',() => normaliser()
)

function normaliser (){
    for (let p = 1 ; p<=Math.pow(desiredSize,2) ; p++){
        this["square"+p].addEventListener("mouseover", () => {
            this["square"+p].style.backgroundColor = "grey";
        })
        this["square"+p].addEventListener("mouseout", () => {
            this["square"+p].style.backgroundColor = "grey"
        
            })
        
    }
    
}

const rainbowerSelector = document.querySelector('.rainbower')
rainbowerSelector.addEventListener('click', () => {
    rainbower()
})

const colorPickerSelector = document.querySelector('#colorPicker')

let kolorek

colorPickerSelector.onchange = function () {
    kolorek = colorPickerSelector.value
    customColor()
}

function customColor() {
    for (let p = 1 ; p<=Math.pow(desiredSize,2) ; p++){
        this["square"+p].addEventListener("mouseover", () => {
            this["square"+p].style.backgroundColor = kolorek;
        })
        this["square"+p].addEventListener("mouseout", () => {
            this["square"+p].style.backgroundColor = kolorek
        
            })
        
    }
    
}

