/* eslint-disable */
import { Route } from 'react-router-dom';
import { Synth } from 'tone';
import Chart from '../components/Chart';
import { HandleSearchQuery } from '../components/handlers';
import ChordData from '../data.json';
import PageNotFound from './PageNotFound';

const { notes, chordTypes, twelveTones, chordShapes } = ChordData;

const synth = new Synth().toDestination();

const playNote = (note, octave=4) => {
    console.log(`${note}${octave}`);
  synth.triggerAttackRelease(`${note}${octave}`, '8n');
};

const ChordPage = ({
  match: {
    params: { chord },
  },
}) => {
  let chordName;
  let chordNote;
  let chordQuality;

  const isValidChord = notes.filter((note) => {
    const userQuery = HandleSearchQuery(chord);
    // let chordNote, chordQuality;
    if (userQuery.split('')[1] === '#' || userQuery.split('')[1] === 'b') {
      // accidental # or b / remove 2 chars
      const arr = userQuery.split('');
      chordNote = arr.splice(0, 2).join('');
      chordQuality = arr.join('');
    } else {
      // natural note / remove 1st char
      const arr = userQuery.split('');
      chordNote = arr.splice(0, 1).join('');
      chordQuality = arr.join('');
    }

    chordNote = chordNote[0].toUpperCase() + chordNote.slice(1);
    chordQuality = chordQuality.toLowerCase();

    if (note.name.match(chordNote)) {
      if (note.name === chordNote) {
        // note matches beginning of user search
        // next check if chordQuality matches
        if (Object.keys(chordTypes).includes(chordQuality)) {
          chordName = chordNote + chordQuality;
          return true;
        }
      }
    } else return false;
  })[0];

  const shuffledNotes = [...twelveTones];

  for (let i = 0; i < twelveTones.indexOf(chordNote); i++) {
    shuffledNotes.push(shuffledNotes.shift());
  }
  // console.log(shuffledNotes)

//   console.log(chordNote)
//   console.log(chordQuality)

  return !isValidChord ? (
    <Route render={PageNotFound} />
  ) : (
    <>
    <div>
    <h1>
        {chordNote} {chordTypes[chordQuality].name}
      </h1>
      <Chart tab={chordShapes[chordName]} />
    </div>
    <div>
    <p>Chord tones:</p>
      <div className="row">
        {chordTypes[chordQuality].degrees.map((degree, index) => {
            degree = degree >= 12 ? degree - 12 : degree 
            const indexOfC = shuffledNotes.indexOf('C')
            // console.log(degree >=indexOfC)
            let octave = indexOfC >= 1 && (degree >= indexOfC) ? 5 : 4
            return (
          <button type="button" onClick={() => playNote(shuffledNotes[degree], octave)} key={index} className="card">
            <p>
              <strong>{chordTypes[chordQuality].numerals[index]}</strong>
            </p>
            <p>{shuffledNotes[degree]}</p>
          </button>
        )})}
      </div>
    </div>
    </>
  );
};

export default ChordPage;
