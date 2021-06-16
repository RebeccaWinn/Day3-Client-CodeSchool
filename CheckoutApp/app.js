var app = new Vue({
    el: "#app",
    data:{
        deck_type:"oak",
        wheel_type:"yellow",
        cost:0,
        tax:0,
        total:0
    },
    computed:{
        computedDeckImage: function(){
            return "images/" + this.deck_type +".jpg"
        },
        computedWheelImage: function(){
            return "images/" + this.wheel_type +".jpg"
        },
        computedCost: function ( ){
            this.cost = 0;
            if( this.deck_type == "oak") this.cost += 30;
            if( this.deck_type == "pine") this.cost += 20;
            if( this.deck_type == "wood") this.cost += 10;
            if( this.wheel_type == "yellow") this.cost += 10;
            if( this.wheel_type == "red") this.cost += 15;
            if( this.wheel_type == "black") this.cost += 30;
            this.tax = this.cost*.06
            this.total = this.cost+this.tax 
            return this.total

        }
    }

})