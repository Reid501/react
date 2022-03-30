import { Button, IconButton } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';

function Sidebar() {
  return (
    <div className='sidebar'>
        <Button 
            className='sidebar__compose'
            startIcon={<AddIcon fontSize='large'
             />}>
                COMPOSE
        </Button>

        <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
        <SidebarOption Icon={StarBorderIcon} title="Starred" number={22} />
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={4} />
        <SidebarOption Icon={LabelImportantIcon} title="Important" number={17} />
        <SidebarOption Icon={SendIcon} title="Sent" number={2001} />
        <SidebarOption Icon={NoteIcon} title="Drafts" number={2} />
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={null} />

        <div className="sidebar__footer">
            <div className="sidebar__footerIcons">
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Sidebar