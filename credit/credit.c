#include <cs50.h>
#include <stdio.h>

// int func(int n){
//     return n % 10;
// }

int toString(int creditNumber){
    char str[20];
    sprintf(str,"%ld",creditNumber);

}
int main()
{
    int user_input;
    do
    {
        user_input = get_long("Enter credit card number: ");
    }
    while(user_input.length < 1);
    int length 
    // int result =func(user_input);
    printf("%i\n", result);

}
