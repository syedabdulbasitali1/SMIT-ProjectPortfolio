#include <stdio.h>
#include <cs50.h>

int add(int firstValue,string operator,int secondValue){
    string result = firstValue + operator + secondValue;
    printf("%i\n",result);
}

int main(void){

    int value1 = get_int("number1");
    int value2 = get_int("number2");
    char operator = get_char("operator");

    add(value1,operator,value2);


}
