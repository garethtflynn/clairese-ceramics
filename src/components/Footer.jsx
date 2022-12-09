import React from 'react';
// import ReactDOM from 'react-dom';
// // import { SocialIcon } from 'react-social-icons';
// // ReactDOM.render(<SocialIcon url="https://github.com/ashclandry" />, document.body);

function Footer() {
    return (
        <Footer container={true}>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        href="#"
                        src="#"
                        name="Clairese Ceramics"
                    />
                    <Footer.LinkGroup>
                        <Footer.Link href="#">
                            About
                        </Footer.Link>
                        <Footer.Link href="#">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#">
                            Licensing
                        </Footer.Link>
                        <Footer.Link href="#">
                            Contact
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright
                    href="#"
                    by="© Clairese Ceramics"
                    year={2022}
                />
            </div>
        </Footer>
    );
}

export default Footer;

