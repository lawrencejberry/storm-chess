
function move(startSquare, endSquare){
    var movingSide = BaseChess.turn()
    var promotionLevel = Math.floor(stormLevel/2);
    var legality = 0;
    for(i = 0; i < stormChess.moves(startSquare).length; i++){
        if(StormChess.moves(startSquare)[i] == endSquare){
            legality = 1;
        }
    }
    if(legality == 1){
        BaseChess.move({from: startSquare, to: endSquare})
        
        if(BaseChess.get(startSquare).type == 'p'){
            if(endSquare.includes((promotionLevel + 1).toString()) || endSquare.includes((8 - promotionLevel).toString())){
                BaseChess.remove(endSquare);
                BaseChess.put({type: 'q', color: movingSide})
            }
        }

        if(BaseChess.get(startSquare).color == 'b'){
        turnCount += 1
    
    for(i = 0; i < stormTurns.length; i++){
        if(turnCount == stormTurns[i]){
            StormChess.zap(stormLevel)
        }
    }

        }
    }
}