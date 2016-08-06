# IntView
**IntView** is a ***platform** for automating the interview process using the power of AI.

![](https://media.giphy.com/media/Ytc8QLBqbkBoc/giphy.gif)

##Introduction 
The interview process is something we are all familiar with, it can vary from company to company; but certain trends remain the same. There's a *technical* side and a *cultural* side.

While the technical side can be mostly straight forward / cough tabs vs spaces cough /. The cultural side can have some tricky variables to consider, from *personal* biases the interviewer may have to whether or not it is Taco Tuesday at their company. 

-----

### Technologies Used 
Using [IBM Watson](http://www.ibm.com/watson/) to quantify things like **GRIT**, **Strategic Thinking**, **Temperment**, and among other things that would be discerned over a phone interview. However this project is not meant to replace the traditional interview process, however it is meant to combine the written and phone parts of the application process into one easy to use platform. 

The backend will be done in **Ruby on Rails** and the frontend will be a **React SPA** 

### ERD & Routes


| Route | Description |
|------|--------------|
| /    | Returns the home page with the React SPA. |
| /users(:.format) | The endpoint for all the CRUD operations for users.`(has_many: applications)` |
| /applications(:.format) | Full CRUD endpoints for the created applicatons. ` (has_many: responses, belongs_to: users) ` |
| /responses(:.format) | Full CRUD endpoints for the responses to the applications. ` (belongs_to: applications) ` |

######Diagram 

![](http://i.imgur.com/fQOmyP7.png)

### User Stories

* As a user I would like to create **unique** job applications, that can be applied to via a unique link. 
* As a user I would like to view a list of job applications I created.
* As a user I would view the list of applicants for a job.
* As a user I would like to approve one applicant and that would make the job application link inactive. 
* As a user I want to define expiration dates for the applications.
* As a guest I would like to fill out an application form and have my response saved for the emplyer to view.  



### Wireframe

View my wireframes in the Imgur album. 

[Here!](http://imgur.com/a/WmFYl)


---

### Resources

* [This guide](http://fancypixel.github.io/blog/2015/01/28/react-plus-flux-backed-by-rails-api/) helped me understand how to deal with using rails as a API Server as well as dealing with CORS.


