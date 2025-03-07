// Code your selectRandomEntry function here:

function selectRandomEntry(iDs){
let index = Math.floor(Math.random() * iDs.length)
return iDs[index]
}

function select3(iDs){
  let randomThree = []
  for (let i =0; i <3; i++){
    let id = selectRandomEntry(iDs)
    while(randomThree.includes(iDs)){
      id = selectRandomEntry(iDs)
    }
    randomThree.push(id)
  }
  return randomThree
}


// Code your buildCrewArray function here:
function buildCrewArray(idNumber, candidates ){
  let crew = []
  for(i = 0; i < candidates.length; i++){
    if (idNumber.includes(candidates[i].astronautID)){
      crew.push(candidates[i])
    }
  }
  return crew
}

let idNumbers = [291, 414, 503, 599, 796, 890];
console.log(selectRandomEntry(idNumbers));

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
