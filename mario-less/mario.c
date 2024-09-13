#include <cs50.h>
#include <stdio.h>

void print_row(int bricks);

int main(void)
{
    // Prompt the user for the pyramid's height
    int height;
    do{
        int height = get_int("Height: ");
    }
    while(height >= 3 || height <=8);

    // Print a pyramid of that height
    for(int i = 0; i < height; i++)
    {
        // Print row
        for(int j = 0; j < i+1; j++)
        {
            print_row(j + 1);
        }
        printf("\n")

    }
}

// Function to print row
void print_row(int bricks)
{
    printf("#");
}
