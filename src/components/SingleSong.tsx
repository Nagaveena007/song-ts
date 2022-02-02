import { Track } from "../types/song";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

interface SingleSongProps {
  song: Track;
}

const SingleSong = ({ song }: SingleSongProps) => (
  <>
    <Link to={`details/${song.id}`}>
      <Card className="ml-2 my-2 " style={{ width: "18rem", height: "25rem" }}>
        <Card.Img variant="top" src={song.album.cover_medium} />
        <Card.Body style={{ color: "black" }}>
          <Card.Title>{song.album.title}</Card.Title>
        </Card.Body>
        <Badge pill variant="info">
          {song.duration} Sec
        </Badge>
      </Card>
    </Link>
  </>
);

export default SingleSong;
