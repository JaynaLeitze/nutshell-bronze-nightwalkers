
import { LoginForm } from "./auth/LoginForm.js";
import { RegisterForm } from "./auth/RegisterForm.js";
import { generateChatForm } from "./chat/chatForm.js";
import { chatList } from "./chat/chatList.js";
import { newEventButton } from "./Events/EventButton.js";
import { Nutshell } from "./Nutshell.js";
import {useArticles,getArticles} from "./articles/articleprovider.js"
import {articleList} from "./articles/articleList.js"
import {articleForm} from"./articles/articleform.js"
import {articleButton} from"./articles/articleButton.js"
import { EventForm } from "./Events/EventsForm.js";
import { EventList } from "./Events/EventsList.js";
import { getEvents } from "./Events/EventsProvider.js";
import "./tasks/Task.js";

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/

 
getArticles()
.then(useArticles)
LoginForm();
RegisterForm();
Nutshell();
generateChatForm();
chatList();
getTasks();
taskButton();
taskForm();
TaskList();
articleList();
articleForm();
articleButton()
newEventButton();
EventForm();
getEvents().then(EventList);
