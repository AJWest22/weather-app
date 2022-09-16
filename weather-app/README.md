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
    2. [Files Made](#files-made)

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
     2. [Imagery](#imagery)
     3. [JQuery Framework](#jquery-framework)
     4. [Crispy Forms](#crispy-forms)



## **Overview** 

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
  
  The following is some of the thought processes I had in mind when making the site when considernig a user's perspective and what they want: 

- As a user I want a site that is easy to use/navigate

- As a user I want the information on the site to be easy to read and accessible

- As a user I want a site that is aesthetically pleasing


## **About the Site**

- The site consists of 16 pages. One landing page that displays the title, current weather, and then a display for the next 15 days, and 15 individual pages, one for each day. 

- The site is made using the Weather.io API.

- The icons used were sent across with the technical challenge and downlaoded where appropriate. 

### Target Audience

The target audience is the people of York who wish to view their local weather, or anyone who is interested in the weather of York. 


## **Development of Site**

The following is a brief overview of the development of the site, including the development of the code used, and bugs solved. Any bugs that have yet to be solved have been recorded in the [bugs](#bugs) section of this README. This overview is divided into 3 sections: [Development Bugs](#development-bugs) [CSS Development](#css-development), [React Development](#react-development).

### Development Bugs

During development there were several bugs that were made that are worth mentioning: 

1. When trying to access the weather icon, description and code, when filtering the code, it couldn't be used using dot notation, like the others. I had to access it using chaining, this is why there are question marks around those objects. 

2. When filtering GroupThree there was an issue with the variables not locading and saying objects were undefined. This was fixed by rechecking the spelling of the variables/objects, and copying and pasting in the right values, and spellings.

3. When making the CSS there was an overflow bug in the Group One heading, "Forecast for the Next Five Days". There is still a slight overflow, however it was significantly reduced by removing the margin-left on mobile. 

### CSS Development

CSS is used to style the site, due to the project being asked the value functionality over a ploished look, basic CSS has been used. The colours used are from this [palete](https://colorhunt.co/palette/5800ff0096ff00d7ff72ffff). I chose blue as a main theme, due to one of the colours being #0096FF, which I figured looked like a sky blue, without being too bright and overwhelming. 

### React Development 

The React development of this site was a fun, and interesting challenge. I had worked a bit in React before, but not to this scale, and loved learning more of this framework. Emphasis was placed on ensuring all variables had suitable names and followed some kind of structure and the code used was readable. React Hooks was used to help filter the JSON file used in this project, and React Router was used for the navigation of the site.


## **Code Used**

The site is build using:
 - *CSS* to add style to the site, for example the font of the typography, and the site's *official* scolor scheme.

 - *React* to offer site structure, layout and functionality.

### Frameworks

- *React* This site was made almost entirely in React (minus the colours which were applied using CSS.) React Hooks were used when filtering the site info to setStates and useEffects. React Router DOM was used for the site's navigation menu.

### Files Made

## **Design**

The design of the site is not that great there are several CSS bugs I want to fix in it, and also want to polish and smarten it a bit to make it more aesthetically pleasing, however here is a overview of colours and fonts used when creating the site. 

### Typography

All heading tags are of the Times New Roman Font, set to various sizes depending on whether they are Heading 1, 2s, or 5s etc, and screen size. The paragraph font is the default gitpod one, and has been styled to various sizes depending on screen size. Line height has been added to keep the sentences nicely spaced and readble for users. 

### Colours 

The colours used for this site come from this [site](https://colorhunt.co/) and this colour [palette](https://colorhunt.co/palette/5800ff0096ff00d7ff72ffff) I thought that shade of blues would work as it gave off a nice bright feel, like that of a nice day, while also being reminiscient of the colour of the sky. 

### Images 

The images on this site are actually icons downloaded from the file sent across with the technical. I implemented them where appropriate, and also in the header as a way of giving off a relaxed feel while creating a decent aesthetic.


## **Code Features**



## **JSON Files**

The data presented in this app comes from the JSON file sent with the technical challenge. The file contained an array of 16 objects, each one representive of 1 day, with various keys. To present the data on the site, <p> tags and <h2> tags are used to ranslate across. The data contains weather related objects with various keys. The objects and their keys are all presented in the in-depth view of that partcular day, whie a brief overview of the more important ones are displayed in the overview of that partcular day.

