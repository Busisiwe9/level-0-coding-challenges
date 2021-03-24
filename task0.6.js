function maximumNumber(n1,n2,n3){
    if(n1<n3 && n2<n3)
        {return n3}
    else if (n1<n2 && n3<n2)
        {return n2}
    else if(n2<n1 && n3<n1)
        {return n1}
}
maximumNumber(1,2,3);