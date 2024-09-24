#include <cs50.h>
#include <stdio.h>

// int func(int n){
//     return n % 10;
// }

long toString(long creditNumber){
    char str[20];
    sprintf(str,"%ld", creditNumber);
    return strlen(str);

}
int main()
{
    int user_input;
    do
    {
        user_input = get_long("Enter credit card number: ");
    }
    while(user_input < 1);
    long length = toString(user_input);
    // int result =func(user_input);
    printf("%ld\n", length);

}
