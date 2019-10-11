
/**********CODE WILL RUN PROPERLY IN TURBO C COMPILER ***************/
#include<stdio.h>
#include<conio.h>
#include<alloc.h>
struct node
{
 struct node *next;
 int coef,expo;
};
struct node *firstp=NULL,*firstr=NULL,*firstq=NULL;
struct node  *insert(struct node *first,int coef,int expo)
{
  struct node *nw,*ptr;
  nw=(struct node *)malloc(sizeof(struct node));
  nw->next=NULL;
  nw->coef=coef;
  nw->expo=expo;

  if(first==NULL)
  {

    first=nw;
  }
  else
  {
   for(ptr=first;ptr->next!=NULL;ptr=ptr->next);
     ptr->next=nw;
  }
   return first;
}

struct node *add(struct node *p,struct node *q,struct node *first)// Addition of the both the Nodes.
{
  while(p!=NULL && q!=NULL)
  {
    if(p->expo==q->expo)
    {
      first=insert(first,(p->coef+q->coef),p->expo);
       p=p->next;
       q=q->next;
    }
    else if(p->expo>q->expo)
    {
     first=insert(first,p->coef,p->expo);
     p=p->next;
    }
    else
    {
     first=insert(first,q->coef,q->expo);
     q=q->next;
    }
  }// end of the while loop.
  while(p!=NULL)
  {
   insert(first,p->coef,p->expo);
   p=p->next;
  }
  while(q!=NULL)
  {
  insert(first,q->coef,q->expo);
  q=q->next;
  }
  return first;
} // end of the ADD function.
void display(struct node *first)
{    struct node *ptr;
 for(ptr=first;ptr!=NULL;ptr=ptr->next)
 {
   printf("%d",ptr->coef);
   printf("x^%d",ptr->expo);
   printf("+");
 }
 printf("\n");

}
void main()
{
  struct node *w,*ptr;
  char ch='y';
  int coef,expo;
  clrscr();
  while(ch=='y')
  {
  printf("\n enter the coefficient : ");
  scanf("%d",&coef);
  printf("enter the exponent:");
  scanf("%d",&expo);
  firstp=insert(firstp,coef,expo);
  printf("Do you want to enter more Y/N:\t");
  ch=getch();
  }              ch='y';
  printf("\n Now for the 2nd equation");
  while(ch=='y')
  {
  printf("\n enter the coefficient : ");
  scanf("%d",&coef);
  printf("enter the exponent:");
  scanf("%d",&expo);
  firstq=insert(firstq,coef,expo);
  printf("Do you want to enter more Y/N:\t");
  ch=getch();
 }
   firstr=add(firstp,firstq,firstr);
   printf("\n the first euation is: \t");
   display(firstp);
   printf("\nthe 2nd equation is:\t");
  display(firstq);
    printf("the resultant equation is : \t");
    display(firstr);

    getch();
}


