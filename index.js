function superbowlWin(array) {
    const win = array.find(game => {
      console.log(`Checking year ${game.year}...`);
      return game.result === "W";
    });
    console.log("Win:", win);
    return win ? win.year : undefined;
  }
  