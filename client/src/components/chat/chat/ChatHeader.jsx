import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Search, MoreVert } from "@mui/icons-material";
import { defaultProfilePicture } from "../../../constants/data";

const Header=styled(Box)`
height:44px;
background:#ededed;
display:flex;
align-items:center;
`;


const Image=styled('img')({
height:40,
width:40,
objectFit:'cover',
borderRadius:'50%'
});


const Name=styled(Typography)`
margin-left:12px !important;

`;

const Status=styled(Typography)`
margin-left:12px !important;
font-size:12px;
color:rgba(0,0,0,0.6);
`;

const RightContainer=styled(Box)`
margin-left:auto;


`

const ChatHeader = () => {
  return (
    <Header>
      <Image src={defaultProfilePicture} alt="dp" />
      <Box>
        <Name>name</Name>
        <Status>online</Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
