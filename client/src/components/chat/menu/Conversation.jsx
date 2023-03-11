import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { setConversation } from "../../../service/api.js";
import { AccountContext } from "../../../context/AccountProvider";

const Container=styled(Box)`
display:flex;
height:45px;
padding:13px 0;
cursor:pointer;
`

const Image=styled('img')({
    borderRadius:'50%',
    width:47,
    height:47,
    padding:'0 2px'

});

const Name=styled(Typography)`
font-size:15px;
margin-top:10px;


`

const ImageContainer=styled(Box)`
margin:10px 20px 10px 20px

`

const Conversation = ({ user }) => {


const {setPerson,account}=useContext(AccountContext);

const getUser= async()=>{
setPerson(user);
await setConversation({senderId : account.sub , receiverId : user.sub  })
}

  return (
    <>
      <Container onClick={()=>getUser()}>
        <ImageContainer>
          <Image src={user.picture} alt="dp" />
        </ImageContainer>
        <Box>
          <Box>
            <Name>{user.name}</Name>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Conversation;
