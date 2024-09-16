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
        n = cashback-25;
        n++;
    }
    while(cashback > 10)
    {
        n += (cashback - 10);
        n++;
    }
    while(cashback > 5)
    {
        n += (cashback -5);
        n++;
    }
    while(cashback > 1)
    {
        n += (cashback -1);
        n++;
    }
    return n;
}
