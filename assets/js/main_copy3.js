hovering = false;
            $(document).ready(function()
            {
                alert($(".verticalScroll table").height());
                alert($(".verticalScroll").height() - $(".major").outerHeight(true));
                // Check if body height is higher than window height :)
                if ($(".verticalScroll table").height() > ($(".verticalScroll").outerHeight(true) - $(".major").outerHeight(true)))
                {
                    alert("Vertical Scrollbar! D:");
                    $("#itemlist").hover(function()
                    {
                        if (hovering == false) hovering = true;
                    },
                    function()
                    {
                        if (hovering == true) hovering = false;
                    });
                    
                    $("#contactdetails").hover(function()
                    {
                        if (hovering == false) hovering = true;
                    },
                    function()
                    {
                        if (hovering == true) hovering = false;
                    });
                }
                else
                {
                    return;
                };
            });