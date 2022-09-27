import './styles.css';

export default function UserImage(props) {
    return (
        <img className='avatar'
            src={props.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU'}
            alt='' />
    );
}