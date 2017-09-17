(function(){

    function getRandomInt(min, max) {   //getRandomIntInclusive!!!
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }
    /*
    * Interfaces
    */

    //interface describing what attributes and methods a traveler should have
    interface ITraveler {

        name: string;
        food: number;
        isHealthy: boolean;

        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
        hunt(): number;

        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        eat(): boolean;


    }

    //interface describing attributes and methods a wagon should have
    interface IWagon{
        capacity: number;
        passengerArray: Traveler[];

        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler): string;

        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        isQuarantined(): boolean;

        //Return the total amount of food among all passengers of the wagon.
        getFood(): number;

    }

    /*
    * Classes
    */

    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    class Traveler implements ITraveler {

        name: string;
        food: number;
        isHealthy: boolean;
        
        constructor(name: string, food: number, isHealthy: boolean = true){

            this.name = name;
            this.food = food;
            this.isHealthy = isHealthy;
        }
        hunt(): number  {
            //50% chance that food will increase by 100:
            if (Math.random() > .5){
                this.food = this.food + 100;
            }
            return this.food;
  
        }
        eat(): boolean {
            //if a traveler has at least food= 20, then they eat and we subract 20 from food:
            if(this.food >= 20) {
                this.food = this.food -20   //could also be "this.food -= 20"
            }else{
                this.isHealthy = false
            }
            return this.isHealthy;
        }
    }

    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    class Wagon implements IWagon {
        capacity: number;
        passengerArray: Traveler[] = [];

        constructor(capacity: number){
            this.capacity = capacity;
        }

        addPassenger(traveler: Traveler): string {
            if(this.capacity > this.passengerArray.length){
                this.passengerArray.push(traveler);
                return "passenger was added";
            }else{
                return "sorry, no room for passenger on the wagon";
            }
        }; 


        isQuarantined(): boolean {
            //my code:
            for (let i=0; i < this.passengerArray.length; i++) {
                if (this.passengerArray[i].isHealthy = false){
                    return true;
                
            }else{
                return false;
                }
            // //Eric's code: 
            // for(let i=0, i < this.passengerArray.length, i++){
            //     if (!this.passengerArray[i].isHealthy){
            //         return true;
            //     }
            //     return false;
            // }
            }   
        }; 
        getFood(): number {
            let totalFood = 0;
            for(let i=0; i < this.passengerArray.length; i++){
                totalFood += this.passengerArray[i].food;
            }
            return totalFood;
        };
    }

    // logging for testing:
// let traveler1 = new Traveler(21, "Mike")


// test the max # of people added to the wagon:
// console.log("wagon capacity before addpassenger: " + wagon1.passengerArray.length)
// console.log(wagon1.addPassenger(traveler1))
// console.log("wagon capacity after add passenger: " + wagon1.passengerArray.length)
// console.log(wagon1.addPassenger(traveler1))
// console.log("wagon capacity after add passenger: " + wagon1.passengerArray.length)
// console.log(wagon1.addPassenger(traveler1))
// console.log("wagon capacity after add passenger: " + wagon1.passengerArray.length)
// console.log(wagon1.addPassenger(traveler1))
// console.log("wagon capacity after add passenger: " + wagon1.passengerArray.length)
// console.log(wagon1.addPassenger(traveler1))
// console.log("wagon capacity after add passenger: " + wagon1.passengerArray.length)

// console.log("traveler1 food before eating:" + traveler1.food)
// console.log("Is traveler1 healthy?" + traveler1.eat())
// console.log("food after eating:" + traveler1.food)
// console.log(" traveler1 name is: " + traveler1.name)
// console.log("eat again: Is traveler1 healthy?" + traveler1.eat())

// console.log("food before traveler1 hunts:" + traveler1.food)
// console.log("food after hunt is:" + traveler1.hunt())
// console.log("food after 2nd hunt is:" + traveler1.hunt())
// console.log("food after 3rd hunt is:" + traveler1.hunt())
// console.log("")


    /*
    * Play the game
    *
    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    */
//eric's code solution:
    let Traveler1 = new Traveler("bob", getRandomInt(0,100));
    let Traveler2 = new Traveler("joe", getRandomInt(0,100));
    let Traveler3 = new Traveler("steve", getRandomInt(0,100));
    let Traveler4 = new Traveler("mark", getRandomInt(0,100));
    let Traveler5 = new Traveler("jimmy", getRandomInt(0,100));

    //create a new wagon instance:
    // let station = new Wagon(4);

    //3 traveler will eat:
    console.log(Traveler1.eat());
    console.log(Traveler2.eat());
    console.log(Traveler3.eat());

    //2 travelers will go hunt:
    console.log(Traveler4.hunt());
    console.log(Traveler5.hunt());

    // This didn't work: don't try this!!!

        // for(i=0, i = 4, i++) {
        //     let "'traveler' + 'i'" = new Traveler(getRandomInt(0,100), "'traveler' + 'i'", true);
        //     console.log("'traveler' + 'i'")
        // }
        // let traveler1 = new Traveler("Mike", getRandomInt(0,100), true);
        // let traveler2 = new Traveler("Jeff", getRandomInt(0,100), true);
        // let traveler3 = new Traveler("Steve", getRandomInt(0,100), true);
        // let traveler4 = new Traveler("Bryan", getRandomInt(0,100), true);
        // let traveler5 = new Traveler("JD", getRandomInt(0,100), true);
        console.log("traveler1", Traveler1.name, Traveler1.food)
        console.log("traveler2", Traveler1.name, Traveler2.food)
        console.log("traveler3", Traveler1.name, Traveler3.food)
        console.log("traveler4", Traveler1.name, Traveler4.food)
        console.log("traveler5", Traveler1.name, Traveler5.food)
    /*
    * Create wagon with an empty passenger list and a capacity of 4.
    */

    let wagon1 = new Wagon(4);

    /* Make 3 of 5 the travelers eat by calling their eat methods
    */
    console.log("food before eating for traveler1: " + Traveler1.food)
    console.log("food before eating for traveler2: " + Traveler2.food)
    console.log("food before eating for traveler3: " + Traveler3.food)

    Traveler1.eat();
    Traveler2.eat();
    Traveler3.eat();

   
    console.log("food after eating for traveler1: " + Traveler1.food)
    console.log("food after eating for traveler2: " + Traveler2.food)
    console.log("food after eating for traveler3: " + Traveler3.food)

    /* Make the remaining 2 travelers hunt
    */
    console.log("traveler2 food before the hunt: " + Traveler2.food)
    console.log("traveler5 food before the hunt: " + Traveler5.food)
    Traveler2.hunt();
    Traveler5.hunt();
    console.log("traveler2 food after the hunt: " + Traveler2.food)
    console.log("traveler5 food after the hunt: " + Traveler5.food)

    /* Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method.
    */

let ourTravelers = [Traveler1, Traveler2, Traveler3, Traveler4, Traveler5]

ourTravelers.forEach(function(Traveler, index){
    if(Math.random() > .5){
        console.log(wagon1.addPassenger(Traveler))
    }
});


    /* Run the isQuarantined method for the wagon
    */
console.log("everyone on this wagon is healthy:" + wagon1.isQuarantined())

    /* Run the getFood method for the wagon
    */
    0
    console.log(wagon1.getFood())
    /*
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects 
    *
    */

})();

