import React, {useEffect, useState} from 'react'
import "./Chat.css"
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AttachFile from '@material-ui/icons/AttachFile'

function Chat() {
   const [seed, setSeed] = useState("");
   useEffect(()=> {
      setSeed(Math.floor(Math.random() * 5000))
   }, []);


   return (
      <div className='chat'>
         <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

            <div className="chat__headerInfo">
               <h3>Room name</h3>
               <p>Last seen at...</p>
            </div>

            <div className="chat__headerRight">
               <IconButton>
                  <SearchIcon/>
               </IconButton>
               <IconButton>
                  <AttachFile/>
               </IconButton>
               <IconButton>
                  <MoreVertIcon/>
               </IconButton>
            </div>
         </div>

         <div className="chat__body">
            <p className='chat__message chat__receiver'>
               <span className="chat__name">Viko</span>
               Hey Guys
               <span className="chat__timestamp">3:23</span>

            </p>

         </div>

         <div className="chat__footer">

         </div>
      </div>
   )
}

export default Chat