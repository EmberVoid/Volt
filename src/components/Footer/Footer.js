import React from 'react';
import "./Footer.css"


const Footer = () => {
    return (
        <footer className="pv4 ph3 ph5-m ph6-l" id="footerCss">
            <div className=" h6 f6 db tc">© 2018 <b className="ttu">Greivin Silva</b>., All Rights Reserved</div>
            <div className="tc mt3">
                <a href="/language/" title="Language" className="h6 f6 dib ph2 link dim">Language</a>
                <a href="/terms/" title="Terms" className="h6 f6 dib ph2 link dim">Terms of Use</a>
                <a href="/privacy/" title="Privacy" className="h6 f6 dib ph2 link dim">Privacy</a>
            </div>
        </footer>
    )
};

export default Footer;