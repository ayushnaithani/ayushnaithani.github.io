function Heap()
{
    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(divs[i],div_sizes[i],"rgb(224, 78, 38)");//Color update
    div_update(divs[j],div_sizes[j],"rgb(224, 78, 38)");//Color update

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(divs[i],div_sizes[i],"rgb(224, 78, 38)");//Height update
    div_update(divs[j],div_sizes[j],"rgb(224, 78, 38)");//Height update

    div_update(divs[i],div_sizes[i],"rgb(66, 141, 245)");//Color update
    div_update(divs[j],div_sizes[j],"rgb(66, 141, 245)");//Color update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_sizes[largest],"rgb(66, 141, 245)");//Color update
        }

        largest=l;

        div_update(divs[largest],div_sizes[largest],"rgb(224, 78, 38)");//Color update
    }

    if(r<n && div_sizes[r]>div_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_sizes[largest],"rgb(66, 141, 245)");//Color update
        }

        largest=r;

        div_update(divs[largest],div_sizes[largest],"rgb(224, 78, 38)");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(divs[i],div_sizes[i],"rgb(38, 224, 103)");//Color update
        div_update(divs[i],div_sizes[i],"rgb(222, 219, 22)");//Color update

        max_heapify(i,0);

        div_update(divs[i],div_sizes[i],"rgb(66, 141, 245)");//Color update
        div_update(divs[i],div_sizes[i],"rgb(38, 224, 103)");//Color update
    }
    div_update(divs[i],div_sizes[i],"rgb(38, 224, 103)");//Color update
}
