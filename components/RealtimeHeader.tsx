import UserList from "./UserList";
import { useOnlineUsers } from '../src';

export default () => {
    const { onlineUserList } = useOnlineUsers()
    return (
        <header className="header">
            <h1 className="header_text">
                <a href="/" className="link_text">Realtimely</a>
            </h1>

            <nav className="nav">
                <ul className="ul">
                    <div>
                        <UserList realtimeUser={onlineUserList} />
                    </div>
                </ul>
            </nav>
        </header>
    )
}