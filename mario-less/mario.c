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
        
    }
}

// Function to print row
void print_row(int bricks)
{
    printf("#")
}
