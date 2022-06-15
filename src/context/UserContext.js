import { createContext, useState } from "react";
import { projects } from "../TempDb";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({});
    const [userProject, setUserProject] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [currentProject, setCurrentProject] = useState({});
    const projectArray = [];

    //Function to set userProject state based on Current User
    const getUserProject = (user) => {
        projects.forEach(project => {
            if (project.lead === user.name) projectArray.push(project);
        })
        setUserProject(projectArray);
    }

    //Setting the current project whose details is to be displayed
    const updateCurrentProject = (project) => {
        setCurrentProject(project);
    }

    //Founction to store the user search input in a state
    const onSearchChange = (event) => {
        setSearchInput(event.target.value);
    }

    //Function to Set the currently logged in user
    const updateCurrentUser = (user) => {
        setCurrentUser(user);
        getUserProject(user);
    }

    return (
        <UserContext.Provider value={{
            currentUser,
            updateCurrentUser,
            userProject,
            onSearchChange,
            searchInput,
            updateCurrentProject,
            currentProject
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;