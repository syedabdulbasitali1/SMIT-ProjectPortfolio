#include <cs50.h>
#include <stdio.h>

// Function declaration
void printPyramid(int n);

int main(void)
{
    int n;

    // Prompt the user for the pyramid's height (1-8 range based on the problem)
    do
    {
        n = get_int("Height: ");
    }
    while (n < 1 || n > 8); // Fix to accept input between 1 and 8

    // Call the function to print the pyramid
    printPyramid(n);
}

// Function to print the pyramid
void printPyramid(int n)
{
    for (int i = 1; i <= n; i++) // Loop for each row
    {
        for (int j = 0; j < n - i; j++) // Print leading spaces
        {
            printf(" ");
        }

        for (int k = 0; k < i; k++) // Print hashes (#)
        {
            printf("#");
        }

        printf("\n"); // Move to the next line
    }
}
