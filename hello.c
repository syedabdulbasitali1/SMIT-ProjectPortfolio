#include <stdio.h>
// cs50 custom header file
#include <cs50.h>

int main(void){
    printf("hello, world\n");
    string answer =get_string("whar's your name?");
    printf("hello, %s\n",answer);




int x = get_int("what's x?");
int y = get_int("what's y?");

if (x < y){
    printf("x is less than y\n");
}
else if(x > y){
    printf("x is not less than y");
}
else{
    printf("x is equal to y");
}

// for increament the number
y += 1;
y++;

// for (i =0; i <3;i++){
//     printf("meow!\n")
// }

}
