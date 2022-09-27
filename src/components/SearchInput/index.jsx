import './styles.css';

export default function SearchInput(props) {
    return (
        <input type='text'
            className='search-input'
            placeholder='Search any github profile'
            onChange={props.onChange} />
    );
}