import axios from "../../services/axiosConfig";
import { useState } from "react";
import "./styles.css";
import Alert from "@mui/material/Alert";
import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";
import UserImage from "../UserImage";
import UserInfo from "../UserInfo";
import { Link } from "react-router-dom";


export default function Card() {
    const [name, setName] = useState("");
    const [userData, setData] = useState("");
    const [error, SetError] = useState("");



    const getValue = (event) => {
        setName(event.target.value);

    };


    async function getUserData() {

        //check whether the search input is empty before making the API call
        if (name.trim().length !== 0) {

            //adding names with their specific timestamp to the local storage
            let names;
            let date = Date.now().toString();

            if (localStorage.getItem('names')) {
                names = JSON.parse(localStorage.getItem('names'));

            }
            else {
                names = [];
            }

            names.push({ date: date, name: name });

            localStorage.setItem('names', JSON.stringify(names));


            axios
                .get(`/${name}`)
                .then((res) => {
                    setData(res.data);
                })
                .catch(() => {
                    const message = "User not found!";
                    SetError(message);
                });
            SetError('');
        }
        else {
            const message = "oops! your search input is empty!"
            SetError(message);
        }
        //resetting values to default values/ null
        setData('');
    }

    return (
        <div className="wrapper">
            <UserImage image={userData?.avatar_url} />
            <SearchInput onChange={getValue} />
            <SearchButton search={getUserData} />
            <Link to="/searched_profiles">
                <button className="button" >Search History</button>
            </Link>
            <p>{userData.login}</p>
            <UserInfo
                followers={userData?.followers}
                following={userData?.following}
                repositories={userData?.public_repos}
            />
            {error ? <Alert severity="error">{error}</Alert> : <span></span>}

        </div>
    );
}
