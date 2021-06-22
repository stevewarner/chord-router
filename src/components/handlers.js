export const HandleSearchQuery = (search) => {
  const userQuery = search
    .toLowerCase()
    .replace('sharp', '#')
    .replace('major', 'maj')
    .replace('minor', 'min')
    .replace('diminished', 'dim')
    .replace('suspended', 'sus')
    .replace('augmented', 'aug');

  return userQuery;
};

// // handle search query and return Note + chordQuality
// export const checkChordQuality = (search) => {
//   let note;
//   let quality;
//   if (search.split('')[1] === '#' || search.split('')[1] === 'b') {
//     // accidental Ab / remove 2 chars
//     const arr = search.split('');
//     note = arr.splice(0, 2).join('');
//     quality = arr.join('');
//   } else {
//     // natural note / remove 1st char
//     const arr = search.split('');
//     note = arr.splice(0, 1).join('');
//     quality = arr.join('');
//   }
//   console.log('note', note);
//   console.log('quality', quality);
// };

// const isMinor = (string) => !!string.match(/minor/i) || !!string.match(/min/i);

// const isMajor = (string) => !!string.match(/major/i) || !!string.match(/maj/i);

// const isSus = (string) => !!string.match(/sus/i);

// const isSeventh = (string) => !!string.match(/7/i);
