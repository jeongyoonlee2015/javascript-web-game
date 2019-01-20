var //변수선언, 동시에 값 초기화
let //블록변위 지역변수 선언
const // 읽기 전용 상수 선
/* Block loop */
    {
        //{}에의해 범위설정
        statement_1;
        statement_2;
        statement_3;
    }

    //loop
    if(condition){
        statement_1;
    }else{
        statement_2;
    }

    if(condition_1){
        statement_1;
    }else if(condition_2){
        statement_2;
    }else if(condition_3){
        statement_3;
    }else if(condition_4){
        statement_4;
    }else{
        statement_last;
    }

    switch (expression) {
        case label_1:
            statement_1
            break;
    }

    //Exception loop
    //thorws
    throw expression;

    //try..catch
    try{
        //statements to try
    }catch (e) {
        // pass exception object to error handler
    }

    ->catch (catchID){
        statements
    }
    //try..catch..finally
    try{
        //statements to try
    }catch (e) {
        // pass exception object to error handler
    }finally {
        //예외가 발생하든 발생하지 않든 수행된다.
    }
