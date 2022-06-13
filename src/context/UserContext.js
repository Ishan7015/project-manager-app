import { createContext, useState } from "react";
import { projects } from "../TempDb";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({});
    const [userProject, setUserProject] = useState([]);
    const projectArray = [];

    //Function to set userProject state based on Current User
    const getUserProject = (user) => {
        projects.forEach(project => {
            if (project.lead === user.name) projectArray.push(project);
        })
        setUserProject(projectArray);
    }

    const updateCurrentUser = (user) => {
        setCurrentUser(user);
        getUserProject(user);
    }

    return (
        <UserContext.Provider value={{
            currentUser,
            updateCurrentUser,
            userProject
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;