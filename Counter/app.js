const PubSub = (function() {
    let events={};
    return {
        subscribe(name,callBack) {
            // if (name not in)
            events[name]=events[name]||[];
            events[name].push(callBack)
            console.log(events)
            // callBack(3)
        },
        dispatch(name,val) {
            events[name].forEach(counter => {
                counter.change(val)
                // counter(val)
                // counter.element.innerText=`Counter value: ${counter.val}`
            });
        }
    }
})();

const btnWrapper1 = document.getElementById('buttonWrapper1');
const btnWrapper2 = document.getElementById('buttonWrapper2');
const counterWrapper1 = document.getElementById('counterWrapper1');
const counterWrapper2 = document.getElementById('counterWrapper2');



class Counter {
    constructor(addTo,val){
            this.val=val
            this.element=document.createElement("p");
            this.element.innerText=`Counter value: ${this.val}`
            addTo.appendChild(this.element);
            PubSub.subscribe("change",this);
    }
    change(val){
        this.val+=val;
        this.element.innerText=`Counter value: ${this.val}`
    }

}

class Button {
    constructor(addTo,val){
        this.val=val;
        this.element=document.createElement("button");
        this.element.innerText=`Change by ${this.val}`;
        addTo.appendChild(this.element);
        this.element.addEventListener("click",()=>{
            PubSub.dispatch("change",this.val);
        })
    }
}

new Counter(counterWrapper1, 10);
new Counter(counterWrapper2, -100);
new Button(btnWrapper1, 10);
new Button(btnWrapper2, -5);

// Button and Counter don't interact directly. Only through the PubSub module!