import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';

function NavigationBar() {
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                <Link to="/"><img
                    src={logo} 
                    className="mr-3 h-6 sm:h-9 "
                    alt="gareth-flynn-logo"
                    style={{width: '80px', height: '80px'}}
                /></Link>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="#" rounded={true}/>}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Test Name
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@gmail.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Orders
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        Shop
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;

