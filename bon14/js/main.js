'use strict';

const Element = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

Element.prototype.createNewElem = function() {
    window.addEventListener('DOMContentLoaded', () => {
        let newElem;

        if (this.selector[0] == '.') {
            newElem = document.createElement('div');
            if(this.selector.length > 0) {
                let selectorName = this.selector.replace(this.selector[0], '');
                newElem.classList.add(selectorName);
            }
        } else if (this.selector[0] == '#') {
            newElem = document.createElement('p');
            if(this.selector.length > 0) {
                let selectorName = this.selector.replace(this.selector[0], '');
                newElem.setAttribute('id', selectorName);
            }    
        }
        newElem.style = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
        color: #efefef;
        position: absolute;
        top: 0px;
        left: 0px;
        margin: 10px;
        padding: 5px
        `;

        newElem.textContent = 'Этот текст выглядит по-разному, в зависимости от элемента-объекта';

        document.body.appendChild(newElem);
    });
};

Element.prototype.moveDiv = function() {
   
        let movement = 10;
        let elem = document.querySelector('div');
        
         if (event.key === 'ArrowUp') {
             elem.style.top = `${parseInt(elem.style.top) - movement}px`;
         }
         if (event.key === 'ArrowDown') {
             elem.style.top = `${parseInt(elem.style.top) + movement}px`;
         }
         if (event.key === 'ArrowLeft') {
             elem.style.left = `${parseInt(elem.style.left) - movement}px`;
         }
         if (event.key === 'ArrowRight') {
             elem.style.left = `${parseInt(elem.style.left) + movement}px`;
         }
    
};    

Element.prototype.animateDiv = function() {
   
    window.addEventListener('keydown', this.moveDiv);
        
};    


const div = new Element('.block', '100px', '100px', 'blue', '14px');
// const p = new Element('#best', 'inherit', 'inherit', 'green', '30px');

div.createNewElem();
// p.createNewElem();

div.animateDiv();
