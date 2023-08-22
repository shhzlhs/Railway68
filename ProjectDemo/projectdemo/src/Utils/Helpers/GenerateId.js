export function generateId() {
  let idStart = 0;
  if (localStorage && localStorage.getItem("players")) {
    let players = JSON.parse(localStorage.getItem("players"));
    players.forEach((player) => {
      if (player.id > idStart) {
        idStart = player.id;
      }
    });
  }
  let id = idStart + 1;
  return id;
}
