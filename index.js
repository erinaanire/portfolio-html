/**
 * Function to create profile summary content
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



/**
 * Getting the div tag from parent
 */
const headingTag = document.getElementById("heading");
console.log("headingTag",headingTag);

/**
 * Function call to display heading name
 */
const nameHeading = createHeading('Erina Rodrigues');
headingTag.appendChild(nameHeading);


/**
 * Email line
 */
const emailLine = createPara('Email: xyz@gmail.com');
emailLine.setAttribute("class", "democlass");
headingTag.appendChild(emailLine);

/**
 * Mobile Line
 */
const mobileNo = createPara('Mob: -1234');
headingTag.appendChild(mobileNo);
const objectiveTitle = createHeading('Objective:');
headingTag.appendChild(objectiveTitle);
/**
 * Objective Data
 */
const objectiveData = createPara('To secure a position in a reputed organization where my knowledge will be optimally utilized,further giving me an opportunity to learn and enhance my knowledge.')
headingTag.appendChild(objectiveData);

/**
 * Profile summary
 */
const profileSummaryData = createHeading('Profile Summary:')
headingTag.appendChild(profileSummaryData);


/**
 * Profile summary Content function call
 */
//headingTag.appendChild(proDetails1);
let listData = ['Completed  M.E in Information Technology, from Thakur College of Engineering and Technology.','Excellent communication skills in written and verbal both.','Eager to learn new technologies and methodologies.','Shown flexibility, quick learner, proactive attitude'];
const createList = toCreateList(listData);
headingTag.appendChild(createList);



/**
 * Educational Details Heading
 */

const EducationalTitle = createHeading('Educational Details:')
headingTag.appendChild(EducationalTitle);


/**
 * Educational Details Content function call
 */
const educationalDetailsArray = ['M.E(Information Technology), 2018 , CGPI 7.46','B.E (Computer Science), in 2015, St. Francis Institute of Technology, Mumbai with  66.13%','H.S.C , in 2011 , Maharashtra State Board, with 70.00%','S.S.C, in 2009, Maharashtra State Board, with 90.92%'];
let educationalDetailsFunctionCall = toCreateEduDetailsContent(educationalDetailsArray);
headingTag.appendChild(educationalDetailsFunctionCall);

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
function createHeading(heading){
    const hTag = document.createElement("h4");
    const hNode = document.createTextNode(heading);
    hTag.appendChild(hNode);
    return hTag;
}