function moves(Square){
    var stormMoves = [];
//I don't think chess.js has a .turns method (?) so we should just define a variable 'turnCount'.
//Each time black makes a move, we increment this variable by 1.
    if(BaseChess.get(Square).type == 'k' && turnCount + 1 == stormTurns[stormLevel]){
 
            var starter;
            if(stormLevel < 2){
                starter = 16 - (stormLevel*4);
            }
            else{
                starter = 20 - (stormLevel*4)
            }
//This will work if we make sure that the 'liveSquares' array is ordered by how soon they get removed- 
//first 16 squares to get removed are in first 16 positions, etc.
            for(i = 0; i < BaseChess.moves(Square).length; i++){
                for(j = starter; j < liveSquares.length; j++){
                    if(BaseChess.moves(Square)[i] == playableSquares[j]){
                        stormMoves.push(liveSquares[j])
                    }
                }
            }
            return stormMoves            
        }
    else{
        for(i = 0; i < BaseChess.moves(Square).length; i++){
            for(j = 0; j < liveSquares.length; j++){
                if(BaseChess.moves(Square)[i] == playableSquares[j]){
                    stormMoves.push(liveSquares[j])
                }
            }
        }
        return stormMoves
    }
}