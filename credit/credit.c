#include <cs50.h>
#include <stdio.h>

int func(int n){
    return n % 10;
}

int main()
{
    int user_input;
    do
    {
        user_input = get_long("Enter credit card number: ");
    }
    while(user_input.length < 1);
    int result =func(user_input);
    printf("%i\n", result);

}
