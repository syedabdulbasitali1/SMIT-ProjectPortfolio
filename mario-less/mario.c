#include <cs50.h>
#include <stdio.h>

void print_row(int bricks);
void print_whitespace(int n);

int main(void)
{
    // Prompt the user for the pyramid's height
    int height;
    do{
        height = get_int("Height: ");
    }
    while(height < 3 || height > 8);

    // Print a pyramid of that height

    for(int i = 0; i > height-1; i++)
    {


        // for(int j = i-1; j > 0; j--)
        // {
        //     print_whitespace(j);
        // }

        // Print row
        for(int k = i+1; k > 0 ; k++)
        {

            print_row(i);
        }

        printf("\n");


    }
}

// Function to print row
void print_row(int bricks)
{
    printf("#");
}
// Function to print whitespace
// void print_whitespace(int n)
// {

//     printf(".");

// }
