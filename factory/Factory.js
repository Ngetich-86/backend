//COMMON FACTORY FUNCTIONS
export const handleValidationError = (error, res) => {
    res.status(400).json({ error: error.details[0].message });
  };
  export const handleMissingParamsError = (res) => {
    res.status(400).json({ error: "Missing URL Params" });
  };
  export const handleServerError = (error, res) => {
    res.status(500).json({ error: `An error occurred: ${error.message}` });
  };
  export const tryCatchWrapper = async (handler, req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      handleServerError(error, res);
    }
  };
  
  //USER FACTORY FUNCTIONS
  export const handleInvalidUser = (res) => {
    res.status(401).json({ message: "User account disabled. Contact the admin" });
  };
  export const handleUserNotFound = (res) => {
    res.status(404).json({ message: "User not found" });
  };
  export const handleUserExists = (res) => {
    res.status(401).json({
      message: "User already exists. Choose a unique username or email.",
    });
  };
  export const handleWrongCredentials = (res) => {
    res.status(401).json({ message: "Wrong credentials." });
  };
  