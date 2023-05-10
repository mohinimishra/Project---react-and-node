import './sidebar.css';
import { RssFeed, Chat, Movie, Group, Bookmark, QuestionMark, Work } from '@mui/icons-material'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className='sidebarIcon' />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className='sidebarIcon' />
                        <span className="sidebarListItemText">Chat</span>
                    </li>

                    <li className="sidebarListItem">
                        <Group className='sidebarIcon' />
                        <span className="sidebarListItemText">Group</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon' />
                        <span className="sidebarListItemText">Bookmark</span>
                    </li> <li className="sidebarListItem">
                        <QuestionMark className='sidebarIcon' />
                        <span className="sidebarListItemText">Question</span>
                    </li> <li className="sidebarListItem">
                        <Work className='sidebarIcon' />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Movie className='sidebarIcon' />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHR' />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend"></li>
                    <img src="./assests/Person/1.webp" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Mohini</span>
                    <li className="sidebarFriend"></li>
                    <img src="./assests/Person/1.webp" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Mac</span>
                    <li className="sidebarFriend"></li>
                    <img src="./assests/Person/1.webp" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Misi</span>
                </ul>

            </div>

        </div >)
}