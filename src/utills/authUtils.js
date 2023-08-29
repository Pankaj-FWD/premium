export const decodeTokenAndSaveUser = (data) => {
    try {
      // Save user details to local storage
      localStorage.setItem("user", JSON.stringify(data.user)); // Store the user object
  
      return true; // Successful storage
    } catch (error) {
      console.error("Error saving user data:", error);
      return false; // Storage error
    }
  };
  
  export const getUserFromLocalStorage = () => {
    try {
      const userString = localStorage.getItem("user");
      const user = JSON.parse(userString); // Parse the stored user object
      return user || null;
    } catch (error) {
      console.error("Error getting user from local storage:", error);
      return null;
    }
  };
  
  export const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    console.log("Removed user data from local storage");
  };
  