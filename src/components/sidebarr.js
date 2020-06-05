import React from 'react'
function Sidebar_right(){
    return(
            <aside className='col pt-4 px-5'>
                <div className="trends">
                    <h6 className="trending py-2">Trending Topics</h6>
                    <ul className="list-unstyled bg-white">
                        
                        <li className="py-2">European Premiere League scripted</li>
                        <li className="py-2">La Liga to crown ParisvsGerman winners due to Covid-19</li>
                        <li className="py-2">European Premiere League suspended</li>
                        <li className="py-2">Pop Gestrida buys Real Madrid</li>
                        </ul> 
                </div>
                <div className='bg-white advert p-5 text-center'>
                    <p>Advertise with us!</p>
                    <button className="contact_btn">Contact Us</button>
                </div>
            </aside>
    );
}
export default Sidebar_right;