import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Track } from "../types/song";
import { Container, Row, Image, Col } from "react-bootstrap";

export default function Details() {
  const { id } = useParams();

  const [music, setMusic] = useState<Track | null>(null);

  const fetchData = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/track/" + id
    );

    if (response.ok) {
      const data = await response.json();
      setMusic(data);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return music ? (
    <Container>
      <Row>
        <Col xs={10}>
          <Image fluid src={music.album.cover_medium} />

          <h4>{music.album.title}</h4>
          <h6>{music.artist.name}</h6>
        </Col>
      </Row>
    </Container>
  ) : null;
}
