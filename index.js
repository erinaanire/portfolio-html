/**
 * Function to create About Me content
 */
function toCreateList(list){
   const otherUl = document.createElement("ul");
    for(let item of list){
        const listElement = document.createElement('li');
        otherUl.appendChild(listElement);
        const listText = document.createTextNode(item);
        listElement.appendChild(listText);
    }
    return otherUl;
}

/**
 * Function to create skills content
 */

function toAddSkills(list){
    const skillUl = document.createElement('ul');
    for(let item of list){
        const skilListElement = document.createElement('li');
        skillUl.appendChild(skilListElement);
        const skillListText = document.createTextNode(item.skill);
        const skillSpan = document.createElement("span");
        skillSpan.appendChild(skillListText);
        skilListElement.appendChild(skillSpan);
        skillSpan.setAttribute("class","skill-span");
        for(let i = 1 ;i<=5; i++ ){
            const createSpanOne = document.createElement("span");
            createSpanOne.setAttribute("class","skills-dots");
            if(i<=item.level){
                createSpanOne.setAttribute("class","skills-dots level-color")
            }
            skilListElement.appendChild(createSpanOne);    
        }
        
        
    }
    return skillUl;
}


/**
 * Function to add Work Experience contents
 */

function toCreateWorkExpContent(workexplist){
    const workExperienceUl = document.createElement("ul");
    for(let items of workexplist){
        const workExperienceLi = document.createElement("li");
        workExperienceUl.appendChild(workExperienceLi);
        const workExperienceNode = document.createTextNode(items);
        workExperienceLi.appendChild(workExperienceNode);
    }
    return workExperienceUl;
}


/**
 * Function to create educational details content
 */

function toCreateEduDetailsContent(listOfEduDetails){
    const EducationalDetailsContentUl = document.createElement('ul');
    for(let items of listOfEduDetails){
        const newList = document.createElement('li');
        EducationalDetailsContentUl.appendChild(newList);
        const listNode = document.createTextNode(items);
        newList.appendChild(listNode);
    }
    return EducationalDetailsContentUl;
}

function changeColor(ref){
    ref.style.color = "#"+getRandomArbitrary(100000, 999999); 
} 

function mouseOut(ref) {
    ref.style.color = "black";
}

function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }


/**
 * Getting the div tag from parent
 */
const headingTag = document.getElementById("heading");
console.log("headingTag",headingTag);

/**
 * Function call to display heading name
 */
const nameHeading = createHeading(['E','R','I','N','A',' D','M','E','L','L','O']);
headingTag.appendChild(nameHeading);
nameHeading.setAttribute('class', 'head-title');

 
/**
 * Div to create a circle for image
 */
const circleDiv = document.createElement("div");
//headingTag.appendChild(circleDiv);
circleDiv.setAttribute('class','circle');
circleDiv.setAttribute('id','profileselector');
let counter = 6;

setInterval(function(){
    
    if(counter === 0){
        counter=6;
    }

    var cirImage = document.getElementById("profileselector");
    console.log("data",cirImage);
    cirImage.style.backgroundImage = `url('images/avatar${counter}.png')`;
    counter--;
    console.log("2",counter);
    console.log("3");
 }, 1000);


/**
 * Contact Details
 */
const contactDetail = createHeading('Contact Details:');
headingTag.appendChild(contactDetail);
contactDetail.setAttribute('onclick','clickFunction()');
contactDetail.setAttribute('class','default underline-css');



/**
 * creating a new parent div for contact details content
 */
const contactDetailOutter = document.createElement('div');
contactDetailOutter.setAttribute('id', 'contact-container');

/**
 * create a div container for conatct details and its contents
 */

const contactDetailsContainer = document.createElement("div");
contactDetailsContainer.appendChild(contactDetail);
contactDetailsContainer.appendChild(contactDetailOutter);
//headingTag.appendChild(contactDetailsContainer);

/**
 * create a parent div for circle and contact details
 */
const cirContactDiv = document.createElement("div");
cirContactDiv.appendChild(circleDiv);
cirContactDiv.appendChild(contactDetailsContainer);
headingTag.appendChild(cirContactDiv);
cirContactDiv.setAttribute('class','circle-contact');




/**
 * Skills
 */
