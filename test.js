let test1 = [1,2,3,4,5]
let test2 = [1,7,3,6,5]

for(i=0;i<test1.length;i++)
{
    for(j=0;j<test2.length;j++)
    {
        if(test1[i]==test2[j])
        {
            console.log(test1[i]);
        }
    }
}
