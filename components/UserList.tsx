import styles from "./userlist.module.css"
interface Props {
    realtimeUser: Array<any>
}

export default function UserList(props: Props) {

    return (
        <div className={styles.grid}>
            {props.realtimeUser.map((user: any) => (
                <div key={user.SK} className={styles.circle} style={{ backgroundColor: user.color }}>
                    {user.avator}
                    <div className={styles.description}>{user.name}</div>
                </div>
            ))}
        </div>
    );
}