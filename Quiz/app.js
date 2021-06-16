var app = new Vue({
    el:"#app",
    data:{
        greeting:" Where should you live?",
        index:0,
        question:"",
        choice:"",
        utah:0,
        idaho:0,
        california:0,
        number:0,
        result:"",
        page: "questions",
    
        
    questions: [
        {
            question:"Where is your favorite place to camp?",
            option1: "Mountains",
            option2: "Desert",
            option3: "Beach",
            choice: "",
            
        },
        {
            question: "What is your favorite food?",
            option1: "Potatoes and Beef stew",
            option2: "Cherrys and SugarBeets",
            option3: "Fruits and vegetables",
            choice:"",
            
        },
        {
            question: "What kind of weather do you prefer?",
            option1: "Cold long winters but nice summers",
            option2: "Warm almost all year but super hot supers",
            option3: "Mid temperature all year long",
            choice:"",
        
        },
    
    ],
    
    },
    methods:{
        answer: function(){
        this.questions.forEach(function(question){

        if (question.choice =="option1"){
            console.log(app.idaho);
            app.idaho+=1;
        }else if (question.choice== "option2"){
            app.utah+=1;
        }else if (question.choice =="option3"){
            app.california+=1;
            } 
        })
        if(this.page=="questions"){
            this.page="results"
        }}
    },
    computed:{
        state: function(){
            var complete=true;
            this.questions.forEach(function(question){
                if (question.choice==""){
                    complete==false;
                }

            })
            console.log(complete);
            if (complete){
            if (this.idaho>this.utah && this.idaho>this.california){
                return "Idaho";
            } else if (this.utah> this.idaho && this.utah > this.california){
                return "Utah";
            } else if (this.california> this.utah && this.california> this.idaho){
                return "California";
            }
        }
        }   
    }
})