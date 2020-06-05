import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar_left(){
    return(
        <section className="row">
            <aside className="col p-5 mx-4">
                <ul className="list-unstyled">
                    <li className="py-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="py-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="py-2">
                        <Link to="/Tnc">Terms & Condition</Link>
                    </li>
                    <li className="py-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="py-2">
                        <Link to="/copyright">Copyright</Link>
                    </li>
                </ul>
            </aside>
      </section>
    );
}
export default Sidebar_left;