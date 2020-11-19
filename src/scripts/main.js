import { LoginForm } from "./auth/LoginForm.js";
import { RegisterForm } from "./auth/RegisterForm.js";
import { generateChatForm } from "./chat/chatForm.js";
import { chatList } from "./chat/chatList.js";
import { newEventButton } from "./Events/EventButton.js";
import { Nutshell } from "./Nutshell.js";

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
const activeUserId = sessionStorage.getItem("activeUser");
if (activeUserId === null) {
  LoginForm();
  RegisterForm();
} else {
  Nutshell();
}
