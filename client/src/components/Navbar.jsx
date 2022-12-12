import React from 'react';
import { Navbar } from 'flowbite-react';
// import { Link } from 'react-router-dom';

function navigationBar() {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
        <Navbar.Brand href="#">
            <img
                src=""
                className="mr-3 h-6 sm:h-9"
                alt="Clairese Ceramics Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Clairese Ceramics
            </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
            <Dropdown
                arrowIcon={false}
                inline={true}
                label={<Avatar alt="Account Settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
            >
            <Dropdown.Header>
                <span className="block text-sm">
                    Test Account
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
                    Earnings
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
                Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">
                Shop
            </Navbar.Link>
            <Navbar.Link href="/navbars">
                About
            </Navbar.Link>
            <Navbar.Link href="/navbars">
                Contact
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default navigationBar;