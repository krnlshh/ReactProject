// Explain call, bind & apply

// Imagine you're a famous Movie Director (a function), but you need different actors to perform scenes.
// The actors change, but the direction stays the same. That's where call, apply, and bind come in — your casting directors!

function Director(scenes){
    console.log( this.Actor + ' can ' + scenes )
}

const actor1 = {Actor : 'john'}
const actor2 = {Actor : 'bob'}
const actor3 = {Actor : 'lina'}
const actor4 = {Actor : 'Mohan'}

const canDo = ['dance scenes','fight scenes','acting scenes']

Director.call(actor1,'sing scenes')
Director.call(actor2,'fishing scenes')
Director.apply(actor3,[canDo])
const x = Director.bind(actor4,'do everything but he dont have dates')
x();



function CompanyCeo(decision){
   console.log(this.name + ' have this role : ' + this.role + ' make decision: ' + decision)      
}

const authorizePerson1 = {name : 'john', role : 'assistant manager'}
const authorizePerson2 = {name : 'Mohan', role : 'executive manager'}
const authorizePerson3 = {name : 'Bob' , role: 'general manager'}
const authorizePerson4 = {name: 'lina' , role: 'security'}

const canDecide = ['hire','fire','assetBying','salaryManagement']


CompanyCeo.call(authorizePerson1,'approve budget')
CompanyCeo.call(authorizePerson2,'hire new staff')
CompanyCeo.apply(authorizePerson3,[canDecide])
const s = CompanyCeo.bind(authorizePerson4,'open & close office')
s();


