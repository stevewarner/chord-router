/* eslint-disable react/prop-types */
const Chart = (props) => {
  const { tab } = props;

  const chordTab = tab || [0, 0, 0, 0, 0, 0];

  return (
    <table>
      <tbody>
        <tr>
          {/* 1st fret */}
          <td>
            <span>{chordTab[0] === 1 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[1] === 1 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[2] === 1 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[3] === 1 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[4] === 1 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[5] === 1 ? '●' : ''}</span>
          </td>
        </tr>
        <tr>
          {/* 2nd fret */}
          <td>
            <span>{chordTab[0] === 2 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[1] === 2 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[2] === 2 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[3] === 2 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[4] === 2 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[5] === 2 ? '●' : ''}</span>
          </td>
        </tr>
        <tr>
          {/* 3rd fret */}
          <td>
            <span>{chordTab[0] === 3 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[1] === 3 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[2] === 3 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[3] === 3 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[4] === 3 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[5] === 3 ? '●' : ''}</span>
          </td>
        </tr>
        <tr>
          {/* 4th fret */}
          <td>
            <span>{chordTab[0] === 4 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[1] === 4 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[2] === 4 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[3] === 4 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[4] === 4 ? '●' : ''}</span>
          </td>
          <td>
            <span>{chordTab[5] === 4 ? '●' : ''}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Chart;
