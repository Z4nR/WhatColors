module.exports = {
  generateCode: (size) => {
    let generatedArray = [];
    for (let i = 0; i < 2; i++) {
      let generatedOutput = '';
      const storedCharacters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const totalCharacterSize = storedCharacters.length;
      for (let index = 0; index < size; index++) {
        generatedOutput += storedCharacters.charAt(
          Math.floor(Math.random() * totalCharacterSize)
        );
      }
      generatedArray.push({ _id: [i] + 1, key: generatedOutput });
    }
    return generatedArray;
  },
};
