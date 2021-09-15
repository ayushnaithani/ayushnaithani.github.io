function Selection_sort() 
{
    c_delay = 0;
    for(var i=0;i<array_size-1;i++) {
        div_update(divs[i],div_sizes[i],"rgb(224, 78, 38)");
        min_index = i;
        for(var j=i+1;j<array_size;j++) 
        {
            div_update(divs[j],div_sizes[j],"rgb(222, 219, 22)");
            if(div_sizes[j]<div_sizes[min_index]) 
            {
                if(min_index!=i) 
                {
                    div_update(divs[min_index],div_sizes[min_index],"rgb(66, 141, 245)");
                }
                min_index=j;
                div_update(divs[min_index],div_sizes[min_index],"rgb(224, 78, 38)");
            }
            else {
                div_update(divs[j],div_sizes[j],"rgb(66, 141, 245)");
            }
        }
        if(min_index!=i) {
            var temp = div_sizes[i];
            div_sizes[i]=div_sizes[min_index];
            div_sizes[min_index]=temp;

            div_update(divs[min_index],div_sizes[min_index],"rgb(224, 78, 38)");
            div_update(divs[i],div_sizes[i],"rgb(224, 78, 38)");
            div_update(divs[min_index],div_sizes[min_index],"rgb(66, 141, 245)");           
        }
        div_update(divs[i],div_sizes[i],"rgb(38, 224, 103)");
    }
    div_update(divs[i],div_sizes[i],"rgb(38, 224, 103)");
    enable_buttons();
} 