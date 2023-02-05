import Menu from "./menu/Menu";
import EmptyChat from "./emptychat/EmptyChat";
import { Dialog ,Box,styled} from "@mui/material";

const dialogStyle={
    height:'95%',
    width:'100%',
    margin:'20px',
    maxWidth:'100%',
    maxHeight:'100%',
    borderRadius:0,
    boxShadow:'none',
    overflow:'hidden'  // no scrollbar needed
  }
  
const Component=styled(Box)`
 display:flex
`;

const LeftComponent=styled(Box)`
min-width:450px
`;

const RightComponent=styled(Box)`
width:73%;
min-width:300px;
border-left:1px solid rgba(0,0,0,0.14);
height:100%


`



const ChatDialog=()=>{
 return(
   <Dialog
   open={true}
    PaperProps={{sx:dialogStyle}}
    hideBackdrop={true}
    maxWidth={'md'}
   >
<Component>
    <LeftComponent>
        <Menu/>
    </LeftComponent>
    <RightComponent>
        <EmptyChat/>
    </RightComponent>
</Component>
   </Dialog>
 )
}

export default ChatDialog;