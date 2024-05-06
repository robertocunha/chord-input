import { useState } from 'react';
import './App.css';

function App() {
  const [chord, setChord] = useState('');
  const [sharp, setSharp] = useState(false);
  const [flat, setFlat] = useState(false);
  const [minor, setMinor] = useState(false);
  const [bass, setBass] = useState('');
  const [sharpBass, setSharpBass] = useState(false);
  const [flatBass, setFlatBass] = useState(false);

  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  const handleChordNote = (note) => {
    setChord(note);
  };

  const handleBassNote = (note) => {
    setBass(note);
  };

  const handleSharp = () => {
    if (!sharp) {
      setFlat(false);
    }
    setSharp(!sharp);
  };

  const handleFlat = () => {
    if (!flat) {
      setSharp(false);
    }
    setFlat(!flat);
  };

  const handleSharpBass = () => {
    if (!sharpBass) {
      setFlatBass(false);
    }
    setSharpBass(!sharpBass);
  };

  const handleFlatBass = () => {
    if (!flatBass) {
      setSharpBass(false);
    }
    setFlatBass(!flatBass);
  };

  const handleMinor = () => {
    setMinor(!minor);
  };

  return (
    <>
      <h1>Experience 01b: Chord Input</h1>
      <textarea
        cols="30"
        rows="1"
        value={
          chord +
          (sharp ? '#' : '') +
          (flat ? 'b' : '') +
          (minor ? 'm' : '') +
          (bass ? '/' + bass : '') +
          (sharpBass ? '#' : '') + 
          (flatBass ? 'b' : '') 
        }
        readOnly
      ></textarea>
      <div>
        <p>Chord:</p>
        {notes.map((note) => (
          <button key={note} onClick={() => handleChordNote(note)}>
            {note}
          </button>
        ))}
      </div>
      <input
        type="checkbox"
        id="sharp"
        checked={sharp}
        onChange={handleSharp}
      />
      <label htmlFor="sharp">#</label>
      <input
        type="checkbox"
        id="flat"
        checked={flat}
        onChange={handleFlat}
      />
      <label htmlFor="flat">b</label>
      <input
        type="checkbox"
        id="minor"
        checked={minor}
        onChange={handleMinor}
      />
      <label htmlFor="minor">m</label>
      <div>
        <p>Bass:</p>
        {notes.map((note) => (
          <button key={note} onClick={() => handleBassNote(note)}>
            {note}
          </button>
        ))}
      </div>
      <input
        type="checkbox"
        id="sharpBass"
        checked={sharpBass}
        onChange={handleSharpBass}
      />
      <label htmlFor="sharpBass">#</label>
      <input
        type="checkbox"
        id="flatBass"
        checked={flatBass}
        onChange={handleFlatBass}
      />
      <label htmlFor="flatBass">b</label>
    </>
  );
}

export default App;
