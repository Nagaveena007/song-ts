import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Track } from "../types/song";
import SingleSong from "./SingleSong";
import Search from "../components/Search";
const FunctionalComponent = () => {
  const [music, setMusic] = useState<Track[]>([]);
  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
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
      <Row>
        <Search />
        {music.map((song) => (
          <SingleSong song={song} key={song.id} />
        ))}
      </Row>
    </>
  );
};

export default FunctionalComponent;
