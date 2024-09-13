#include <cs50.h>
#include <stdio.h>

void 

int main(void)
{
    // Prompt the user for the pyramid's height
    int height;
    do{
        int height = get_int("Height: ");
    }
    while(height >= 3 || height <=8);

    // Print a pyramid of that height
}
