//to call api as soon as componnet is loaded -->  useEffect
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getUsers } from "../../../service/api.js";
import Conversation from "./Conversation.jsx";

const Conversations = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      setUsers(response);
    };
    fetchData();
  }, []);

  return (
    <Box>
      {
        //loop the users array
        users.map(user=>(
            <Conversation/>
        ))
      }
    </Box>
  );
};

export default Conversations;
