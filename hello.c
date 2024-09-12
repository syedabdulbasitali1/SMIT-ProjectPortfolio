#include <stdio.h>
// cs50 custom header file
#include <cs50.h>

// function decleare but values not assigned yet
void meow(int n){
    for(int i =0;i<n;i++){
                printf("meow!\n");
    }

}


int main(void){


    printf("hello, world\n");
    // string answer =get_string("whar's your name?");
    // printf("hello, %s\n",answer);




// int x = get_int("what's x?");
// int y = get_int("what's y?");

// if (x < y){
//     printf("x is less than y\n");
// }
// else if(x > y){
//     printf("x is not less than y\n");
// }
// else{
//     printf("x is equal to y\n");
// }

// for increament the number
// y += 1;
// y++;

meow(5);



}


