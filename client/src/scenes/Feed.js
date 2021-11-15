import React from "react";
import { MdOutlineWarning } from "react-icons/md";
function Feed() {

    return (
        <>
            <div>
                <h1>Welcome to the user feed!</h1>
            </div>
            
            <div class="feed-card">
                <div class="container">
                    <h4><b>Maria</b></h4>
                    <h6>13:18 14/11/2021</h6>
                    <p>Yesterday was an amazing day. I went to the beach and was able to surf with my friends</p>
                </div>
            </div>
            <div class="feed-card">
                <div class="container">
                    <h4><b>Alberto</b></h4>
                    <h6>10:30 14/11/2021</h6>
                    <p>I'm very tired today...</p>
                </div>
            </div>
            <div class="feed-card">
                <div class="container">
                    <h4><b>Cristina</b></h4>
                    <h6>07:47 14/11/2021</h6>
                    <p>Hey guys, checkout this new app that I found!! </p>
                    <a style={{ textDecoration: 'none', color: 'orange' }} href="http://localhost:8080/malicious-url">
                        <MdOutlineWarning style={{ marginRight: 20 }} />
                        Link to the new app.
                    </a>
                </div>
            </div>
            <div>
            </div>
        </>
    )
}

export default Feed;