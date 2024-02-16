//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name = "", mass = "", scores = []) {
        this.name = name
        this.mass = mass
        this.scores = scores
    }
    addScore(newScore){
        this.scores.push(newScore)
    }
    average(){
       let total = 0;
       for(let i = 0; i < this.scores.length; i++){
        total += this.scores[i]
       }
       let average = Math.round(total/this.scores.length*10)/10;
       return average
    }
    status(){
        let average = this.average()
        if (average >= 90){
            return "Accepted";
        } else if (average >= 80 && average <= 89){
            return "Reserve";
        } else if (average >= 70 && average <= 79){
            return "Probationary";
        } else if (average < 70){
            return "Rejected";
        }
    }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88,85,90])
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93,88,97])
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62])
// let candidateAvgScore = new
bubbaBear.addScore(83)
console.log(bubbaBear.scores)
console.log(merryMaltese.average())

// console.log(`${this.name} earned an average test score of ${this.average}% and has a status of ${this.status}`);

console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}`);


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.