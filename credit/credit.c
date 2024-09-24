#include <cs50.h>
#include <stdio.h>
#include <string.h>

// int func(int n){
//     return n % 10;
// }

int toString(long creditNumber){
    char str[20];
    sprintf(str,"%ld", creditNumber);
    int length = strlen(str);

    if(length == 13 && length == 15 && length == 16)
    {

    //check number validity
    char one=str[0];
    char two[3]={str[0],str[1],'\0'};
    char three[4]={str[0],str[1],str[2],'\0'};

    if(strcmp(two,"34") >=0 && strcmp(two,"37")<=0 && length == 15)

        printf(" American Express (AMEX)\n");

    else if(strcmp(two,"51") >=0 && strcmp(two,"55")<=0 && length == 16)
        printf("MasterCard\n");
    else if(strcmp(one,"4") ==0 && length == 13 && length == 16)
        printf("Visa\n");
    }
    
    else{

    }

    return length;
}
int main()
{
    long user_input;
    do
    {
        user_input = get_long("Enter credit card number: ");
        int length = toString(user_input);

    }
    while(user_input < 1 && length == 13  || length == 15 || length == 16);
    // printf("%i\n", length);

}