const skillsKnown = createHeading('Skills:');
headingTag.appendChild(skillsKnown);
skillsKnown.setAttribute("class","underline-css");


/**
 * Skills Contents function call
 */
const skillsContents = [{
    "skill":"JavaScript",
    "level":2
     },
     {
         "skill":"Html",
         "level":3
     },
     {
         "skill":"Css",
         "level":2
     },
     {
         "skill":"React",
         "level":1
     }];
let skillsContentFunctionCall = toAddSkills(skillsContents);






/**
 * Function to display contact details onclicking on contact details
 */
function clickFunction(){
    //contactDetail.innerHTML = "Hello World";
    const emailLine = createPara('Email: xyz@gmail.com');
    emailLine.setAttribute("class", "democlass");
    const mobileNo = createPara('Mob: -1234');

    const contactDetailOutter = document.getElementById('contact-container');
    if(contactDetailOutter.innerHTML){
        contactDetailOutter.innerHTML = "";
    }else{
        contactDetailOutter.appendChild(emailLine);
        contactDetailOutter.appendChild(mobileNo);
    }
    // headingTag.appendChild(contactDetailOutter);
}



/**
 * About Me
 */
const profileSummaryData = createHeading('About Me:')
//headingTag.appendChild(profileSummaryData);
profileSummaryData.setAttribute("class","underline-css");

/**
 * About Me Content function call
 */
//headingTag.appendChild(proDetails1);
let listData = ['Completed  M.E in Information Technology, from Thakur College of Engineering and Technology.','Excellent communication skills in written and verbal both.','Eager to learn new technologies and methodologies.','Shown flexibility, quick learner, proactive attitude'];
const createList = toCreateList(listData);





/**
 * Educational Details Heading
 */

const EducationalTitle = createHeading('Educational Details:')
EducationalTitle.setAttribute('class','underline-css');


/**
 * Educational Details Content function call
 */
const educationalDetailsArray = ['M.E(Information Technology), 2018 , CGPI 7.46'];
let educationalDetailsFunctionCall = toCreateEduDetailsContent(educationalDetailsArray);




/**
 * Work Experience :
 */

const experience = createHeading('Work Experience:')
//headingTag.appendChild(experience);
experience.setAttribute('class','underline-css');

/**
 * create a function call for work experience
 */
const workExperienceDetails = ['WebVictory,Mumbai-React Developer','Assistant Professor at St.Francis Institute of Technology,Mumbai'];
const workExpFunctionCall = toCreateWorkExpContent(workExperienceDetails);





 /**
  * creating a div for Skills,about me and educational details and work experience
  */
const aboutMeEduDetailsWorkExpDiv = document.createElement("div");
aboutMeEduDetailsWorkExpDiv.appendChild(skillsKnown);
aboutMeEduDetailsWorkExpDiv.appendChild(skillsContentFunctionCall);
aboutMeEduDetailsWorkExpDiv.appendChild(profileSummaryData);
aboutMeEduDetailsWorkExpDiv.appendChild(createList);
aboutMeEduDetailsWorkExpDiv.appendChild(EducationalTitle);
aboutMeEduDetailsWorkExpDiv.appendChild(educationalDetailsFunctionCall);
aboutMeEduDetailsWorkExpDiv.appendChild(experience);
aboutMeEduDetailsWorkExpDiv.appendChild(workExpFunctionCall);
headingTag.appendChild(aboutMeEduDetailsWorkExpDiv);

aboutMeEduDetailsWorkExpDiv.setAttribute("class","aboutme-edudetailsworkexp");

/**
 * Function to create element text
 */
function createPara(text){
    const pTag = document.createElement("p");
    const node = document.createTextNode(text);
    pTag.appendChild(node);
    return pTag;
}


/**
 * Function to create element heading
 */
function createHeading(nameList){
    const hTag = document.createElement("h4");
    for(let name of nameList){
        const spanElement = document.createElement("span");
        spanElement.setAttribute('onmouseover', 'changeColor(this)');
        spanElement.setAttribute('onmouseout','mouseOut(this)');

        const textNode = document.createTextNode(name);    
        spanElement.appendChild(textNode);
        hTag.appendChild(spanElement);
    }
    return hTag;
}

