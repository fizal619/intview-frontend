# IntView
**IntView** is a **platform** for automating the interview process using the power of AI.

[LIVE VERSION](https://intview.herokuapp.com/)

![](https://media.giphy.com/media/Ytc8QLBqbkBoc/giphy.gif)

##Introduction 
The interview process is something we are all familiar with, it can vary from company to company; but certain trends remain the same. There's a *technical* side and a *cultural* side.

While the technical side can be mostly straight forward / cough tabs vs spaces cough /. The cultural side can have some tricky variables to consider, from *personal* biases the interviewer may have to whether or not it is Taco Tuesday at their company. 

This project consists of two servers, a [frontend](https://github.com/fizal619/intview-frontend) app and a [backend](https://github.com/fizal619/intview-backend) app.

-----

### Technologies Used 
Using [IBM Watson](http://www.ibm.com/watson/) to quantify ~~things like **GRIT**, **Strategic Thinking**, **Temperment**, and among other things~~ the Big 5 personality traits that would be discerned over a phone interview. However this project is not meant to replace the traditional interview process, however it is meant to combine the written and phone parts of the application process into one easy to use platform. 

The backend will be done in **Ruby on Rails** and the frontend will be a **React SPA** 
Along the way I utilized Rechartjs for my charts. 
### ERD & Routes

Backend Routes:

| Route | Description |
|------|--------------|
|~~/    | Returns the home page with the React SPA.~~| 
| /users(:.format) | The endpoint for all the CRUD operations for users.`(has_many: applications)` |
| /applications(:.format) | Full CRUD endpoints for the created applicatons. ` (has_many: responses, belongs_to: users) ` |
| /responses(:.format) | Full CRUD endpoints for the responses to the applications. ` (belongs_to: applications) ` |

Frontend Routes:

| Route | Description |
|------|--------------|
| /    | Returns the home page with the React SPA. |
| /register | Registration form. |
| /application/:id | Shows a single application to take in responses.  |
| /dashboard | User's Dashboard, only visible when logged in. |
| /dashboard/new | To create a new application |
| /dashboard/view | To view a single response |



####Diagram 

![](http://i.imgur.com/fQOmyP7.png)

### User Stories

* As a user I would like to create **unique** job applications, that can be applied to via a **unique link**. ✓
* As a user I would like to view an applicant's response in detail. ✓
* As a user I would like to view a list of job applications I created. ✓
* As a user I would view the list of applicants for a job. ✓
* As a user I would like to approve one applicant and that would make the job application link inactive. X
* As a user I want to define expiration dates for the applications. X
* As a guest I would like to fill out an application form and have my response saved for the emplyer to view.✓  



### Wireframe

View my wireframes in the Imgur album. 

[Here!](http://imgur.com/a/WmFYl)


###TODO

* Validation, as well as user feedback.
* Quantifying GRIT, Temperment, etc.
* Design it

---

###Approach Taken

Lets start with my many pitfalls. Entering this project I didn't have a clear idea of what I wanted to do. I had an ideal, a problem I thought needed to be solved. So I maped out an app That I thought I could manage in a week. I was wrong. The technology stack I chose turned out to be more of an obstacle for me than the actual problem itself. 

* CORS and RAILS took a day or two to understand.
* React on Rails took half a day to understand that I don't need it. 
* React Router took another day and half of my time. 
* Down to less than half the time I originally had, I had to build a full stack application. **So yes, my major downfall would be time management.**

I chose to build my backend separately from my frontend (mostly because of the second point above) in the interest of time. This introduced the challenge of managing CORS, which I deftly avoided by disabling all CORS security on my server (because why not?).
With my dwindled time, I still managed to get a functioning app together, which I am really excited to keep working on. I'm sure there are things in the data that IBM watson's API return that I could use to show more valuable information. 

### Resources

* [This guide](http://fancypixel.github.io/blog/2015/01/28/react-plus-flux-backed-by-rails-api/) helped me understand how to deal with using rails as a API Server as well as dealing with CORS.

* [This forum](https://developer.ibm.com/answers/questions/199673/what-is-the-best-way-to-integrate-watson-services.html) for details on how to talk to IBM in ruby since no wrapper was available.

* [This guide](https://themeteorchef.com/snippets/react-router-basics/) helped me learn how to somewhat tame the beast that is react router.

* [This post](http://www.html5rocks.com/en/tutorials/cors/) helped me understand why my backend server refused to talk to me from my webapp. EVEN THOUGH I GAVE IT LIFE, FED IT, NURTURED IT. 







