function hanoi(n, a, b, c) {
  if (n == 1) {
    console.log("Move" + n + "from" + a + "to" + c)
  } else {
    // 1.要从a到b那c就是缓冲
    hanoi(n-1, a, c, b);
    console.log("Move " + n + " from " + a + "to " + c + "</br>");
    hanoi(n-1, b, a, c);
  }
}
hanoi(3, "A", "B", "C");