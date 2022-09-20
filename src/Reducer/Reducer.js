
import { v4 as uuidv4 } from "uuid";


let initialState = {users:[
    {
      name: " Dela",
      number: 5,
      location: " Danfa",
      id: uuidv4(),
    },
    {
      name: " Ernest",
      number: 21,
      location: "Danfa",
      id: uuidv4(),
    },
    {
      name: " NanaAwoa",
      number: 18,
      location: "Danfa",
      id: uuidv4(),
    },
  ]};

  let Reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        return { ...state, users: [...state.users, action.payload] };
        case "DELETE_USER":
          const unDeletedUsers = state.users.filter((user)=>user.id!==action.payload)
          return {...state ,users: unDeletedUsers}
          case "UPDATE_USER":
  
          const updatedUser = state.users.map((user)=>{
            if(user.id===action.payload.userData.id){
              return action.payload.userData
            }
            else {return user}
          })
          return {...state , users:updatedUser}
  
      default:
        return state;
    }
  };
  
  export default Reducer;