import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SingleSong from "./SingleSong";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Track } from "../types/song";
import "./Search.css";
import { BsSearch } from "react-icons/bs";

const FormComponent = () => {
  const [music, setMusic] = useState<Track[]>([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const fetchSongs = async (e: FormEvent) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      if (response.ok) {
        let music = await response.json();
        console.log(music.data);
        setMusic(music.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container>
        <Navbar
          bg="dark"
          expand="lg"
          style={{ width: "1470px", marginLeft: "0px" }}
        >
          <Navbar.Brand id="nav__brand">
            <h3 style={{ color: "white" }}>Songs</h3>
            <span style={{ fontSize: "x-large" }}></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto nav__link "
              id="nav-tabs"
              style={{ maxHeight: "250px" }}
              navbarScroll
            >
              <Nav.Link href="#" disabled></Nav.Link>
            </Nav>
            <Col className="mx-auto mt-2">
              <Form onSubmit={fetchSongs} className="search__box">
                <input
                  className="search__txt"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for jobs"
                />
                <BsSearch className="search__btn" />
              </Form>
            </Col>
          </Navbar.Collapse>
        </Navbar>
        <Row className="mx-auto mb-5">
          {music?.map((song) => (
            <SingleSong song={song} key={song.id} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default FormComponent;
