#include <stdio.h>
#include <cs50.h>

string add(int firstValue,char operator,int secondValue){
    string result = firstValue + operator + secondValue;
    return result;
}

int main(void){

    int value1 = get_int("number1");
    int value2 = get_int("number2");
    char operator = get_char("operator");

    printf(add(value1,operator,value2));



}
