import './styles.css';
export default function UserInfo(props) {
    return (
        <div className='user-info'>
            <div className='data'>
                <p>Followers: <span>{props.followers === 0 ? '0' : props.followers || '✈️'}</span></p>
            </div>
            <div className='data'>
                <p>Following: <span>{props.following === 0 ? '0' : props.following || '✈️'}</span></p>
            </div>
            <div className='data'>
                <p>Repositories: <span>{props.repositories === 0 ? '0' : props.repositories || '✈️'}</span></p>
            </div>
        </div>

    );
}