function createPen(penId) {
  let drawing = false;
  return {
    async draw(instructions) {
      drawing = true;
      console.log("lowering pen");
      await instructions();
      painting = false;
      console.log("lifting pen");
    },
    move(direction, distance) {
      if (!drawing) {
        console.log(
          'movement instructions must be wrapped within a "draw" instruction'
        );
        return;
      }
      console.log(`drawing ${distance} units towards ${direction}`);
    },
  };
}
