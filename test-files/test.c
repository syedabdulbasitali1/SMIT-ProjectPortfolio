#include <stdio.h>

void printPyramid(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < n - i; j++) // Print leading spaces
            printf(" ");
        for (int k = 0; k < 2 * i - 1; k++) // Print hashes
            printf("#");
        printf("\n");
    }
}

int main() {
    int n;
    printf("Enter number of rows: ");
    scanf("%d", &n);
    printPyramid(n);
    return 0;
}
