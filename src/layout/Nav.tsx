import { Button, Navbar, TextInput } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar fluid={true}>
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container className="flex items-center">
            <Navbar.Brand>
              <Link to={"/"} className="text-3xl font-semibold">
                Cinema
              </Link>
            </Navbar.Brand>
            <Navbar.Divider></Navbar.Divider>
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-8"
            >
              <TextInput
                id="text"
                placeholder="Search"
                sizing="md"
                type="text"
                addonPosition="left"
                icon={<MagnifyingGlass size={20} />}
                iconPosition="right"
              />
              <Navbar.Link linkName="Home" />
              <Navbar.Link linkName="Projects" />
              <Navbar.Link linkName="About" />
            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                <TextInput
                  id="text"
                  placeholder="Search"
                  sizing="md"
                  type="text"
                  addonPosition="left"
                  icon={<MagnifyingGlass size={20} />}
                  iconPosition="right"
                />
                <Navbar.Link linkName="Home" />
                <Navbar.Link linkName="Projects" />
                <Navbar.Link linkName="Blogs" />
                <Navbar.Link linkName="News" />
                <Navbar.Link linkName="Resources" />
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>

          <Navbar.Container className="flex gap-2">
            <Button
              className="bg-red-500 text-white"
              size={"sm"}
              color={"error"}
              type={"dashed"}
            >
              Sign In
            </Button>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
      <hr />
    </div>
  );
};

export default Nav;
