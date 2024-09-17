#include <cs50.h>
#include <stdio.h>

int calculate_quarters(int cents);

int main()
{
    // Prompt the user for change owed, in cents
    int cents;
    do
    {
        cents = get_int("Change owed: ");
    }
    while (cents < 0);
    // Calculate how many quarters you should give customer
    int result = calculate_quarters(cents);
    printf("%i\n", result);
}

// Function to calculate number of quarters from cents
int calculate_quarters(int cents)
{
    // Calculate how many quarters you should give customer
    int quarters = 0;
    while (cents >= 25)
    {
        cents -= 25;
        quarters++;
    }
    while (cents >= 10)
    {
        cents -= 10;
        quarters++;
    }
    while (cents >= 5)
    {
        cents = cents - 5;
        quarters++;
    }
    while (cents >= 1)
    {
        cents = cents - 1;
        quarters++;
    }
    return quarters;
}
