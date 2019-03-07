class Player {
  playTurn(warrior) {
    // Cool code goes here.
    // warrior.walk();
    if (warrior.feel().isEmpty()) {
      warrior.walk();
    } else {
      warrior.attack();
    }
  }
}
