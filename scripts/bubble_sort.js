function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++) 
    {
        for(var j=0;j<array_size-i-1;j++) 
        {
            div_update(divs[j],div_sizes[j],"rgb(222, 219, 22)");
            if(div_sizes[j]>div_sizes[j+1]) 
            {
                div_update(divs[j],div_sizes[j],"rgb(224, 78, 38)");
                div_update(divs[j+1],div_sizes[j+1],"rgb(224, 78, 38)");

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j+1];
                div_sizes[j+1] = temp;

                div_update(divs[j],div_sizes[j],"rgb(224, 78, 38)");
                div_update(divs[j+1],div_sizes[j+1],"rgb(224, 78, 38)");    
            }
            div_update(divs[j],div_sizes[j],"rgb(66, 141, 245)");
        }
        div_update(divs[j],div_sizes[j],"rgb(38, 224, 103)");
    }
    div_update(divs[0],div_sizes[0],"rgb(38, 224, 103)");
    enable_buttons();
}