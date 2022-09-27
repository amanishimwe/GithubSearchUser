import './styles.css';

export default function SearchButton(props){
    return(

        <button className='button' onClick={props.search}>Search</button>
    );
   
}