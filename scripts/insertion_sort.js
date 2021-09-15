function Insertion()
{
    c_delay = 0;
    for(var j=0;j<array_size;j++) 
    {
        div_update(divs[j],div_sizes[j],"rgb(222, 219, 22)");

        var key = div_sizes[j];
        var i = j-1;
        while(i>=0 && div_sizes[i]>key) 
        {
            div_update(divs[i],div_sizes[i],"rgb(224, 78, 38)");
            div_update(divs[i+1],div_sizes[i+1],"rgb(224, 78, 38)");
            
            div_sizes[i+1] = div_sizes[i];
             
            div_update(divs[i],div_sizes[i],"rgb(224, 78, 38)");
            div_update(divs[i+1],div_sizes[i+1],"rgb(224, 78, 38)");
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"rgb(222, 219, 22)");
            }
            else 
            {
                div_update(divs[i+1],div_sizes[i+1],"rgb(66, 141, 245)");
            }
            i-=1;
        }
        div_sizes[i+1]=key;
        for(var k=0;k<j;k++)
        {
            div_update(divs[k],div_sizes[k],"rgb(38, 224, 103)");
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"rgb(38, 224, 103)");
    enable_buttons();
}