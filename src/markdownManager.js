let fileObject = {}

export function createEsbocoObject(string) {
    //Makes the complete file string available on the scope above, for other's functions access
    let fileString = string

    //Gets the Title of the speech
    fileObject.title = fileString.split("\r", 1)[0]

    //Sections loop
    fileObject.sections = []                                                                                    //Initialize the sections array
    const numberOfSections = fileString.split("@").length - 1                                                   //Gets the total number of sections
    for(let i = 0; i < numberOfSections; i++) {                                                                 //Loops through the complete speech string for N times (Where N is the amount of sections in the complete speech string)
        
        //Initialize section
        fileObject.sections.push({})                                                                            //Creates the correct number of sections objects and adds them to the array
        const sectionString = fileString.split("@")[i + 1]                                                      //Extract the complete section string from the complete speech string

        //Get the section Title
        fileObject.sections[i].title = sectionString.split("\r", 1)[0]                                          //Extracts just the title of the section

        //Gets the time
        const timeIndex = sectionString.indexOf("&")                                                            //Gets the position of the "&", which indicates the section's time
        const tempString = sectionString.slice(timeIndex + 1)                                                   //Removes the beginning of the string, to make it start right after the "&"
        fileObject.sections[i].time = Number(tempString.split("\r", 1)[0])                                    //Extracts just the single line with the time, and converts it to type of number

        //ID
        fileObject.sections[i].id = i                                                                           //Adds a unique ID to each section

        //Topics loop
        fileObject.sections[i].topics = []                                                                      //Initialize the topics array inside this section
        const numberOfTopics = sectionString.split(/[#%~^]+/g).length - 1                                       //Gets the total number of topics inside the current section
        for(let a = 0; a < numberOfTopics; a++) {

            //Initialize topic
            fileObject.sections[i].topics.push({})                                                              //Creates the correct number of topics objects inside the current section and adds them to the array
            const topicString = sectionString.match(/[#%~^]+/g)[a] + sectionString.split(/[#%~^]+/g)[a + 1]     //Extract the complete topic string from the complete section string

            //Initialize the items in each topic
            let level = 1
            let [type, maintext, hiddentext] = ""

            //IF the topic is a Topic
            if(topicString.startsWith("#")){

                //Check what level is this topic
                if (topicString.startsWith("###"))
                    level = 3
                else if (topicString.startsWith("##")) 
                    level = 2
                else 
                    level = 1
                
                type = "topic"                                                                                  //Since this topic begins with #, it's a topic
                maintext = topicString.split(/[#$]+/g)[1].replace(/(\r)|(\n)/g, "")                             //Extracts the maintext (after the markdown and before the hiddentext) and then removes the linebreaks
                hiddentext = topicString.split("$")[1]                                                          //Extracts the hiddentext after the markdown
                hiddentext = hiddentext ? hiddentext.replace(/(\r)|(\n)/g, "") : undefined                      //If there is a hiddentext, removes the linebreaks
            }

            //IF the topic is a verse or quote
            if(topicString.startsWith("%") || topicString.startsWith("~")){

                type = topicString.startsWith("%") ? "verse" : "quote"                                          //If starts with % it's a verse, if not it's a quote

                maintext = topicString.split(/[%~$]/g)[1].replace(/(\r)|(\n)/g, "")
                hiddentext = topicString.split("$")[1]
                hiddentext = hiddentext ? hiddentext.replace(/(\r)|(\n)/g, "") : undefined
            }

            //IF the topic is a media call
            if(topicString.startsWith("^")){

                type = "media"
                maintext = topicString.split("^")[1].replace(/(\r)|(\n)/g, "")
                hiddentext = undefined
            }

            //Mounts the topic object and adds it to the fileObject
            fileObject.sections[i].topics[a] = {
                id: a,
                level: level,
                type: type,   //topic, verse, quote, media
                maintext: maintext,
                hiddentext: hiddentext
            }
        }
    }

    return fileObject
}