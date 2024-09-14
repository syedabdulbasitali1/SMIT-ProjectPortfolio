#include <cs50.h>
#include <stdio.h>

// Function declaration
void printPyramid(int n);

int main(void)
{
    int n;

    // Prompt the user for the pyramid's height
    do
    {
        n = get_int("Height: ");
    }
    while (n < 1 || n > 8); // height is between 1 and 8

    // Call the function to print the double pyramid
    printPyramid(n);

    return 0; // Ensure program exits properly
}

// Function to print the double pyramid
void printPyramid(int n)
{
    for (int i = 1; i <= n; i++) // Loop for each row
    {
        // Print leading spaces for left pyramid
        for (int j = 0; j < n - i; j++)
        {
            printf(" ");
        }

        // Print hashes for left pyramid
        for (int k = 0; k < i; k++)
        {
            printf("#");
        }

        // Print gap between pyramids
        printf("  ");

        // Print hashes for right pyramid
        for (int k = 0; k < i; k++)
        {
            printf("#");
        }

        printf("\n"); // Move to the next line
    }
}
