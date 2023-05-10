import './topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">My Social </span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon' />
                    <input type="text" placeHolder='Search For friend, post or video' className="serachInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="tobarIconItems">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="tobarIconItems">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div> <div className="tobarIconItems">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="./assests/Person/1.webp" alt="" className="tobarProfilePic" />
            </div>

        </div>

    )
}