## Table of Contents

1. [Overview](#overview)

2. [Site Goals](#site-goals)
    1. [UX Goals](#ux-goals)
    2. [User Stories](#user-stories)

3. [About The Site](#about-the-site)
    1. [Target Audience](#target-audience)

4. [Development of Site](#development-of-site)
      1. [Development Bugs](#development-bugs)
      2. [CSS Development](#css-development)
      3. [React Development](#react-development)

5. [Code Used](#code-used)
    1. [Frameworks](#frameworks)
    2. [Libraries](#libraries)
    3. [Files Made](#files-made)

6. [Design](#design)
    1. [Typography](#typography)
    2. [Colors](#colors)
    3. [Images](#images)

7. [Code Features](#code-features)

8. [JSON Files](#json-files)

9. [Bugs](#bugs)

10. [Features to be Added](#features-to-be-added)

11. [Credits](#credits)
     1. [Icons](#icons)
     2. [React Framework](#react-framework)
     3. [React Router](#react-router)



## **Overview** 

- This app has been created using GitPod and code has been pushed to GitHub

- This app was made as the technical challenge for Twelve Oaks Software Development. 

- The App is a website that allows users to view the weather for York for 16 days.

- The site's source code can be viewed on GitHub

- The site's title is currently "React Weather App"


## **Site Goals**

### UX Goals

- Users can view the weather

- Site is easy to use and navigate

- Site's content is presented clearly

### User Stories
  
  The following is some of the thought processes I had in mind when making the site when considering a user's perspective and what they want: 

- As a user I want a site that is easy to use/navigate

- As a user I want the information on the site to be easy to read and accessible

- As a user I want a site that is aesthetically pleasing


## **About the Site**

- The site consists of 16 pages. One landing page that displays the title, current weather, and then a display for the next 15 days, and 15 individual pages, one for each day. 

- The site is made using the Weather.io API.

- The icons used were sent across with the technical challenge and downlaoded and placed where required. 

- To start the app in the GitPod terminal run the code: 

        **cd weather-app**

    and then run the code:

        **npm start**

### Target Audience

The target audience is the people of York who wish to view their local weather, or anyone who is interested in the weather of York. 


## **Development of Site**

The following is a brief overview of the development of the site, including the development of the code used, and bugs solved. Any bugs that have yet to be solved have been recorded in the [bugs](#bugs) section of this README. This overview is divided into 3 sections: [Development Bugs](#development-bugs) [CSS Development](#css-development), [React Development](#react-development).

### Development Bugs

During development there were several bugs that were made that are worth mentioning: 

1. When trying to access the weather icon, description and code, when filtering the code, it couldn't be used using dot notation, like the others. I had to access it using chaining, this is why there are question marks around those objects. 

2. When filtering GroupThree there was an issue with the variables not locading and saying objects were undefined. This was fixed by rechecking the spelling of the variables/objects, and copying and pasting in the right values, and spellings.

3. I had a few accidents organising the JSON file, I mixed up the days so some were being called twice, and also mixed up the variable names. Hence why there are some variable changes as evidenced in the commits of this project. 

4. When calling objects from the JSON file often they came up as undefined, this was normally due to typos, however with the objects in the weather aray such as icon/code/description, the only way to get them to display was through chaining them. I have discussed this in more detail in the bugs seciton of this README.


### CSS Development

CSS is used to style the site, due to the project being asked the value functionality over a ploished look, basic CSS has been used. The colours used are from this [palete](https://colorhunt.co/palette/5800ff0096ff00d7ff72ffff). I chose blue as a main theme, due to one of the colours being #0096FF, which I figured looked like a sky blue, without being too bright and overwhelming. 

### React Development 

The React development of this site was a fun, and interesting challenge. I had worked a bit in React before, but not to this scale, and loved learning more of this framework. Emphasis was placed on ensuring all variables had suitable names and followed some kind of structure and the code used was readable. React Hooks was used to help filter the JSON file used in this project, and React Router was used for the navigation of the site. 

The variables used in this app I have tried to keep similar to what is happening. For example the records in the forecast pages are the same as the day that has been clicked. Example Day 12 being "twelfth record". The exception of this is DayTwo which is set to detailedRecord, as this is the first that is being called. 

The variables in the components app run from 1 to 15. This is because there may be 16 days in the array, but 1 is already used (City Weather for today's weather), so the count starts at the second day, thus the first variable is set to filteredRecord, as it is the first record being filtered, despite being the second day overall in the array. I could have used secondFilteredRecord, which would have made it equivalent to it being the second day in the array, (this would probably make it easier to read and something I will probably change in future to increase readability) however I stuck with it at filteredRecord as it is the first filtered record of those 15 days.


## **Code Used**

The site is build using:
 - *CSS* to add style to the site, for example the font of the typography, and the site's *official* scolor scheme.

 - *React* to offer site structure, layout and functionality.

### Frameworks

- *React* This site was made almost entirely in React (minus the colours which were applied using CSS.) React Hooks were used when filtering the site info to setStates and useEffects. React Router DOM was used for the site's navigation menu.

### Libraries

- *React Router* is used to provide the navigation of this site. The component Link, the HashRouter, Routes, and Route, are all used in this app's functionality.

### Files Made

There have been 3 folders created. 

- *Components* which holds the components needed for this app. They can all be seen on the first page of this app. 

- *Icons* Icons holds all the icons for this app. They are downloaded from the package sent out with this challenge.

- *Pages* Pages holds all the files/pages that are user is taken to upon clicking read more. 

In total there have been 88 files made for this project, this doesn't include the standard files already included in React. 


## **Design**

The design of the site is not that great there are several CSS bugs I want to fix in it, and also want to polish and smarten it a bit to make it more aesthetically pleasing, however here is a overview of colours and fonts used when creating the site. 

### Typography

All heading tags are of the Times New Roman Font, set to various sizes depending on whether they are Heading 1, 2s, or 5s etc, and screen size. The paragraph font is the default gitpod one, and has been styled to various sizes depending on screen size. Line height has been added to keep the sentences nicely spaced and readble for users. 

### Colours 

The colours used for this site come from this [site](https://colorhunt.co/) and this colour [palette](https://colorhunt.co/palette/5800ff0096ff00d7ff72ffff) I thought that shade of blues would work as it gave off a nice bright feel, like that of a nice day, while also being reminiscient of the colour of the sky. 

### Images 

The images on this site are actually icons downloaded from the file sent across with the technical. I implemented them where appropriate, and also in the header as a way of giving off a relaxed feel while creating a decent aesthetic.



## **JSON Files**

The data presented in this app comes from the JSON file sent with the technical challenge. The file contained an array of 16 objects, each one representive of 1 day, with various keys. To present the data on the site, paragraph tags and header tags are used to ranslate across. The data contains weather related objects with various keys. The objects and their keys are all presented in the in-depth view of that partcular day, whie a brief overview of the more important ones are displayed in the overview of that partcular day.


## **Bugs**

The following is a brief overview of some of the known bugs on this site, and are things I am actively researching on how to amend ASAP.

- When viewing the app on mobile there some body color that is still visible along the sides. I have set the body width and header/group widths but can't get it go away completely. 

- The shade of blue from the present day weather section drops down a bit to far. I'm not sure why this is, though it is something I am working to correct. 

- I'm not sure why this is, but I had to use chaining in order to get access to the JSON files. Examples of this are in the City Weather and the forecast pages. I'm not sure why this is, and maybe nothing, but I'm recoridng it here in case it is a bug and for future reference. Chaining is needed to get weather objects, it then marks it as undefined but doesn't question it so it loads, this is used in place of the standard dot notation because otherwise the objects are marked as undefined. I'm not sure this is, but Chaining sorted out this bug.

- JSON files sometimes needs to be re imported in the code. I am not sure why this is. If a forecast page doesn't load first time, re import the JSON file and it should load. Iam not sure this is, the file path is correct and is unchanged from the others and occurs across all the forecast individual pages.

- Group One has to have the Days in that group imported to work, as well as the Router components. They are greyed out which means they aren't being used, but if I remove them the app ceases to function so I have had to leave them in. This is in contrast to the other groups.

- Max DHI has been imported but is set to null. As expected it turns out nothing, but I have imported it anyway, as it was included and I wasn't sure what to include or not, so imported all of it. 


## **Features to be Added**

The design of the site is something I'd like to work a lot more on. I'd like to add rounded corners of around 25px to the divs holding the remaining 15 days forecast and add a colour change of some kind, so when hovered over the background changes to a differet color and enlarges. I'd also like to add the respective icons to the center of each of those divs on the homepage.


## **Credits**

For this project I'd like to credit: my family for their support, my mentor Tim Nelson for his support with past projects and for encouraging me to go for this job, and 12 Oaks Software for sending out this enjoyable project.

### Icons

The icons for this project were sent out as part of the challenge and have been used where I think appropriate. I do not own these. All rights go to their respectful owners.

### React Framework 

React is a great framework, and one I hope to work more in in the future. It was installed for this project using the command: 'npx create-react-app app-name --use-npm' NB: "app-name" can be substituted to the name of the app you want to create. 

### React Router

React Router is a library used by the majority of react apps to provide navigation between multiple pages. It was installed using the command: npm install -i react-router-dom