let globalFunc;
{
    let blockVar = 'blockVar';
    globalFunc = function() {
        console.log(blockVar);
    }
}

globalFunc(); // blockVar 가 사라지지 않고 계속 출력 가능함.