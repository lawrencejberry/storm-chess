function zap(){
    let removeCount = 16 - stormLevel * 4;
    if(stormLevel >= 2){
        removeCount = 20 - stormLevel * 4;
    }
    for(i = 0; i < removeCount; i++){
        BaseChess.remove(liveSquares[0]);
        liveSquares.shift();
    }
    stormLevel += 1;
    //Run the animation... should that be part of this function, or a different function?
    //Need the display to change as well, so that zapped squares don't show
}
