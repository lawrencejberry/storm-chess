function game_over() {
  return (
    BaseChess.half_moves >= 100 ||
    in_checkmate() ||
    BaseChess.in_stalemate() ||
    BaseChess.insufficient_material() ||
    BaseChess.in_threefold_repetition()
  );
}
