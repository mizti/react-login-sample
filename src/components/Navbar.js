import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFilePen, faArrowRightToBracket, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ isAuth }) => {
    return (
        <nav>
            <Link to="/"><FontAwesomeIcon icon={faHome} />ホーム</Link>

            {!isAuth ?
                <Link to="/login"><FontAwesomeIcon icon={faArrowRightToBracket} />ログイン</Link>
                :
                (
                    <>
                        <Link to="/createpost"><FontAwesomeIcon icon={faFilePen} />記事投稿</Link>
                        <Link to="/logout"><FontAwesomeIcon icon={faArrowLeft} />ログアウト</Link>
                    </>
                )}
        </nav>
    );
}

export default Navbar