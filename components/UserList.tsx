import { OnlineUser } from "../src/models/OnlineUser";
import styles from "./userlist.module.css"
interface Props {
    realtimeUser: Array<OnlineUser>
}

export default function UserList(props: Props) {

    return (
        <div className={styles.grid}>
            {props.realtimeUser.map((user: any) => (
                <div key={user.SK} className={styles.circle} style={{ borderColor: user.color }}>
                    {user.avator}
                    <div className={styles.description}>{user.name}</div>
                </div>
            ))}
        </div>
    );
}