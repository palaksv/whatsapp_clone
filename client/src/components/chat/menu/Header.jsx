import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Component = styled(Box)`
  height: 40px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  & > *{
    margin:2px;
    padding:6px;
    color:#858585;
  }

  & :first-child{
   font-size:22px;
   margin-top:2px;
   margin-right:7px
  }
`;

const Image = styled("img")({
  height: 35,
  width: 35,
  borderRadius: "50%",
});

const Header = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" />
        <Wrapper>
          <ChatIcon />
          <MoreVertIcon />
        </Wrapper>
      </Component>
    </>
  );
};

export default Header;
