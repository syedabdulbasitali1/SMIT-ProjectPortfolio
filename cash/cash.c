#include <cs50.h>
#include <stdio.h>

int r (int cashback);

int main()
{
    int cash;
    do{
        cash = get_int("inter amount: ");
    }
    while(cash < 1);

    int result = r(cash);
    printf("paid %i\n",result);



}


int r (int cashback)
{
    int n;
    while(cashback > 25){
        cashback-=25;
        printf("line 25\n");
        n = 1;
    }
    while(cashback > 10)
    {
        cashback -= 10;
        n++;
    }
    while(cashback > 5)
    {
        cashback -=5;
        n++;
    }
    while(cashback > 1)
    {
        cashback -= 1;
        n++;
    }
    return n;
}
