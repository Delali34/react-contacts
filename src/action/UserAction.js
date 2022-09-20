

  export const AddNewUser = (newUser) => {
    return {
      type: "ADD_USER",
      payload: newUser,
    };
  };
  
  export const DeleteUser = (user_id) => {
    return {
      type: "DELETE_USER",
      payload: user_id,
    }
  }
  export const UserEdit = (userData)=>{
    return{
      type: "UPDATE_USER",
      payload: {userData}
    }
  
  
  }