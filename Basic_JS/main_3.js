// Arrays
const people = ['ekam','shaina','gurnaj','gurupdesh'];
console.log(people)
console.log(people[0])
console.log(people[1])

const ages = [10,12,31,11,56,44,9]

for(let i = 0 ; i < ages.length; i++){
    if(ages[i]%2==0){
        console.log(ages[i])
    }
}


//  Objects

const personArray = ['a','b','c'];
const genderArray= ['m','f','m'];

for(let i = 0; i < personArray.length;i++){
    if (genderArray[i] == 'm'){
        console.log(personArray[i]);
    }
}

//  instead of this above things we can make objects 

//  this is like a dictionary in python
const user1 = {
    firstname: "ah",
    gender: "male"
}
 
console.log(user1['firstname'])
 
console.log(user1['gender'])

//  array of dictionaries 

const allUsers = [{firstname:"shaina", gender:"female"},
                {firstname:"ekam", gender:"female"},
                {firstname:"Gurunaj", gender:"male"}]

//  accessing the above 
for (let i =0; i < allUsers.length; i ++){
    if(allUsers[i]["gender"] == 'female'){
        console.log(allUsers[i]["firstname"] + " -> thats a good match")
    }
}